export interface Author {
  id: string;
  name: string;
  email: string;
  stripeAccountId?: string;
  isStripeEnabled: boolean;
}

export interface Book {
  id: string;
  title: string;
  price: number;
  authorId: string;
  stripeProductId?: string;
  stripePriceId?: string;
}
