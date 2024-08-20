import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "fstln-flex fstln-h-full fstln-w-full data-[panel-group-direction=vertical]:fstln-flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "fstln-relative fstln-flex fstln-w-px fstln-items-center fstln-justify-center fstln-bg-border after:fstln-absolute after:fstln-inset-y-0 after:fstln-left-1/2 after:fstln-w-1 after:fstln--translate-x-1/2 focus-visible:fstln-outline-none focus-visible:fstln-ring-1 focus-visible:fstln-ring-ring focus-visible:fstln-ring-offset-1 data-[panel-group-direction=vertical]:fstln-h-px data-[panel-group-direction=vertical]:fstln-w-full data-[panel-group-direction=vertical]:after:fstln-left-0 data-[panel-group-direction=vertical]:after:fstln-h-1 data-[panel-group-direction=vertical]:after:fstln-w-full data-[panel-group-direction=vertical]:after:fstln--translate-y-1/2 data-[panel-group-direction=vertical]:after:fstln-translate-x-0 [&[data-panel-group-direction=vertical]>div]:fstln-rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="fstln-z-10 fstln-flex fstln-h-4 fstln-w-3 fstln-items-center fstln-justify-center fstln-rounded-sm fstln-border fstln-bg-border">
        <GripVertical className="fstln-h-2.5 fstln-w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
