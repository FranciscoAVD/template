import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "@/env";

if (env.NODE_ENV === "production" && env.DB_HOST === "localhost") {
  throw new Error("DB: Host set to 'localhost'.");
}

//postgresql://[user[:password]@]host[:port][/database][?parameter1=value1&parameter2=value2]
const dbURL =
  `postgresql://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}` as const;

const database = drizzle(dbURL);

export { database as db, dbURL };
