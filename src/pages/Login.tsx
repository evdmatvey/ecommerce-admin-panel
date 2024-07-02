import { Navigate } from 'react-router-dom';
import { LoginForm } from '@/features/LoginFrom';
import { selectIsAuthenticated, useUserStore } from '@/entities/user';

const Login = () => {
  const isAuthenticated = useUserStore(selectIsAuthenticated);

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="flex items-center justify-center main ">
      <LoginForm />
    </div>
  );
};

export default Login;
