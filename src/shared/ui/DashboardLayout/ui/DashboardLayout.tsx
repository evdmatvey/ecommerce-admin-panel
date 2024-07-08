import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface DashboardLayoutProps {
  sidebarSlot: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ sidebarSlot }) => {
  return (
    <div className="flex items-start gap-x-10">
      {sidebarSlot}
      <div className="grow bg-white p-5 rounded-xl shrink">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
