import React, { PropsWithChildren } from 'react';
import MyOrderHeader from '../../../_components/MyOrderHeader';

function MyOrderLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MyOrderHeader />
      <div>{children}</div>
    </>
  );
}

export default MyOrderLayout;
