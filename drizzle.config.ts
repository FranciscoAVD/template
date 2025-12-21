import { defineConfig } from "drizzle-kit";
import { dbURL } from "@/db";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: dbURL,
  },
});
