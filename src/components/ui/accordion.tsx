import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("fstln-border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="fstln-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "fstln-flex fstln-flex-1 fstln-items-center fstln-justify-between fstln-py-4 fstln-font-medium fstln-transition-all hover:fstln-underline [&[data-state=open]>svg]:fstln-rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="fstln-h-4 fstln-w-4 fstln-shrink-0 fstln-transition-transform fstln-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="fstln-overflow-hidden fstln-text-sm fstln-transition-all data-[state=closed]:fstln-animate-accordion-up data-[state=open]:fstln-animate-accordion-down"
    {...props}
  >
    <div className={cn("fstln-pb-4 fstln-pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
