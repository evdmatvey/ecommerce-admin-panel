import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {
  AuthDto,
  authService,
  removeAccessToken,
  selectSetIsAuthenticated,
  selectSetUser,
  useUserStore,
} from '@/entities/user';
import { getErrorMessage } from '@/shared/libs/getErrorMessage';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthDto>();

  const setUser = useUserStore(selectSetUser);
  const setIsAuthenticated = useUserStore(selectSetIsAuthenticated);
  const navigate = useNavigate();

  const loginFormSubmitHandler = (data: AuthDto) => {
    const loginResponse = authService.login(data);

    toast.promise(loginResponse, {
      loading: 'Вход...',
      success: `Вы успешно вошли в систему!`,
      error: (error) => {
        const errorMessage = getErrorMessage(error);
        return `Ошибка: ${errorMessage}`;
      },
    });

    loginResponse
      .then((user) => {
        setUser(user);
        setIsAuthenticated(true);
        reset();
        navigate('/');
      })
      .catch(() => {
        removeAccessToken();
      });
  };

  return { register, handleSubmit, errors, loginFormSubmitHandler };
};
