import * as functions from "firebase-functions";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export const createPaymentIntent = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "El usuario debe estar autenticado para realizar pagos."
      );
    }

    try {
      const { items, currency } = data;

      // Calcula el monto total
      const amount = items.reduce((acc: number, item: any) => {
        return acc + item.price * item.quantity;
      }, 0);

      // Crea el PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Stripe usa centavos
        currency,
        metadata: {
          userId: context.auth.uid,
          items: JSON.stringify(
            items.map((item: any) => ({
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
      throw new functions.https.HttpsError(
        "internal",
        "Error al procesar el pago."
      );
    }
  }
);
