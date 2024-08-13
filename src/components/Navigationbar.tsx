import Image from 'next/image';
import React from 'react';
import categoryIcon from '/public/navigationBar/category_icon.svg';
import Link from 'next/link';

function Navigationbar() {
  return (
    <div className="flex h-[56px] px-[16px] border-t border-opacity-10 fixed bottom-0 left-0 right-0 max-w-[600px] mx-auto bg-white border-l border-r">
      <Link href={'/'} className="flex flex-col items-center text-[#666666] text-[11px] font-semibold w-[20%]">
        <Image
          src={'/navigationBar/category_icon.svg'}
          alt="카테고리 아이콘"
          width={29}
          height={28}
          className="mt-[3px] mb-[2px]"
        />
        카테고리
      </Link>
      <Link href={'/'} className="flex flex-col items-center text-[#666666] text-[11px] font-semibold w-[20%]">
        <Image
          src={'/navigationBar/snap_icon.svg'}
          alt="스냅 아이콘"
          width={29}
          height={28}
          className="mt-[3px] mb-[2px]"
        />
        스냅
      </Link>
      <Link href={'/'} className="flex flex-col items-center text-[#666666] text-[11px] font-semibold w-[20%]">
        <Image
          src={'/navigationBar/home_icon.svg'}
          alt="홈 아이콘"
          width={29}
          height={28}
          className="mt-[3px] mb-[2px]"
        />
        무신사 홈
      </Link>
      <Link href={'/'} className="flex flex-col items-center text-[#666666] text-[11px] font-semibold w-[20%]">
        <Image
          src={'/navigationBar/like_icon.svg'}
          alt="좋아요 아이콘"
          width={29}
          height={28}
          className="mt-[3px] mb-[2px]"
        />
        좋아요
      </Link>
      <Link href={'/'} className="flex flex-col items-center text-[#666666] text-[11px] font-semibold w-[20%]">
        <Image
          src={'/navigationBar/mypage_icon.svg'}
          alt="마이페이지 아이콘"
          width={29}
          height={28}
          className="mt-[3px] mb-[2px]"
        />
        마이
      </Link>
    </div>
  );
}

export default Navigationbar;
