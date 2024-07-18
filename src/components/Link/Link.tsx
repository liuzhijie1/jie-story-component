import React from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '../icon'

interface LinkProps {
  children?: React.ReactNode
  external?: boolean
  url?: string
  removeUnderline?: boolean
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export const Link: React.FC<LinkProps> = ({
  children = 'Click me',
  external = false,
  url = '',
  removeUnderline = false,
  ...props
}) => {
  return (
    <Button variant="link" asChild onClick={() => alert('Button clicked')} {...props}>
      <span className="fstln-text-sky-500 hover:fstln-text-slate-300 active:fstln-text-destructive hover:fstln-underline">
        <a href={url} className="fstln-flex-row fstln-flex fstln-items-center fstln-mr-1">
          {children}
          {external && <span className="fstln-underline"><Icon type="external" size={14} /></span>}
        </a>
      </span>
    </Button>
  )
}
