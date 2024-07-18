import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

export const twMerge = extendTailwindMerge({
  prefix: "fstln-",
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
