import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "fstln-relative fstln-w-full fstln-rounded-lg fstln-border fstln-p-4 [&>svg~*]:fstln-pl-7 [&>svg+div]:fstln-translate-y-[-3px] [&>svg]:fstln-absolute [&>svg]:fstln-left-4 [&>svg]:fstln-top-4 [&>svg]:fstln-text-foreground",
  {
    variants: {
      variant: {
        default: "fstln-bg-background fstln-text-foreground",
        destructive:
          "fstln-border-destructive/50 fstln-text-destructive dark:fstln-border-destructive [&>svg]:fstln-text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("fstln-mb-1 fstln-font-medium fstln-leading-none fstln-tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("fstln-text-sm [&_p]:fstln-leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
