import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Brands from '@/pages/Brands';
import Categories from '@/pages/Categories';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import SuperCategories from '@/pages/SuperCategories';
import SuperSubcategories from '@/pages/SuperSubcategories';
import { NavigationSidebar } from '@/widgets/NavigationSidebar';
import { routesConfig } from '@/shared/config/routes.config';
import { DashboardLayout } from '@/shared/ui/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routesConfig.DASHBOARD}
          element={
            <ProtectedRoute
              children={<DashboardLayout sidebarSlot={<NavigationSidebar />} />}
            />
          }
        >
          <Route path={routesConfig.DASHBOARD} element={<Home />} />
          <Route path={routesConfig.CATEGORIES} element={<Categories />} />
          <Route path={routesConfig.BRANDS} element={<Brands />} />
          <Route
            path={routesConfig.SUPER_SUBCATEGORIES}
            element={<SuperSubcategories />}
          />
          <Route
            path={routesConfig.SUPER_CATEGORIES}
            element={<SuperCategories />}
          />
        </Route>
        <Route path={routesConfig.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
