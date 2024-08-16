import Image from 'next/image';
import React from 'react';

function MyOrderHeader() {
  return (
    <div className="px-[16px] bg-[#f5f5f5]">
      <div className="flex justify-between items-center py-[12px]">
        <div className="flex items-center h-[28px]">
          <Image src={'/order/back_icon_order.svg'} alt="뒤로가기 아이콘" width={28} height={28} />
          <p className="h-[28px] flex items-center text-[16px] font-medium">주문 내역</p>
        </div>
        <Image src={'/order/home_icon_order.svg'} alt="홈 아이콘" width={28} height={28} />
      </div>
      <div className="pt-[8px] py-[16px] relative">
        <input
          type="text"
          placeholder="상품명/브랜드명으로 검색하세요."
          className="w-full py-[6px] pl-[8px] pr-[44px] rounded-[4px] "
        />
        <Image
          src={'/order/glasses_icon.svg'}
          alt="돋보기 아이콘"
          width={20}
          height={20}
          className="absolute top-[16px] right-[6px]"
        />
      </div>
    </div>
  );
}

export default MyOrderHeader;
