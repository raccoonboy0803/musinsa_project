import React, { PropsWithChildren } from 'react';
import MypageHeader from './_components/MypageHeader';
import Navigationbar from '@/components/Navigationbar';

function MypageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MypageHeader />
      <div>{children}</div>
      <Navigationbar />
    </>
  );
}

export default MypageLayout;
