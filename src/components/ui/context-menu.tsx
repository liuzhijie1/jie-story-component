import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-px-2 fstln-py-1.5 fstln-text-sm fstln-outline-none focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[state=open]:fstln-bg-accent data-[state=open]:fstln-text-accent-foreground",
      inset && "fstln-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="fstln-ml-auto fstln-h-4 fstln-w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "fstln-z-50 fstln-min-w-[8rem] fstln-overflow-hidden fstln-rounded-md fstln-border fstln-bg-popover fstln-p-1 fstln-text-popover-foreground fstln-shadow-md data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0 data-[state=closed]:fstln-zoom-out-95 data-[state=open]:fstln-zoom-in-95 data-[side=bottom]:fstln-slide-in-from-top-2 data-[side=left]:fstln-slide-in-from-right-2 data-[side=right]:fstln-slide-in-from-left-2 data-[side=top]:fstln-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "fstln-z-50 fstln-min-w-[8rem] fstln-overflow-hidden fstln-rounded-md fstln-border fstln-bg-popover fstln-p-1 fstln-text-popover-foreground fstln-shadow-md fstln-animate-in fstln-fade-in-80 data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0 data-[state=closed]:fstln-zoom-out-95 data-[state=open]:fstln-zoom-in-95 data-[side=bottom]:fstln-slide-in-from-top-2 data-[side=left]:fstln-slide-in-from-right-2 data-[side=right]:fstln-slide-in-from-left-2 data-[side=top]:fstln-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-px-2 fstln-py-1.5 fstln-text-sm fstln-outline-none focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[disabled]:fstln-pointer-events-none data-[disabled]:fstln-opacity-50",
      inset && "fstln-pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-py-1.5 fstln-pl-8 fstln-pr-2 fstln-text-sm fstln-outline-none focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[disabled]:fstln-pointer-events-none data-[disabled]:fstln-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="fstln-absolute fstln-left-2 fstln-flex fstln-h-3.5 fstln-w-3.5 fstln-items-center fstln-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="fstln-h-4 fstln-w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-py-1.5 fstln-pl-8 fstln-pr-2 fstln-text-sm fstln-outline-none focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[disabled]:fstln-pointer-events-none data-[disabled]:fstln-opacity-50",
      className
    )}
    {...props}
  >
    <span className="fstln-absolute fstln-left-2 fstln-flex fstln-h-3.5 fstln-w-3.5 fstln-items-center fstln-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="fstln-h-2 fstln-w-2 fstln-fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "fstln-px-2 fstln-py-1.5 fstln-text-sm fstln-font-semibold fstln-text-foreground",
      inset && "fstln-pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("fstln--mx-1 fstln-my-1 fstln-h-px fstln-bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "fstln-ml-auto fstln-text-xs fstln-tracking-widest fstln-text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
