import * as functions from "firebase-functions";
import Stripe from "stripe";
import * as admin from "firebase-admin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export const stripeWebhook = functions.https.onRequest(
  async (request, response) => {
    const sig = request.headers["stripe-signature"];

    if (!sig) {
      response.status(400).send("No Stripe signature found");
      return;
    }

    try {
      const event = stripe.webhooks.constructEvent(
        request.rawBody,
        sig,
        endpointSecret
      );

      // Maneja diferentes tipos de eventos
      switch (event.type) {
        case "payment_intent.succeeded":
          const paymentIntent = event.data.object as Stripe.PaymentIntent;
          await handlePaymentSuccess(paymentIntent);
          break;

        case "payment_intent.payment_failed":
          const failedPayment = event.data.object as Stripe.PaymentIntent;
          await handlePaymentFailure(failedPayment);
          break;
      }

      response.json({ received: true });
    } catch (err: any) {
      console.error("Error processing webhook:", err);
      response.status(400).send(`Webhook Error: ${err.message}`);
    }
  }
);

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  const { userId, items } = paymentIntent.metadata;

  if (!userId || !items) return;

  const db = admin.firestore();
  const parsedItems = JSON.parse(items);

  // Crear registro de la orden
  await db.collection("orders").add({
    userId,
    items: parsedItems,
    amount: paymentIntent.amount,
    currency: paymentIntent.currency,
    status: "completed",
    paymentIntentId: paymentIntent.id,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  // Actualizar inventario si es necesario
  // Enviar email de confirmación
  // etc...
}

async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
  const { userId } = paymentIntent.metadata;

  if (!userId) return;

  const db = admin.firestore();

  // Registrar el fallo
  await db.collection("failedPayments").add({
    userId,
    paymentIntentId: paymentIntent.id,
    error: paymentIntent.last_payment_error,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  // Notificar al usuario si es necesario
}
