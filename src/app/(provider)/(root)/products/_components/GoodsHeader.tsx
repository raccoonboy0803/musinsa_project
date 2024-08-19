import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function GoodsHeader() {
  return (
    <div className="flex justify-between px-[10px] h-[50px] items-center">
      <Link href={'/'} className="size-[30px]">
        <Image src={'/login/left_arrow.svg'} alt="뒤로가기 아이콘" width={26} height={26} />
      </Link>
      <div className="flex items-center gap-[4px]">
        <Link href={'/'} className="size-[30px]">
          <Image src={'/navigationBar/home_icon.svg'} alt="홈 아이콘" width={26} height={26} />
        </Link>
        <Link href={'/'} className="size-[30px]">
          <Image src={'/header/search_icon.svg'} alt="검색 아이콘" width={26} height={26} />
        </Link>
        <Link href={'/'} className="size-[30px]">
          <Image src={'/navigationBar/cart_icon.svg'} alt="장바구니 아이콘" width={26} height={26} />
        </Link>
      </div>
    </div>
  );
}

export default GoodsHeader;
