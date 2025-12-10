import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "@/env";

let dbHost: string | undefined;

switch (env.NODE_ENV) {
  case "development": {
    dbHost = "localhost";
    break;
  }
  case "production": {
    if (!env.DB_HOST) {
      throw new Error(
        "DB: Host not defined in environment variables.",
      );
    }
    dbHost = env.DB_HOST;
    break;
  }
}

//postgresql://[user[:password]@]host[:port][/database][?parameter1=value1&parameter2=value2]
const dbURL =
  `postgresql://${env.DB_USERNAME}:${env.DB_PASSWORD}@${dbHost}:${env.DB_PORT}/${env.DB_NAME}` as const;

const database = drizzle(dbURL);

export { database as db, dbURL };
