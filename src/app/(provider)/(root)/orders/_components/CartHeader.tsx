import Image from 'next/image';
import React from 'react';

function CartHeader() {
  return (
    <div className="flex items-center px-[16px] py-[12px] justify-between bg-[#f5f5f5]">
      <div className="flex items-center">
        <Image src={'/login/left_arrow.svg'} alt="뒤로가기 아이콘" width={28} height={28} />
        <p className="text-[16px] font-medium">장바구니</p>
      </div>
      <Image src={'/navigationBar/home_icon.svg'} alt="홈 아이콘" width={28} height={28} />
    </div>
  );
}

export default CartHeader;
