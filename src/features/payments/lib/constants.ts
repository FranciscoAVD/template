import type { Stripe } from "stripe";

const TEST_PAYMENT_CARDS = [
  "4242_4242_4242_4242", // Visa 3-digit CVC
  "5555_5555_5555_4444", // Mastercard 3-digit CVC
  "6011_1111_1111_1117", // Discover 3-digit CVC
  "3782_822463_10005", // Amex 4-digit CVC
] as const;

/*
All Stripe events can be found at:
https://docs.stripe.com/api/events/types
*/
const ALLOWED_STRIPE_EVENTS: Stripe.Event.Type[] = [
  "checkout.session.async_payment_failed",
  "checkout.session.async_payment_succeeded",
  "checkout.session.completed",
  // "checkout.session.expired",
  "payment_intent.created",
  "payment_intent.canceled",
  "payment_intent.payment_failed",
  "payment_intent.succeeded",
] as const;

export { ALLOWED_STRIPE_EVENTS, TEST_PAYMENT_CARDS };
