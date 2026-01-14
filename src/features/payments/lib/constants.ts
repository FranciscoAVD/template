const TEST_PAYMENT_CARDS = [
  "4242_4242_4242_4242", // Visa 3-digit CVC
  "5555_5555_5555_4444", // Mastercard 3-digit CVC
  "6011_1111_1111_1117", // Discover 3-digit CVC
  "3782_822463_10005", // Amex 4-digit CVC
] as const;

const ALLOWED_STRIPE_EVENTS = [] as const;

export { ALLOWED_STRIPE_EVENTS, TEST_PAYMENT_CARDS };
