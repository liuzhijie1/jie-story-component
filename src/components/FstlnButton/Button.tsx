import React from 'react'
import { ShadcnButton, ShadcnButtonProps } from '../ui/button'

export interface ButtonProps extends ShadcnButtonProps {
  loading?: boolean
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, disabled, className, ...props }, ref) => {
    const isDisabled = loading || disabled
    return (
      <ShadcnButton
        ref={ref} // 转发 ref
        disabled={isDisabled} // 根据 loading 和 disabled 状态设置 disabled
        className={className} // 允许传递 className
        {...props} // 将其他 props 传递给 ShadcnButton
      >
        {loading ? <span className="loader">Loading...</span> : props.children}
      </ShadcnButton>
    )
  }
)

Button.displayName = 'Button'

export { Button }
