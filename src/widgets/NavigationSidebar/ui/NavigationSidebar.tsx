import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { routesConfig } from '@/shared/config/routes.config';

const NavigationSidebar = () => {
  const getLinkClasses = (isActive: boolean) => {
    const classes = clsx('p-3 block rounded-lg transition-colors', {
      'bg-red-100 hover:bg-red-100': isActive,
      'bg-white hover:bg-red-50': !isActive,
    });

    return classes;
  };

  return (
    <aside className="w-[300px] bg-white p-5 rounded-xl shadow-sm grow-0 shrink-0 sticky top-10">
      <nav>
        <ul className="flex flex-col gap-3 max-h-[530px] overflow-y-auto pr-2">
          <li>
            <NavLink
              className={({ isActive }) => getLinkClasses(isActive)}
              to={routesConfig.DASHBOARD}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => getLinkClasses(isActive)}
              to={routesConfig.CATEGORIES}
            >
              Категории
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => getLinkClasses(isActive)}
              to={routesConfig.BRANDS}
            >
              Бренды
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => getLinkClasses(isActive)}
              to={routesConfig.SUPER_SUBCATEGORIES}
            >
              Супер подкатегории
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => getLinkClasses(isActive)}
              to={routesConfig.SUPER_CATEGORIES}
            >
              Супер категории
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavigationSidebar;
