import { Logout } from '@/features/user/Logout';
import { selectIsAuthenticated, useUserStore } from '@/entities/user';
import Logo from '@/shared/assets/logo.svg';

const Header = () => {
  const isAuthenticated = useUserStore(selectIsAuthenticated);

  return (
    <header className="bg-white h-16 flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="cartzilla logo" />
          {isAuthenticated && <Logout />}
        </div>
      </div>
    </header>
  );
};

export default Header;
