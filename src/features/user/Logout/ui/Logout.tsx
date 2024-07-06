import toast from 'react-hot-toast';
import { selectLogoutUser, useUserStore } from '@/entities/user';
import { Button } from '@/shared/ui/Button';

const Logout = () => {
  const logoutUser = useUserStore(selectLogoutUser);

  const logoutHandler = async () => {
    const isLogoutSuccess = await logoutUser();

    if (isLogoutSuccess) toast.success('Вы вышли из системы!');
  };

  return (
    <Button variant="primary" onClick={logoutHandler}>
      Выйти
    </Button>
  );
};

export default Logout;
