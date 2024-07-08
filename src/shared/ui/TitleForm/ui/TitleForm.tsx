import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../Button';
import { TextField } from '../../TextField';

interface TitleDto {
  title: string;
}

interface TitleFormProps {
  buttonText: string;
  value?: string;
  errorMessages?: {
    required?: string;
    notEmpty?: string;
  };
  submitHandler: (data: TitleDto) => void;
}

const TitleForm: FC<TitleFormProps> = ({
  submitHandler,
  errorMessages,
  buttonText,
  value = '',
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TitleDto>({ values: { title: value } });

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex items-center gap-4"
    >
      <TextField
        register={register('title', {
          required: errorMessages?.required,
          validate: (value: string) =>
            value.trim().length > 0 || errorMessages?.notEmpty,
        })}
        error={errors.title?.message}
        placeholder="Название..."
      />
      <Button className="self-start" variant="primary" type="submit">
        {buttonText}
      </Button>
    </form>
  );
};

export default TitleForm;
