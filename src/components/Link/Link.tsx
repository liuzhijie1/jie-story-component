import React from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '../icon'
import { clsx } from 'clsx'

export type Target = '_blank' | '_self' | '_parent' | '_top'

export interface LinkProps {
  children?: React.ReactNode
  external?: boolean
  url?: string
  removeUnderline?: boolean
  target?: Target
  size?: 'default' | 'sm' | 'lg' | 'icon'
  onClick?: () => void
  [key: string]: unknown
}

export const Link: React.FC<LinkProps> = React.forwardRef<HTMLElement, LinkProps>(
  (
    {
      children = 'Click me',
      external = false,
      url = '',
      target: targetProp,
      onClick,
      removeUnderline = false,
      ...rest
    },
    ref
  ) => {
    let target
    if (external) {
      target = '_blank'
    } else {
      target = targetProp ?? undefined
    }

    const rel = target === '_blank' ? 'noopener noreferrer' : undefined

    return (
      <Button variant="link" asChild onClick={onClick} {...rest}>
        <span
          ref={ref}
          className={clsx(
            'fstln-text-shopify-Link',
            'hover:fstln-text-shopify-Link-hover',
            'active:fstln-text-shopify-Link-pressed',
            'hover:fstln-decoration-shopify-Link-hover',
            'active:fstln-decoration-shopify-Link-pressed',
            'fstln-font-normal',
            removeUnderline && 'hover:fstln-no-underline'
          )}
        >
          <a
            target={target}
            href={url}
            className="fstln-flex-row fstln-flex fstln-items-center "
            rel={rel}
          >
            {children}
            {external && (
              <span className="fstln-px-1">
                <Icon type="external" size={14} />
              </span>
            )}
          </a>
        </span>
      </Button>
    )
  }
)
