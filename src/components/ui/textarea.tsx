import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "fstln-flex fstln-min-h-[80px] fstln-w-full fstln-rounded-md fstln-border fstln-border-input fstln-bg-background fstln-px-3 fstln-py-2 fstln-text-sm fstln-ring-offset-background placeholder:fstln-text-muted-foreground focus-visible:fstln-outline-none focus-visible:fstln-ring-2 focus-visible:fstln-ring-ring focus-visible:fstln-ring-offset-2 disabled:fstln-cursor-not-allowed disabled:fstln-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
