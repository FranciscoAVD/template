import { stripe } from "@f/payments/index";
import type { Stripe } from "stripe";
import { tryCatch } from "@/lib/utils";
import { env } from "@/env";

async function addProduct(
  data: Stripe.ProductCreateParams,
): Promise<Stripe.Response<Stripe.Product> | null> {
  const res = await tryCatch(stripe.products.create(data));

  if (res.error !== null) {
    if (env.NODE_ENV === "development") {
      console.error(
        `[STRIPE_PRODUCT_CREATE]
      Name: ${data.name}
      Error message: ${res.error.message}`,
      );
    } else {
      // Logging solution for prod
    }

    return null;
  }

  return res.data;
}

export { addProduct };
