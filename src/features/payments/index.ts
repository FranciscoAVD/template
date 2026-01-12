import "server-only";

import { env } from "@/env";
import Stripe from "stripe";

const stripe = new Stripe(
  env.NODE_ENV === "development"
    ? env.STRIPE_TEST_KEY
    : env.STRIPE_SECRET_KEY,
);

export { stripe };
