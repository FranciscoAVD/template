import { apiResponse } from "@/lib/server-utils";
import type { NextRequest } from "next/server";

async function POST(req: NextRequest) {
  return apiResponse("SUCCESS_NO_CONTENT");
}
