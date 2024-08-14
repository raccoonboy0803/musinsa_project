import React from 'react';
import CartProductCard from '../_components/CartProductCard';
import CartTotalPrice from '../_components/CartTotalPrice';
import NoticeSection from '../_components/NoticeSection';
import CartBottomBar from '../_components/CartBottomBar';

function Cartpage() {
  return (
    <div className="pb-[160px]">
      <CartProductCard />
      <div className="border-b mx-[16px]" />
      <CartTotalPrice />
      <div className="border-b mx-[16px]" />
      <NoticeSection />
      <CartBottomBar />
    </div>
  );
}

export default Cartpage;
