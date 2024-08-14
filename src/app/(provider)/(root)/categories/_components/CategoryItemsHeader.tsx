import Image from 'next/image';
import React from 'react';

function CategoryItemsHeader() {
  return (
    <div className="px-[10px] border-b">
      <div className="flex items-center justify-between h-[50px]">
        <Image src={'/login/left_arrow.svg'} alt="뒤로가기 아이콘" width={26} height={26} />
        <p className="text-[16px] font-medium">상의</p>
        <Image src={'/header/cart_icon.svg'} alt="장바구니 아이콘" width={26} height={26} />
      </div>
      <div className="flex gap-[24px] h-[43px] items-center text-[15px] font-medium">
        <p>전체</p>
        <p>맨투맨/스웨트</p>
        <p>반소매 티셔츠</p>
      </div>
    </div>
  );
}

export default CategoryItemsHeader;
