import { z } from "zod";
import { MIN_PRODUCT_PRICE } from "./constants";

const addProductSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(255, "Name is too long."),
  description: z.string().optional(),
  price: z
    .number()
    .min(
      MIN_PRODUCT_PRICE,
      `Price cannot be below ${MIN_PRODUCT_PRICE}`,
    ),
  isActive: z.boolean(),
});

export { addProductSchema };
