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
    <div className="fstln-flex-row fstln-flex fstln-items-center">
      <Button
        variant="link"
        className="fstln-text-sky-500 hover:fstln-text-slate-300 active:fstln-text-destructive fstln-px-1"
        asChild
        onClick={() => alert('Button clicked')}
        {...props}
      >
        <a href="https://www.baidu.com">{children}</a>
      </Button>
      {external && <Icon type="external" className="fstln-text-sky-500" size={14} />}
    </div>
  )
}
