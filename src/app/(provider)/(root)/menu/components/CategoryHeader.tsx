import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function CategoryHeader() {
  return (
    <div className="flex items-center pt-[10px] pr-[10px] pb-[13px] pl-[15px] gap-[10px]">
      <div className="px-[12px] w-[535px] h-[40px] bg-[#f3f3f3] rounded-[4px] flex gap-[7px]">
        <button className="h-[40px] w-full"></button>
        <button className="h-[40px]">
          <Image src={'/header/search_icon.svg'} alt="검색 아이콘" width={22} height={22} />
        </button>
      </div>
      <Link href={'/'} className="w-[26px] h-[26px] relative flex-shrink-0">
        <Image src={'/header/cart_icon.svg'} alt="장바구니 아이콘" fill />
      </Link>
    </div>
  );
}

export default CategoryHeader;
