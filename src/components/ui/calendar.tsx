import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("fstln-p-3", className)}
      classNames={{
        months: "fstln-flex fstln-flex-col sm:fstln-flex-row fstln-space-y-4 sm:fstln-space-x-4 sm:fstln-space-y-0",
        month: "fstln-space-y-4",
        caption: "fstln-flex fstln-justify-center fstln-pt-1 fstln-relative fstln-items-center",
        caption_label: "fstln-text-sm fstln-font-medium",
        nav: "fstln-space-x-1 fstln-flex fstln-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "fstln-h-7 fstln-w-7 fstln-bg-transparent fstln-p-0 fstln-opacity-50 hover:fstln-opacity-100"
        ),
        nav_button_previous: "fstln-absolute fstln-left-1",
        nav_button_next: "fstln-absolute fstln-right-1",
        table: "fstln-w-full fstln-border-collapse fstln-space-y-1",
        head_row: "fstln-flex",
        head_cell:
          "fstln-text-muted-foreground fstln-rounded-md fstln-w-9 fstln-font-normal fstln-text-[0.8rem]",
        row: "fstln-flex fstln-w-full fstln-mt-2",
        cell: "fstln-h-9 fstln-w-9 fstln-text-center fstln-text-sm fstln-p-0 fstln-relative [&:has([aria-selected].day-range-end)]:fstln-rounded-r-md [&:has([aria-selected].day-outside)]:fstln-bg-accent/50 [&:has([aria-selected])]:fstln-bg-accent first:[&:has([aria-selected])]:fstln-rounded-l-md last:[&:has([aria-selected])]:fstln-rounded-r-md focus-within:fstln-relative focus-within:fstln-z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "fstln-h-9 fstln-w-9 fstln-p-0 fstln-font-normal aria-selected:fstln-opacity-100"
        ),
        day_range_end: "fstln-day-range-end",
        day_selected:
          "fstln-bg-primary fstln-text-primary-foreground hover:fstln-bg-primary hover:fstln-text-primary-foreground focus:fstln-bg-primary focus:fstln-text-primary-foreground",
        day_today: "fstln-bg-accent fstln-text-accent-foreground",
        day_outside:
          "fstln-day-outside fstln-text-muted-foreground fstln-opacity-50 aria-selected:fstln-bg-accent/50 aria-selected:fstln-text-muted-foreground aria-selected:fstln-opacity-30",
        day_disabled: "fstln-text-muted-foreground fstln-opacity-50",
        day_range_middle:
          "aria-selected:fstln-bg-accent aria-selected:fstln-text-accent-foreground",
        day_hidden: "fstln-invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="fstln-h-4 fstln-w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="fstln-h-4 fstln-w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
