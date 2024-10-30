import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'fstln-inline-flex fstln-items-center fstln-justify-center fstln-whitespace-nowrap fstln-rounded-md fstln-text-sm fstln-font-medium fstln-ring-offset-background fstln-transition-colors focus-visible:fstln-outline-none focus-visible:fstln-ring-2 focus-visible:fstln-ring-ring focus-visible:fstln-ring-offset-2 disabled:fstln-pointer-events-none disabled:fstln-opacity-50',
  {
    variants: {
      variant: {
        default: 'fstln-bg-primary fstln-text-primary-foreground hover:fstln-bg-primary/90',
        destructive:
          'fstln-bg-destructive fstln-text-destructive-foreground hover:fstln-bg-destructive/90',
        outline:
          'fstln-border fstln-border-input fstln-bg-background hover:fstln-bg-accent hover:fstln-text-accent-foreground',
        secondary: 'fstln-bg-secondary fstln-text-secondary-foreground hover:fstln-bg-secondary/80',
        ghost: 'hover:fstln-bg-accent hover:fstln-text-accent-foreground',
        link: 'fstln-text-primary fstln-underline-offset-4 hover:fstln-underline'
      },
      size: {
        default: 'fstln-h-10 fstln-px-4 fstln-py-2',
        sm: 'fstln-h-9 fstln-rounded-md fstln-px-3',
        lg: 'fstln-h-11 fstln-rounded-md fstln-px-8',
        icon: 'fstln-h-10 fstln-w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export default buttonVariants
