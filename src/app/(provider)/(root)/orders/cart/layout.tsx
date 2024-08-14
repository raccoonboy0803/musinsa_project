import React, { PropsWithChildren } from 'react';
import CartHeader from '../_components/CartHeader';

function CartlLayout({ children }: PropsWithChildren) {
  return (
    <>
      <CartHeader />
      <div>{children}</div>
    </>
  );
}

export default CartlLayout;
