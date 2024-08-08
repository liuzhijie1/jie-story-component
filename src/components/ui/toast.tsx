import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fstln-fixed fstln-top-0 fstln-z-[100] fstln-flex fstln-max-h-screen fstln-w-full fstln-flex-col-reverse fstln-p-4 sm:fstln-bottom-0 sm:fstln-right-0 sm:fstln-top-auto sm:fstln-flex-col md:fstln-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "fstln-group fstln-pointer-events-auto fstln-relative fstln-flex fstln-w-full fstln-items-center fstln-justify-between fstln-space-x-4 fstln-overflow-hidden fstln-rounded-md fstln-border fstln-p-6 fstln-pr-8 fstln-shadow-lg fstln-transition-all data-[swipe=cancel]:fstln-translate-x-0 data-[swipe=end]:fstln-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:fstln-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:fstln-transition-none data-[state=open]:fstln-animate-in data-[state=closed]:fstln-animate-out data-[swipe=end]:fstln-animate-out data-[state=closed]:fstln-fade-out-80 data-[state=closed]:fstln-slide-out-to-right-full data-[state=open]:fstln-slide-in-from-top-full data-[state=open]:sm:fstln-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "fstln-border fstln-bg-background fstln-text-foreground",
        destructive:
          "fstln-destructive fstln-group fstln-border-destructive fstln-bg-destructive fstln-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "fstln-inline-flex fstln-h-8 fstln-shrink-0 fstln-items-center fstln-justify-center fstln-rounded-md fstln-border fstln-bg-transparent fstln-px-3 fstln-text-sm fstln-font-medium fstln-ring-offset-background fstln-transition-colors hover:fstln-bg-secondary focus:fstln-outline-none focus:fstln-ring-2 focus:fstln-ring-ring focus:fstln-ring-offset-2 disabled:fstln-pointer-events-none disabled:fstln-opacity-50 group-[.destructive]:fstln-border-muted/40 group-[.destructive]:hover:fstln-border-destructive/30 group-[.destructive]:hover:fstln-bg-destructive group-[.destructive]:hover:fstln-text-destructive-foreground group-[.destructive]:focus:fstln-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "fstln-absolute fstln-right-2 fstln-top-2 fstln-rounded-md fstln-p-1 fstln-text-foreground/50 fstln-opacity-0 fstln-transition-opacity hover:fstln-text-foreground focus:fstln-opacity-100 focus:fstln-outline-none focus:fstln-ring-2 group-hover:fstln-opacity-100 group-[.destructive]:fstln-text-red-300 group-[.destructive]:hover:fstln-text-red-50 group-[.destructive]:focus:fstln-ring-red-400 group-[.destructive]:focus:fstln-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="fstln-h-4 fstln-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("fstln-text-sm fstln-font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("fstln-text-sm fstln-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
