import Link from 'next/link';
import React from 'react';
import MyOrderListCard from './MyOrderListCard';

function MyOrderSection() {
  return (
    <div className="px-[16px] pt-[24px]">
      <div>
        <div className="flex justify-between pb-[16px] items-center">
          <p className="text-[18px] font-semibold">22.10.25</p>
          <Link href={'/'} className="underline text-[#666666] text-[13px]">
            주문 상세
          </Link>
        </div>
        <div className="border-b pb-[24px]">
          <MyOrderListCard />
        </div>
      </div>
    </div>
  );
}

export default MyOrderSection;
