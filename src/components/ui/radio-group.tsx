import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("fstln-grid fstln-gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "fstln-aspect-square fstln-h-4 fstln-w-4 fstln-rounded-full fstln-border fstln-border-primary fstln-text-primary fstln-ring-offset-background focus:fstln-outline-none focus-visible:fstln-ring-2 focus-visible:fstln-ring-ring focus-visible:fstln-ring-offset-2 disabled:fstln-cursor-not-allowed disabled:fstln-opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="fstln-flex fstln-items-center fstln-justify-center">
        <Circle className="fstln-h-2.5 fstln-w-2.5 fstln-fill-current fstln-text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
