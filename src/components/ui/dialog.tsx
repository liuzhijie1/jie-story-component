import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fstln-fixed fstln-inset-0 fstln-z-50 fstln-bg-black/80 fstln- data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fstln-fixed fstln-left-[50%] fstln-top-[50%] fstln-z-50 fstln-grid fstln-w-full fstln-max-w-lg fstln-translate-x-[-50%] fstln-translate-y-[-50%] fstln-gap-4 fstln-border fstln-bg-background fstln-p-6 fstln-shadow-lg fstln-duration-200 data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[state=closed]:fstln-fade-out-0 data-[state=open]:fstln-fade-in-0 data-[state=closed]:fstln-zoom-out-95 data-[state=open]:fstln-zoom-in-95 data-[state=closed]:fstln-slide-out-to-left-1/2 data-[state=closed]:fstln-slide-out-to-top-[48%] data-[state=open]:fstln-slide-in-from-left-1/2 data-[state=open]:fstln-slide-in-from-top-[48%] sm:fstln-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="fstln-absolute fstln-right-4 fstln-top-4 fstln-rounded-sm fstln-opacity-70 fstln-ring-offset-background fstln-transition-opacity hover:fstln-opacity-100 focus:fstln-outline-none focus:fstln-ring-2 focus:fstln-ring-ring focus:fstln-ring-offset-2 disabled:fstln-pointer-events-none data-[state=open]:fstln-bg-accent data-[state=open]:fstln-text-muted-foreground">
        <X className="fstln-h-4 fstln-w-4" />
        <span className="fstln-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "fstln-flex fstln-flex-col fstln-space-y-1.5 fstln-text-center sm:fstln-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
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
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "fstln-text-lg fstln-font-semibold fstln-leading-none fstln-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("fstln-text-sm fstln-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
