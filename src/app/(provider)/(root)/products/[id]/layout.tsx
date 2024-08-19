import React, { PropsWithChildren } from 'react';
import GoodsHeader from '../_components/GoodsHeader';
import GoodsBottomBar from '../_components/GoodsBottomBar';
import Footer from '@/components/Footer';

function CartlLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <GoodsHeader />
      <div>{children}</div>
      <Footer />
      <GoodsBottomBar />
    </div>
  );
}

export default CartlLayout;
