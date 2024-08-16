import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function MyOrderListCard() {
  return (
    <div>
      <div className="flex">
        <Image
          src={'/sample/order_product_sample.jpg'}
          alt="주문목록 상품 이미지"
          width={72}
          height={86}
          className="rounded-[4px]"
        />
        <div className="flex flex-col ml-[12px] w-full gap-[1px] h-[86px] justify-center">
          <p className="text-[13px] font-semibold">컨버스</p>
          <p className="text-[13px]">척테일러 올스타 데인티 뮬 화이트 567946C</p>
          <p className="text-[13px] text-[#666666]">250 / 1개</p>
          <div className="flex justify-between h-[24px]">
            <p className="text-[13px] font-semibold">43,470원</p>
            <Link href={'/'} className="border px-[6px]  text-[13px] flex items-center font-medium">
              스냅 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrderListCard;
