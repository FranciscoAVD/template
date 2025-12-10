import { useEffect, useState } from "react";

/**
 * A custom React hook for debouncing a value.
 *
 * @param value The value to debounce.
 * @param delay The delay in milliseconds for the debounce. Defaults to 500ms.
 * @returns The debounced value.
 */
function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };
