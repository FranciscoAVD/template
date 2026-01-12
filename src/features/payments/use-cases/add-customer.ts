// IMPORTANT: Stripe does not require a valid customer id
// for checkout. Be sure to create it beforehand.

import { stripe } from "@f/payments/index";
import type { Stripe } from "stripe";
import { tryCatch } from "@/lib/utils";
import { env } from "@/env";

async function addCustomer(
  data: Stripe.CustomerCreateParams,
): Promise<Stripe.Response<Stripe.Customer> | null> {
  const res = await tryCatch(stripe.customers.create(data));

  if (res.error !== null) {
    if (env.NODE_ENV === "development") {
      console.error(
        `[STRIPE_CUSTOMER_CREATE]
      Name: ${data.name ?? "NOT PROVIDED"},
      Email: ${data.email ?? "NOT PROVIDED"},
      Phone: ${data.phone ?? "NOT PROVIDED"},
      Metadata: ${data.metadata ?? "NOT PROVIDED"}.
      Error message: ${res.error.message}`,
      );
    } else {
      // Logging solution for prod
    }

    return null;
  }

  return res.data;
}

export { addCustomer };
