import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "fstln-flex fstln-h-10 fstln-w-full fstln-items-center fstln-justify-between fstln-rounded-md fstln-border fstln-border-input fstln-bg-background fstln-px-3 fstln-py-2 fstln-text-sm fstln-ring-offset-background placeholder:fstln-text-muted-foreground focus:fstln-outline-none focus:fstln-ring-2 focus:fstln-ring-ring focus:fstln-ring-offset-2 disabled:fstln-cursor-not-allowed disabled:fstln-opacity-50 [&>span]:fstln-line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="fstln-h-4 fstln-w-4 fstln-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "fstln-flex fstln-cursor-default fstln-items-center fstln-justify-center fstln-py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="fstln-h-4 fstln-w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "fstln-flex fstln-cursor-default fstln-items-center fstln-justify-center fstln-py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="fstln-h-4 fstln-w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "fstln-relative fstln-z-50 fstln-max-h-96 fstln-min-w-[8rem] fstln-overflow-hidden fstln-rounded-md fstln-border fstln-bg-popover fstln-text-popover-foreground fstln-shadow-md data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0 data-[state=closed]:fstln-zoom-out-95 data-[state=open]:fstln-zoom-in-95 data-[side=bottom]:fstln-slide-in-from-top-2 data-[side=left]:fstln-slide-in-from-right-2 data-[side=right]:fstln-slide-in-from-left-2 data-[side=top]:fstln-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:fstln-translate-y-1 data-[side=left]:fstln--translate-x-1 data-[side=right]:fstln-translate-x-1 data-[side=top]:fstln--translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "fstln-p-1",
          position === "popper" &&
            "fstln-h-[var(--radix-select-trigger-height)] fstln-w-full fstln-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("fstln-py-1.5 fstln-pl-8 fstln-pr-2 fstln-text-sm fstln-font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-w-full fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-py-1.5 fstln-pl-8 fstln-pr-2 fstln-text-sm fstln-outline-none focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[disabled]:fstln-pointer-events-none data-[disabled]:fstln-opacity-50",
      className
    )}
    {...props}
  >
    <span className="fstln-absolute fstln-left-2 fstln-flex fstln-h-3.5 fstln-w-3.5 fstln-items-center fstln-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="fstln-h-4 fstln-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("fstln--mx-1 fstln-my-1 fstln-h-px fstln-bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
