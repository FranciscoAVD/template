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
  errors?: { [key: string]: string[] };
};

/**
 * Creates a Next.js `NextResponse` object for API responses with a
 * standardized format.
 * This function is designed to be used only on the server.
 *
 * @param {HTTPResponse} type - The type of HTTP response, which maps to
 * a specific HTTP status code.
 * @param {ResponseOptions} options - An object containing optional data,
 *  messages, or errors to include in the response body.
 * @param {any} [options.data] - The main data payload of the response.
 * @param {string} [options.message] - A human-readable message
 * describing the response.
 * @param {{ [key: string]: string[] }} [options.errors] - An object
 * where keys represent fields or categories of errors, and values are
 * arrays of strings describing the error messages for that field.
 * @returns {NextResponse<ResponseOptions>} A `NextResponse` object with
 * the specified status code and body.
 * @example
 * // Example of a successful response with data
 * const successResponse = apiResponse("SUCCESS", {
 *   data: { userId: "123", username: "john_doe" },
 *   message: "User data retrieved successfully."
 * });
 * // Resulting NextResponse will have status 200 and a body like:
 * // {
 * //   "data": {
 * //            "userId": "123",
 * //            "username": "john_doe"
 * //           },
 * //   "message": "User data retrieved successfully."
 * // }
 */
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
