import { productsTable, purchasesTable } from "@/db/schema";

type Product = typeof productsTable.$inferSelect;
type Purchase = typeof purchasesTable.$inferSelect;

type NewProduct = typeof productsTable.$inferInsert;
type NewPurchase = typeof purchasesTable.$inferInsert;

export type { Product, NewProduct, Purchase, NewPurchase };
