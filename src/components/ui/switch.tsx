import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "fstln-peer fstln-inline-flex fstln-h-6 fstln-w-11 fstln-shrink-0 fstln-cursor-pointer fstln-items-center fstln-rounded-full fstln-border-2 fstln-border-transparent fstln-transition-colors focus-visible:fstln-outline-none focus-visible:fstln-ring-2 focus-visible:fstln-ring-ring focus-visible:fstln-ring-offset-2 focus-visible:fstln-ring-offset-background disabled:fstln-cursor-not-allowed disabled:fstln-opacity-50 data-[state=checked]:fstln-bg-primary data-[state=unchecked]:fstln-bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "fstln-pointer-events-none fstln-block fstln-h-5 fstln-w-5 fstln-rounded-full fstln-bg-background fstln-shadow-lg fstln-ring-0 fstln-transition-transform data-[state=checked]:fstln-translate-x-5 data-[state=unchecked]:fstln-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
