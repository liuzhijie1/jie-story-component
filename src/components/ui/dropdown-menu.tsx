import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-px-2 fstln-py-1.5 fstln-text-sm fstln-outline-none focus:fstln-bg-accent data-[state=open]:fstln-bg-accent",
      inset && "fstln-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="fstln-ml-auto fstln-h-4 fstln-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "fstln-z-50 fstln-min-w-[8rem] fstln-overflow-hidden fstln-rounded-md fstln-border fstln-bg-popover fstln-p-1 fstln-text-popover-foreground fstln-shadow-lg data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0 data-[state=closed]:fstln-zoom-out-95 data-[state=open]:fstln-zoom-in-95 data-[side=bottom]:fstln-slide-in-from-top-2 data-[side=left]:fstln-slide-in-from-right-2 data-[side=right]:fstln-slide-in-from-left-2 data-[side=top]:fstln-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "fstln-z-50 fstln-min-w-[8rem] fstln-overflow-hidden fstln-rounded-md fstln-border fstln-bg-popover fstln-p-1 fstln-text-popover-foreground fstln-shadow-md data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0 data-[state=closed]:fstln-zoom-out-95 data-[state=open]:fstln-zoom-in-95 data-[side=bottom]:fstln-slide-in-from-top-2 data-[side=left]:fstln-slide-in-from-right-2 data-[side=right]:fstln-slide-in-from-left-2 data-[side=top]:fstln-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-px-2 fstln-py-1.5 fstln-text-sm fstln-outline-none fstln-transition-colors focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[disabled]:fstln-pointer-events-none data-[disabled]:fstln-opacity-50",
      inset && "fstln-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-py-1.5 fstln-pl-8 fstln-pr-2 fstln-text-sm fstln-outline-none fstln-transition-colors focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[disabled]:fstln-pointer-events-none data-[disabled]:fstln-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="fstln-absolute fstln-left-2 fstln-flex fstln-h-3.5 fstln-w-3.5 fstln-items-center fstln-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="fstln-h-4 fstln-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-py-1.5 fstln-pl-8 fstln-pr-2 fstln-text-sm fstln-outline-none fstln-transition-colors focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[disabled]:fstln-pointer-events-none data-[disabled]:fstln-opacity-50",
      className
    )}
    {...props}
  >
    <span className="fstln-absolute fstln-left-2 fstln-flex fstln-h-3.5 fstln-w-3.5 fstln-items-center fstln-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="fstln-h-2 fstln-w-2 fstln-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "fstln-px-2 fstln-py-1.5 fstln-text-sm fstln-font-semibold",
      inset && "fstln-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("fstln--mx-1 fstln-my-1 fstln-h-px fstln-bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("fstln-ml-auto fstln-text-xs fstln-tracking-widest fstln-opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
