import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function MyPage() {
  return (
    <div className="border-b">
      <div className="bg-[#f5f5f5] px-[16px]">
        <div className="pb-[16px] pt-[12px]">
          <p className="text-[13px] mb-[4px]">무신사 회원은 최대 4% 적입, 전 상품 무료배송 혜택</p>
          <Link href={'/'} className="text-[#245eff] text-[18px] font-medium underline decoration-[#245eff]">
            로그인/회원가입하기
          </Link>
        </div>
        <div className="flex pb-[16px] gap-[2px]">
          <Link href={'/'} className="p-[12px] w-[188px] h-[64px] bg-white">
            <p className="text-[13px]">적립금</p>
            <p className="mt-[2px] text-[14px] font-semibold">0원</p>
          </Link>
          <Link href={'/'} className="p-[12px] w-[188px] h-[64px] bg-white">
            <p className="text-[13px]">쿠폰</p>
            <p className="mt-[2px] text-[14px] font-semibold">40장</p>
          </Link>
          <Link href={'/'} className="p-[12px] w-[188px] h-[64px] bg-white">
            <p className="text-[13px]">후기 작성</p>
            <p className="mt-[2px] text-[14px] font-semibold">0건</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col px-[16px] justify-center border-b-[10px] border-[#f5f5f5]">
        <Link href={'/'} className="flex justify-between pt-[24px] pb-[12px] h-[56px]">
          <p className="text-[14px] font-medium">주문 내역</p>
          <Image src={'/mypage/right_arrow.svg'} alt="오른쪽 화살표" width={16} height={16} />
        </Link>
        <Link href={'/'} className="flex justify-between pt-[24px] pb-[12px] h-[56px]">
          <p className="text-[14px] font-medium">최근 본 상품</p>
          <Image src={'/mypage/right_arrow.svg'} alt="오른쪽 화살표" width={16} height={16} />
        </Link>
      </div>
      <div className="px-[16px] pt-[12px] pb-[72px]">
        <button className="text-[13px] font-medium text-[#666666] underline">로그아웃</button>
      </div>
    </div>
  );
}

export default MyPage;
