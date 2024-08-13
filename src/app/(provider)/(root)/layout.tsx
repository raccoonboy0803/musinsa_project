import Footer from '@/components/Footer';
import Navigationbar from '@/components/Navigationbar';
import React, { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

export default RootLayout;
