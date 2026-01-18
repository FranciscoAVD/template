import { stripe } from "@/features/payments";
import { ALLOWED_STRIPE_EVENTS } from "@/features/payments/lib/constants";
import { apiResponse } from "@/lib/api-utils";
import { tryCatch } from "@/lib/utils";
import type { NextRequest } from "next/server";
import type { Stripe } from "stripe";
const ENDPOINT_SECRET = "webhook_secret" as const;

async function processEvent(event: Stripe.Event) {
  if (!ALLOWED_STRIPE_EVENTS.includes(event.type)) return;
}
async function POST(req: NextRequest) {
  const signature = req.headers.get("Stripe-Signature") as string;
  if (!signature)
    return apiResponse("BAD_REQUEST", {
      message: "No signature.",
    });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      await req.text(),
      signature,
      ENDPOINT_SECRET,
    );
  } catch (err) {
    return apiResponse("BAD_REQUEST", {
      message: "Signature verification failed.",
    });
  }
  // No await. Don't want to block the response
  // waiting for processing.
  processEvent(event);

  return apiResponse("SUCCESS_NO_CONTENT");
}

export { POST };
