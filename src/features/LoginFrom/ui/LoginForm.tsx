import { Button } from '@/shared/ui/Button';
import { TextField } from '@/shared/ui/TextField';
import { useLoginForm } from '../model/useLoginForm';

const LoginForm = () => {
  const { errors, handleSubmit, loginFormSubmitHandler, register } =
    useLoginForm();

  return (
    <form
      className="bg-white w-[400px] p-5 rounded-xl flex flex-col gap-4"
      onSubmit={handleSubmit(loginFormSubmitHandler)}
    >
      <h1 className="text-xl text-center">Авторизация</h1>
      <TextField
        register={register('email', { required: 'Укажите email!' })}
        type="email"
        placeholder="Введите email..."
        error={errors.email?.message}
        isFullWidth
        required
      />
      <TextField
        register={register('password', {
          required: 'Укажите пароль!',
          minLength: {
            value: 8,
            message: 'Минимальная длина пароля 8 символов!',
          },
        })}
        type="password"
        placeholder="Введите пароль..."
        error={errors.password?.message}
        isFullWidth
        required
      />
      <Button className="self-center" variant="primary" type="submit">
        Отправить
      </Button>
    </form>
  );
};

export default LoginForm;
