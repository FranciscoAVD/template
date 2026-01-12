import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    DB_HOST: z.string().default("localhost"),
    DB_NAME: z.string().min(1, "DB: Name is required."),
    DB_USERNAME: z.string().min(1, "DB: Username required."),
    DB_PASSWORD: z.string().min(1, "DB: Password required."),
    DB_PORT: z.string().refine((p) => Number.isInteger(parseInt(p)), {
      error: "DB: Invalid port.",
    }),
    REDIS_HOST: z.string().default("localhost"),
    REDIS_PORT: z
      .string()
      .refine((p) => Number.isInteger(parseInt(p)), {
        error: "REDIS: Invalid port.",
      }),
    REDIS_PASSWORD: z.string().min(1, "REDIS: Password required."),
    DEFAULT_REDIS_TTL: z.coerce.number(),
    STRIPE_TEST_KEY: z.string(),
    STRIPE_SECRET_KEY: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    DEFAULT_REDIS_TTL: process.env.DEFAULT_REDIS_TTL,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_TEST_KEY: process.env.STRIPE_TEST_KEY,
  },
  emptyStringAsUndefined: true,
});

export { env };
