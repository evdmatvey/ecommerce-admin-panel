import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Brands from '@/pages/Brands';
import Categories from '@/pages/Categories';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import SuperSubcategories from '@/pages/SuperSubcategories';
import { DashboardLayout } from '@/shared/ui/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute children={<DashboardLayout />} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="brands" element={<Brands />} />
          <Route path="super-subcategories" element={<SuperSubcategories />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
