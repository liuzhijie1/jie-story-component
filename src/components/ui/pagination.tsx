import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from '@/lib/utils'
import { ShadcnButtonProps as ButtonProps } from '@/components/ui/button'
import buttonVariants from '@/lib/buttonVariants'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('fstln-mx-auto fstln-flex fstln-w-full fstln-justify-center', className)}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn('fstln-flex fstln-flex-row fstln-items-center fstln-gap-1', className)}
      {...props}
    />
  )
)
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('fstln-', className)} {...props} />
)
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>

const PaginationLink = ({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn('fstln-gap-1 fstln-pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className="fstln-h-4 fstln-w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn('fstln-gap-1 fstln-pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="fstln-h-4 fstln-w-4" />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn(
      'fstln-flex fstln-h-9 fstln-w-9 fstln-items-center fstln-justify-center',
      className
    )}
    {...props}
  >
    <MoreHorizontal className="fstln-h-4 fstln-w-4" />
    <span className="fstln-sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
}
