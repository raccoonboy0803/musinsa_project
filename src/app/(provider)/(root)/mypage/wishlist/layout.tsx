import Footer from '@/components/Footer';
import Navigationbar from '@/components/Navigationbar';
import React, { PropsWithChildren } from 'react';
import WishlistHeader from './components/WishlistHeader';

function MainlLayout({ children }: PropsWithChildren) {
  return (
    <>
      <WishlistHeader />
      <div className="h-[calc(100vh-106px)]">{children}</div>
      <Navigationbar />
    </>
  );
}

export default MainlLayout;
