import clsx from 'clsx';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const getLinkClasses = (isActive: boolean) => {
    const classes = clsx('p-3 block rounded-lg transition-colors', {
      'bg-red-100 hover:bg-red-100': isActive,
      'bg-white hover:bg-red-50': !isActive,
    });

    return classes;
  };

  return (
    <div className="flex items-start gap-x-10">
      <aside className="w-[300px] bg-white p-5 rounded-xl shadow-sm grow-0 shrink-0 sticky top-10">
        <nav>
          <ul className="flex flex-col gap-3 max-h-[530px] overflow-y-auto pr-2">
            <li>
              <NavLink
                className={({ isActive }) => getLinkClasses(isActive)}
                to="/"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => getLinkClasses(isActive)}
                to="/categories"
              >
                Категории
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => getLinkClasses(isActive)}
                to="/brands"
              >
                Бренды
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="grow bg-white p-5 rounded-xl shrink">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
