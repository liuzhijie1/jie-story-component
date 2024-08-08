import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "fstln-flex fstln-h-10 fstln-items-center fstln-space-x-1 fstln-rounded-md fstln-border fstln-bg-background fstln-p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-px-3 fstln-py-1.5 fstln-text-sm fstln-font-medium fstln-outline-none focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[state=open]:fstln-bg-accent data-[state=open]:fstln-text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
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
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "fstln-z-50 fstln-min-w-[8rem] fstln-overflow-hidden fstln-rounded-md fstln-border fstln-bg-popover fstln-p-1 fstln-text-popover-foreground data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0 data-[state=closed]:fstln-zoom-out-95 data-[state=open]:fstln-zoom-in-95 data-[side=bottom]:fstln-slide-in-from-top-2 data-[side=left]:fstln-slide-in-from-right-2 data-[side=right]:fstln-slide-in-from-left-2 data-[side=top]:fstln-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "fstln-z-50 fstln-min-w-[12rem] fstln-overflow-hidden fstln-rounded-md fstln-border fstln-bg-popover fstln-p-1 fstln-text-popover-foreground fstln-shadow-md data-[state=open]:fstln-animate-in data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0 data-[state=closed]:fstln-zoom-out-95 data-[state=open]:fstln-zoom-in-95 data-[side=bottom]:fstln-slide-in-from-top-2 data-[side=left]:fstln-slide-in-from-right-2 data-[side=right]:fstln-slide-in-from-left-2 data-[side=top]:fstln-slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-px-2 fstln-py-1.5 fstln-text-sm fstln-outline-none focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[disabled]:fstln-pointer-events-none data-[disabled]:fstln-opacity-50",
      inset && "fstln-pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-py-1.5 fstln-pl-8 fstln-pr-2 fstln-text-sm fstln-outline-none focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[disabled]:fstln-pointer-events-none data-[disabled]:fstln-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="fstln-absolute fstln-left-2 fstln-flex fstln-h-3.5 fstln-w-3.5 fstln-items-center fstln-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="fstln-h-4 fstln-w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-py-1.5 fstln-pl-8 fstln-pr-2 fstln-text-sm fstln-outline-none focus:fstln-bg-accent focus:fstln-text-accent-foreground data-[disabled]:fstln-pointer-events-none data-[disabled]:fstln-opacity-50",
      className
    )}
    {...props}
  >
    <span className="fstln-absolute fstln-left-2 fstln-flex fstln-h-3.5 fstln-w-3.5 fstln-items-center fstln-justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="fstln-h-2 fstln-w-2 fstln-fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "fstln-px-2 fstln-py-1.5 fstln-text-sm fstln-font-semibold",
      inset && "fstln-pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("fstln--mx-1 fstln-my-1 fstln-h-px fstln-bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
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
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
