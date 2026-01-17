import type { NextRequest } from "next/server";
import { apiResponse } from "@/lib/api-utils";
import { tryCatch } from "@/lib/utils";
import { addProductSchema } from "@/features/products/lib/schemas";
import { addStripeProduct } from "@f/payments/use-cases/add-stripe-product";
import { treeifyError } from "zod";
import { addProduct } from "@/features/products/use-cases/add-product";

async function POST(req: NextRequest) {
  //auth check
  // ...

  const body = await tryCatch(req.json());

  if (body.error !== null)
    return apiResponse("BAD_REQUEST", {
      message: body.error.message,
    });

  const { success, data, error } = addProductSchema.safeParse(
    body.data,
  );

  if (!success)
    return apiResponse("UNPROCESSABLE_CONTENT", {
      errors: treeifyError(error).properties,
      message: "Validation failed.",
    });

  //Add to stripe
  const productId = await addStripeProduct({
    name: data.name,
    ...(data.description && { description: data.description }),
    default_price_data: {
      currency: "usd",
      unit_amount: data.price,
    },
  });

  if (!productId) return apiResponse("SERVER_ERROR");

  const id = await addProduct({
    ...data,
    stripeProductId: productId,
  });

  return id
    ? apiResponse("RESOURCE_CREATED", {
        message: "Product created.",
      })
    : apiResponse("SERVER_ERROR", {
        message:
          "Failed to record product to Database. Record available in Stripe.",
      });
}

export { POST };
