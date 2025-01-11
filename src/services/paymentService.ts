import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();

interface CreateCheckoutSessionRequest {
  items: {
    bookId: string;
    quantity: number;
  }[];
  membershipType?: "monthly" | "yearly";
}

interface CreateCheckoutSessionResponse {
  sessionUrl: string;
}

interface CreateAuthorAccountLinkRequest {
  authorId: string;
}

interface CreateAuthorAccountLinkResponse {
  url: string;
}

export const paymentService = {
  // Crear sesión de checkout para libros y/o membresía
  createCheckoutSession: async (
    request: CreateCheckoutSessionRequest
  ): Promise<string> => {
    try {
      const createCheckoutSessionFn = httpsCallable<
        CreateCheckoutSessionRequest,
        CreateCheckoutSessionResponse
      >(functions, "createCheckoutSession");

      const result = await createCheckoutSessionFn(request);
      return result.data.sessionUrl;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      throw error;
    }
  },

  // Crear link para que los autores configuren su cuenta Stripe Connect
  createAuthorAccountLink: async (authorId: string): Promise<string> => {
    try {
      const createAccountLinkFn = httpsCallable<
        CreateAuthorAccountLinkRequest,
        CreateAuthorAccountLinkResponse
      >(functions, "createAuthorAccountLink");

      const result = await createAccountLinkFn({ authorId });
      return result.data.url;
    } catch (error) {
      console.error("Error creating account link:", error);
      throw error;
    }
  },
};
