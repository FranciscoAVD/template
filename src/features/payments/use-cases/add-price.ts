import { stripe } from "@f/payments/index";
import type { Stripe } from "stripe";
import { tryCatch } from "@/lib/utils";
import { env } from "@/env";

async function addPrice(
  data: Stripe.PriceCreateParams,
): Promise<Stripe.Response<Stripe.Price> | null> {
  const res = await tryCatch(stripe.prices.create(data));

  if (res.error !== null) {
    if (env.NODE_ENV === "development") {
      console.error(
        `[STRIPE_PRICE_CREATE]
        Product: ${data.product ?? "NOT PROVIDED"}
        Amount: ${data.unit_amount ?? "NOT PROVIDED"}`,
      );
    } else {
      // Logging solution for prod
    }

    return null;
  }

  return res.data;
}

export { addPrice };
