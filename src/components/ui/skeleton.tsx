import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("fstln-animate-pulse fstln-rounded-md fstln-bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
