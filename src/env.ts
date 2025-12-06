import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    DB_HOST: z.string().optional(),
    DB_NAME: z.string().min(1, "DB: Name is required."),
    DB_USERNAME: z.string().min(1, "DB: Username required."),
    DB_PASSWORD: z.string().min(1, "DB: Password required."),
    DB_PORT: z.string().refine((p) => Number.isInteger(parseInt(p)), {
      error: "Invalid port.",
    }),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
  },
  emptyStringAsUndefined: true,
});

export { env };
