import clsx from 'clsx';
import { ComponentProps, FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextFiledProps extends ComponentProps<'input'> {
  register?: UseFormRegisterReturn;
  isFullWidth?: boolean;
  error?: string;
}

const TextFiled: FC<TextFiledProps> = ({
  isFullWidth,
  error,
  className,
  register,
  ...props
}) => {
  const textFieldClasses = clsx(
    'h-10 border-px border rounded-lg px-3 py-2 focus:outline-none',
    className,
    {
      'w-full': isFullWidth,
      'border-gray-300': !error,
      'border-red-500': error,
      'focus:border-red-300': !error,
      'focus:border-red-600': error,
    },
  );

  if (register)
    return (
      <div className="flex flex-col gap-2">
        <input className={textFieldClasses} {...props} {...register} />
        <p className="text-red-500">{error}</p>
      </div>
    );

  return <input className={textFieldClasses} {...props} />;
};

export default TextFiled;
