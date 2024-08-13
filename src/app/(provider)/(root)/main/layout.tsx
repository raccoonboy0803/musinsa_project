import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { PropsWithChildren } from 'react';

function MainlLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default MainlLayout;
