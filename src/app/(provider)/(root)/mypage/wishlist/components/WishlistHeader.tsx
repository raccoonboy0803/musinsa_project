import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function WishlistHeader() {
  return (
    <div className="flex items-center h-[50px] px-[16px]">
      <p className="w-full text-center">좋아요</p>
      <Link href={'/'}>
        <Image src={'/header/cart_icon.svg'} alt="장바구니 아이콘" width={26} height={26} className="flex-shrink-0" />
      </Link>
    </div>
  );
}

export default WishlistHeader;
