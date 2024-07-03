import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  isIconOnly?: boolean;
}

// TODO: Add secondary styles

const Button: FC<ButtonProps> = ({
  variant,
  isIconOnly,
  children,
  className,
  ...props
}) => {
  const buttonClasses = clsx(
    'text-white transition-colors duration-300',
    className,
    {
      'bg-red-500 hover:bg-red-600': variant === 'primary',
      'px-4 py-2 rounded-lg': !isIconOnly,
      'stroke-gray-500 hover:stroke-gray-700 duration-100': isIconOnly,
    },
  );
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
