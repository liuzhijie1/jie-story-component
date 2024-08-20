import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "fstln-z-50 fstln-w-72 fstln-rounded-md fstln-border fstln-bg-popover fstln-p-4 fstln-text-popover-foreground fstln-shadow-md fstln-outline-none data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0 data-[state=closed]:fstln-zoom-out-95 data-[state=open]:fstln-zoom-in-95 data-[side=bottom]:fstln-slide-in-from-top-2 data-[side=left]:fstln-slide-in-from-right-2 data-[side=right]:fstln-slide-in-from-left-2 data-[side=top]:fstln-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
