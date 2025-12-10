import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TryCatchResult_T<T> =
  | { data: T; error: null }
  | { data: null; error: Error };

async function tryCatch<T>(
  fn: Promise<T>,
): Promise<TryCatchResult_T<T>> {
  try {
    const res = await fn;
    return { data: res, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}

export { cn, tryCatch };
