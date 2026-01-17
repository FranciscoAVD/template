import { db } from "@/db/index";
import { productsTable } from "@/db/schema";
import type { NewProduct, Product } from "@/db/types";
import { tryCatch } from "@/lib/utils";
import { env } from "@/env";

async function addProduct(
  data: NewProduct,
): Promise<Product["id"] | null> {
  const res = await tryCatch(
    db
      .insert(productsTable)
      .values(data)
      .returning({ id: productsTable.id }),
  );

  if (res.error !== null) {
    if (env.NODE_ENV === "development") {
      console.error(
        `[DATABASE] Failed to add product. Full error: ${res.error.message}`,
      );
    } else {
      // Logging solution for prod
    }
    return null;
  }
  return res.data[0].id;
}

export { addProduct };
