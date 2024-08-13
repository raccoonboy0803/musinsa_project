import Footer from '@/components/Footer';
import Navigationbar from '@/components/Navigationbar';
import React, { PropsWithChildren } from 'react';
import LoginHeader from './components/LoginHeader';

function LoginLayout({ children }: PropsWithChildren) {
  return (
    <>
      <LoginHeader />
      <div>{children}</div>
    </>
  );
}

export default LoginLayout;
