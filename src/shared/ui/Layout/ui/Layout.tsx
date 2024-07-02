import { FC, ReactNode } from 'react';

interface LayoutProps {
  headerSlot: ReactNode;
  children: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = ({ headerSlot, children }) => {
  return (
    <>
      {headerSlot}
      <div className="container main">{children}</div>
    </>
  );
};

export default Layout;
