import Navigationbar from '@/components/Navigationbar';
import React, { PropsWithChildren } from 'react';
import CategoryHeader from './components/CategoryHeader';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <CategoryHeader />
      <div>{children}</div>
    </>
  );
}

export default RootLayout;
