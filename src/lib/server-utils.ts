import "server-only";
import { NextResponse } from "next/server";

type HTTPResponse =
  | "SUCCESS"
  | "RESOURCE_CREATED"
  | "SUCCESS_NO_CONTENT"
  | "BAD_REQUEST"
  | "UNAUTHENTICATED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "UNPROCESSABLE_CONTENT"
  | "RESOURCE_LOCKED"
  | "SERVER_ERROR";

const HTTP_RESPONSE: Record<HTTPResponse, number> = {
  SUCCESS: 200,
  RESOURCE_CREATED: 201,
  SUCCESS_NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHENTICATED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_CONTENT: 422,
  RESOURCE_LOCKED: 423,
  SERVER_ERROR: 500,
} as const;

type ResponseOptions = {
  data?: any;
  message?: string;
  errors?: any;
};

function apiResponse(
  type: HTTPResponse,
  options: ResponseOptions,
): NextResponse<ResponseOptions> {
  const { data, errors, message } = options;

  const body = {
    ...(data !== undefined && { data }),
    ...(errors !== undefined && { errors }),
    ...(message !== undefined && { message }),
  };

  return NextResponse.json(body, {
    status: HTTP_RESPONSE[type],
  });
}

export { apiResponse };
