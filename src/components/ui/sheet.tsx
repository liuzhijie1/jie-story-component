import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fstln-fixed fstln-inset-0 fstln-z-50 fstln-bg-black/80 fstln- data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fstln-fixed fstln-z-50 fstln-gap-4 fstln-bg-background fstln-p-6 fstln-shadow-lg fstln-transition fstln-ease-in-out data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-duration-300 data-[state=open]:fstln-duration-500",
  {
    variants: {
      side: {
        top: "fstln-inset-x-0 fstln-top-0 fstln-border-b data-[state=closed]:fstln-slide-out-to-top data-[state=open]:fstln-slide-in-from-top",
        bottom:
          "fstln-inset-x-0 fstln-bottom-0 fstln-border-t data-[state=closed]:fstln-slide-out-to-bottom data-[state=open]:fstln-slide-in-from-bottom",
        left: "fstln-inset-y-0 fstln-left-0 fstln-h-full fstln-w-3/4 fstln-border-r data-[state=closed]:fstln-slide-out-to-left data-[state=open]:fstln-slide-in-from-left sm:fstln-max-w-sm",
        right:
          "fstln-inset-y-0 fstln-right-0 fstln-h-full fstln-w-3/4 fstln- fstln-border-l data-[state=closed]:fstln-slide-out-to-right data-[state=open]:fstln-slide-in-from-right sm:fstln-max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="fstln-absolute fstln-right-4 fstln-top-4 fstln-rounded-sm fstln-opacity-70 fstln-ring-offset-background fstln-transition-opacity hover:fstln-opacity-100 focus:fstln-outline-none focus:fstln-ring-2 focus:fstln-ring-ring focus:fstln-ring-offset-2 disabled:fstln-pointer-events-none data-[state=open]:fstln-bg-secondary">
        <X className="fstln-h-4 fstln-w-4" />
        <span className="fstln-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "fstln-flex fstln-flex-col fstln-space-y-2 fstln-text-center sm:fstln-text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "fstln-flex fstln-flex-col-reverse sm:fstln-flex-row sm:fstln-justify-end sm:fstln-space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("fstln-text-lg fstln-font-semibold fstln-text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("fstln-text-sm fstln-text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
