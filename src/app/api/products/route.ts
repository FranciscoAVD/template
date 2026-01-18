import type { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
//use-cases
import { addProductSchema } from "@/features/products/lib/schemas";
import { addStripeProduct } from "@f/payments/use-cases/add-stripe-product";
import { addProduct } from "@/features/products/use-cases/add-product";
//utils
import { apiResponse } from "@/lib/api-utils";
import { tryCatch } from "@/lib/utils";
import { treeifyError } from "zod";

async function POST(req: NextRequest) {
  const curr = await auth();
  if (!curr.isAuthenticated)
    return apiResponse("UNAUTHENTICATED", {
      message: "Unauthenticated",
    });

  if (curr.orgRole !== "admin")
    return apiResponse("FORBIDDEN", {
      message: "Insufficient permissions",
    });

  const body = await tryCatch(req.json());

  if (body.error !== null)
    return apiResponse("BAD_REQUEST", {
      message: "Expected JSON",
    });

  const { success, data, error } = addProductSchema.safeParse(
    body.data,
  );

  if (!success)
    return apiResponse("UNPROCESSABLE_CONTENT", {
      errors: treeifyError(error).properties,
      message: "Validation failed",
    });

  //Add to stripe
  const productId = await addStripeProduct({
    name: data.name,
    ...(data.description && { description: data.description }),
    active: data.isActive,
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

  return id !== null
    ? apiResponse("RESOURCE_CREATED", {
        message: "Product created.",
      })
    : apiResponse("SERVER_ERROR");
}

export { POST };
