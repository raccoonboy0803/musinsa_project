import Navigationbar from '@/components/Navigationbar';
import React, { PropsWithChildren } from 'react';

function CategoryItemLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div>{children}</div>
      <Navigationbar />
    </>
  );
}

export default CategoryItemLayout;
