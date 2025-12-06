import { defineConfig } from "drizzle-kit";
import { dbURL } from "@/db";
defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: dbURL,
  },
});

export default defineConfig;
