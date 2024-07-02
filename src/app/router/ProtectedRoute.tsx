import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated, useUserStore } from '@/entities/user';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useUserStore(selectIsAuthenticated);

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
