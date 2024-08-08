import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "fstln-inline-flex fstln-items-center fstln-justify-center fstln-rounded-md fstln-text-sm fstln-font-medium fstln-ring-offset-background fstln-transition-colors hover:fstln-bg-muted hover:fstln-text-muted-foreground focus-visible:fstln-outline-none focus-visible:fstln-ring-2 focus-visible:fstln-ring-ring focus-visible:fstln-ring-offset-2 disabled:fstln-pointer-events-none disabled:fstln-opacity-50 data-[state=on]:fstln-bg-accent data-[state=on]:fstln-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "fstln-bg-transparent",
        outline:
          "fstln-border fstln-border-input fstln-bg-transparent hover:fstln-bg-accent hover:fstln-text-accent-foreground",
      },
      size: {
        default: "fstln-h-10 fstln-px-3",
        sm: "fstln-h-9 fstln-px-2.5",
        lg: "fstln-h-11 fstln-px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
