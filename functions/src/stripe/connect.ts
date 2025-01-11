import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import Stripe from "stripe";
import * as dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error(
    "La clave secreta de Stripe no está configurada en las variables de entorno"
  );
}

interface CreateAccountLinkData {
  authorId: string;
}

interface CheckoutSessionData {
  items: Array<{
    bookId: string;
    quantity: number;
  }>;
  membershipType?: "monthly" | "yearly";
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

// Crear una cuenta Connect para un autor
export const createAuthorAccount = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError(
      "unauthenticated",
      "Debes estar autenticado para crear una cuenta de autor"
    );
  }

  try {
    // Crear cuenta Stripe Connect
    const account = await stripe.accounts.create({
      type: "express",
      country: "ES", // Ajusta según tu país
      email: request.auth.token.email,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    });

    // Guardar el ID de la cuenta en Firestore
    await admin.firestore().collection("authors").doc(request.auth.uid).update({
      stripeAccountId: account.id,
      isStripeEnabled: false,
    });

    return { accountId: account.id };
  } catch (error) {
    console.error("Error creating author account:", error);
    throw new HttpsError("internal", "Error al crear la cuenta de autor");
  }
});

// Crear link para que el autor configure su cuenta
export const createAuthorAccountLink = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError(
      "unauthenticated",
      "Debes estar autenticado para configurar tu cuenta"
    );
  }

  try {
    const data = request.data as CreateAccountLinkData;
    const authorDoc = await admin
      .firestore()
      .collection("authors")
      .doc(data.authorId)
      .get();
    const author = authorDoc.data();

    if (!author?.stripeAccountId) {
      throw new HttpsError(
        "failed-precondition",
        "El autor no tiene una cuenta Stripe Connect"
      );
    }

    const accountLink = await stripe.accountLinks.create({
      account: author.stripeAccountId,
      refresh_url: `${process.env.FRONTEND_URL}/author/stripe/refresh`,
      return_url: `${process.env.FRONTEND_URL}/author/stripe/return`,
      type: "account_onboarding",
    });

    return { url: accountLink.url };
  } catch (error) {
    console.error("Error creating account link:", error);
    throw new HttpsError("internal", "Error al crear el link de configuración");
  }
});

// Crear sesión de checkout para libros y membresía
export const createCheckoutSession = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError(
      "unauthenticated",
      "Debes estar autenticado para realizar el pago"
    );
  }

  try {
    const data = request.data as CheckoutSessionData;
    const { items, membershipType } = data;
    const lineItems = [];

    // Agregar items (libros)
    for (const item of items) {
      const bookDoc = await admin
        .firestore()
        .collection("books")
        .doc(item.bookId)
        .get();
      const book = bookDoc.data();

      if (!book) continue;

      const authorDoc = await admin
        .firestore()
        .collection("authors")
        .doc(book.authorId)
        .get();
      const author = authorDoc.data();

      if (!author?.stripeAccountId || !author.isStripeEnabled) continue;

      lineItems.push({
        price: book.stripePriceId,
        quantity: item.quantity,
        transfer_data: {
          destination: author.stripeAccountId,
        },
      });
    }

    // Agregar membresía si se seleccionó
    if (membershipType) {
      const priceId =
        membershipType === "monthly"
          ? process.env.STRIPE_MONTHLY_PRICE_ID
          : process.env.STRIPE_YEARLY_PRICE_ID;

      lineItems.push({
        price: priceId,
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/checkout/success`,
      cancel_url: `${process.env.FRONTEND_URL}/checkout/cancel`,
      customer_email: request.auth.token.email,
    });

    return { sessionUrl: session.url };
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw new HttpsError("internal", "Error al crear la sesión de pago");
  }
});
