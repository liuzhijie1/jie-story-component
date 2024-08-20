import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "fstln-relative fstln-z-10 fstln-flex fstln-max-w-max fstln-flex-1 fstln-items-center fstln-justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "fstln-group fstln-flex fstln-flex-1 fstln-list-none fstln-items-center fstln-justify-center fstln-space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "fstln-group fstln-inline-flex fstln-h-10 fstln-w-max fstln-items-center fstln-justify-center fstln-rounded-md fstln-bg-background fstln-px-4 fstln-py-2 fstln-text-sm fstln-font-medium fstln-transition-colors hover:fstln-bg-accent hover:fstln-text-accent-foreground focus:fstln-bg-accent focus:fstln-text-accent-foreground focus:fstln-outline-none disabled:fstln-pointer-events-none disabled:fstln-opacity-50 data-[active]:fstln-bg-accent/50 data-[state=open]:fstln-bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "fstln-group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="fstln-relative fstln-top-[1px] fstln-ml-1 fstln-h-3 fstln-w-3 fstln-transition fstln-duration-200 group-data-[state=open]:fstln-rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "fstln-left-0 fstln-top-0 fstln-w-full data-[motion^=from-]:fstln-animate-in data-[motion^=to-]:fstln-animate-out data-[motion^=from-]:fstln-fade-in data-[motion^=to-]:fstln-fade-out data-[motion=from-end]:fstln-slide-in-from-right-52 data-[motion=from-start]:fstln-slide-in-from-left-52 data-[motion=to-end]:fstln-slide-out-to-right-52 data-[motion=to-start]:fstln-slide-out-to-left-52 md:fstln-absolute md:fstln-w-auto fstln-",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("fstln-absolute fstln-left-0 fstln-top-full fstln-flex fstln-justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "fstln-origin-top-center fstln-relative fstln-mt-1.5 fstln-h-[var(--radix-navigation-menu-viewport-height)] fstln-w-full fstln-overflow-hidden fstln-rounded-md fstln-border fstln-bg-popover fstln-text-popover-foreground fstln-shadow-lg data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-zoom-out-95 data-[state=open]:fstln-zoom-in-90 md:fstln-w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "fstln-top-full fstln-z-[1] fstln-flex fstln-h-1.5 fstln-items-end fstln-justify-center fstln-overflow-hidden data-[state=visible]:fstln-animate-in data-[state=hidden]:fstln-animate-out data-[state=hidden]:fstln-fade-out data-[state=visible]:fstln-fade-in",
      className
    )}
    {...props}
  >
    <div className="fstln-relative fstln-top-[60%] fstln-h-2 fstln-w-2 fstln-rotate-45 fstln-rounded-tl-sm fstln-bg-border fstln-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
