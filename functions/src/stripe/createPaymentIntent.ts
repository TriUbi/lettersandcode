import { onCall, HttpsError } from "firebase-functions/v2/https";
import Stripe from "stripe";
import * as dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error(
    "La clave secreta de Stripe no está configurada en las variables de entorno"
  );
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-12-18.acacia",
});

interface PaymentData {
  items: Array<{
    id: string;
    price: number;
    quantity: number;
  }>;
  currency: string;
}

export const createPaymentIntent = onCall(async (request) => {
  const paymentData = request.data as PaymentData;

  if (!request.auth) {
    throw new HttpsError(
      "unauthenticated",
      "El usuario debe estar autenticado para realizar pagos."
    );
  }

  try {
    const { items, currency } = paymentData;

    // Calcula el monto total
    const amount = items.reduce((acc: number, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    // Crea el PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe usa centavos
      currency,
      metadata: {
        userId: request.auth.uid,
        items: JSON.stringify(
          items.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          }))
        ),
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.error("Error creating payment intent:", error);
    throw new HttpsError("internal", "Error al procesar el pago.");
  }
});
