import {
  pgTable,
  integer,
  varchar,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
const MAX_VARCHAR_LENGTH = 255 as const;

const id = integer("id").primaryKey().generatedByDefaultAsIdentity();
const createdAt = timestamp("created_at", {
  withTimezone: false,
  mode: "date",
})
  .notNull()
  .defaultNow();
const updatedAt = timestamp("updated_at", {
  withTimezone: false,
  mode: "date",
}).defaultNow();

const productsTable = pgTable("products", {
  id,
  name: varchar("name", { length: MAX_VARCHAR_LENGTH }).notNull(),
  description: text("description"),
  price: integer("price").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  stripeProductId: text("stripe_product_id").notNull(),
  createdAt,
  updatedAt,
});

const purchasesTable = pgTable("purchases", {
  id,
  clerkId: text("clerk_id").notNull(),
  productId: integer("product_id")
    .references(() => productsTable.id)
    .notNull(),
  createdAt,
  updatedAt,
});

export { productsTable, purchasesTable };
