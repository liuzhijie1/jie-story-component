import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "fstln-peer fstln-h-4 fstln-w-4 fstln-shrink-0 fstln-rounded-sm fstln-border fstln-border-primary fstln-ring-offset-background focus-visible:fstln-outline-none focus-visible:fstln-ring-2 focus-visible:fstln-ring-ring focus-visible:fstln-ring-offset-2 disabled:fstln-cursor-not-allowed disabled:fstln-opacity-50 data-[state=checked]:fstln-bg-primary data-[state=checked]:fstln-text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("fstln-flex fstln-items-center fstln-justify-center fstln-text-current")}
    >
      <Check className="fstln-h-4 fstln-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
