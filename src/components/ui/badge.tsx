import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "fstln-inline-flex fstln-items-center fstln-rounded-full fstln-border fstln-px-2.5 fstln-py-0.5 fstln-text-xs fstln-font-semibold fstln-transition-colors focus:fstln-outline-none focus:fstln-ring-2 focus:fstln-ring-ring focus:fstln-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "fstln-border-transparent fstln-bg-primary fstln-text-primary-foreground hover:fstln-bg-primary/80",
        secondary:
          "fstln-border-transparent fstln-bg-secondary fstln-text-secondary-foreground hover:fstln-bg-secondary/80",
        destructive:
          "fstln-border-transparent fstln-bg-destructive fstln-text-destructive-foreground hover:fstln-bg-destructive/80",
        outline: "fstln-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
