import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "fstln-flex fstln-h-10 fstln-w-full fstln-rounded-md fstln-border fstln-border-input fstln-bg-background fstln-px-3 fstln-py-2 fstln-text-sm fstln-ring-offset-background file:fstln-border-0 file:fstln-bg-transparent file:fstln-text-sm file:fstln-font-medium placeholder:fstln-text-muted-foreground focus-visible:fstln-outline-none focus-visible:fstln-ring-2 focus-visible:fstln-ring-ring focus-visible:fstln-ring-offset-2 disabled:fstln-cursor-not-allowed disabled:fstln-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
