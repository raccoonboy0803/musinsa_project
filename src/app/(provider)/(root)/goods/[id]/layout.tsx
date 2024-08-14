import React, { PropsWithChildren } from 'react';
import GoodsHeader from '../_components/GoodsHeader';
import GoodsBottomBar from '../_components/GoodsBottomBar';

function CartlLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <GoodsHeader />
      <div>{children}</div>
      <GoodsBottomBar />
    </div>
  );
}

export default CartlLayout;
