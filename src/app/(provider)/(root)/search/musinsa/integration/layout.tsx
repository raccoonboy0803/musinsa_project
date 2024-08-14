import Footer from '@/components/Footer';
import Navigationbar from '@/components/Navigationbar';
import React, { PropsWithChildren } from 'react';
import SearchHeader from '../../_components/SearchHeader';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SearchHeader />
      <div>{children}</div>
      <Navigationbar />
    </>
  );
}

export default RootLayout;
