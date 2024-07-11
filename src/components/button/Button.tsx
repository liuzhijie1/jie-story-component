import { ComponentProps } from 'react';
import './button.css';
import clsx from 'clsx';

type BaseButtonProps = ComponentProps<'button'>;

export interface JieFstlnButtonProps extends BaseButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  variant?: 'primary' | 'secondary' | 'destructive';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: JieFstlnButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={clsx(
        'storybook-button',
        `storybook-button--${size}`,
        mode,
        'button'
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
