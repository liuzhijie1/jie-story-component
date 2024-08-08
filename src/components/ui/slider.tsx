import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-w-full fstln-touch-none fstln-select-none fstln-items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="fstln-relative fstln-h-2 fstln-w-full fstln-grow fstln-overflow-hidden fstln-rounded-full fstln-bg-secondary">
      <SliderPrimitive.Range className="fstln-absolute fstln-h-full fstln-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="fstln-block fstln-h-5 fstln-w-5 fstln-rounded-full fstln-border-2 fstln-border-primary fstln-bg-background fstln-ring-offset-background fstln-transition-colors focus-visible:fstln-outline-none focus-visible:fstln-ring-2 focus-visible:fstln-ring-ring focus-visible:fstln-ring-offset-2 disabled:fstln-pointer-events-none disabled:fstln-opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
