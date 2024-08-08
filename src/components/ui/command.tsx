import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "fstln-flex fstln-h-full fstln-w-full fstln-flex-col fstln-overflow-hidden fstln-rounded-md fstln-bg-popover fstln-text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="fstln-overflow-hidden fstln-p-0 fstln-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:fstln-px-2 [&_[cmdk-group-heading]]:fstln-font-medium [&_[cmdk-group-heading]]:fstln-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:fstln-pt-0 [&_[cmdk-group]]:fstln-px-2 [&_[cmdk-input-wrapper]_svg]:fstln-h-5 [&_[cmdk-input-wrapper]_svg]:fstln-w-5 [&_[cmdk-input]]:fstln-h-12 [&_[cmdk-item]]:fstln-px-2 [&_[cmdk-item]]:fstln-py-3 [&_[cmdk-item]_svg]:fstln-h-5 [&_[cmdk-item]_svg]:fstln-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="fstln-flex fstln-items-center fstln-border-b fstln-px-3" cmdk-input-wrapper="">
    <Search className="fstln-mr-2 fstln-h-4 fstln-w-4 fstln-shrink-0 fstln-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "fstln-flex fstln-h-11 fstln-w-full fstln-rounded-md fstln-bg-transparent fstln-py-3 fstln-text-sm fstln-outline-none placeholder:fstln-text-muted-foreground disabled:fstln-cursor-not-allowed disabled:fstln-opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("fstln-max-h-[300px] fstln-overflow-y-auto fstln-overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="fstln-py-6 fstln-text-center fstln-text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "fstln-overflow-hidden fstln-p-1 fstln-text-foreground [&_[cmdk-group-heading]]:fstln-px-2 [&_[cmdk-group-heading]]:fstln-py-1.5 [&_[cmdk-group-heading]]:fstln-text-xs [&_[cmdk-group-heading]]:fstln-font-medium [&_[cmdk-group-heading]]:fstln-text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("fstln--mx-1 fstln-h-px fstln-bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "fstln-relative fstln-flex fstln-cursor-default fstln-select-none fstln-items-center fstln-rounded-sm fstln-px-2 fstln-py-1.5 fstln-text-sm fstln-outline-none data-[disabled=true]:fstln-pointer-events-none data-[selected='true']:fstln-bg-accent data-[selected=true]:fstln-text-accent-foreground data-[disabled=true]:fstln-opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "fstln-ml-auto fstln-text-xs fstln-tracking-widest fstln-text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
