import Image from 'next/image';
import React from 'react';

function CartProductCard() {
  return (
    <div className="flex flex-col max-w-[600px] w-full px-[16px] pb-[12px] pt-[24px]">
      <div className="flex gap-[8px]">
        <input type="checkbox" id="brandCheck" />
        <label htmlFor="brandCheck">워베리벨류</label>
      </div>
      <div className="flex items-start gap-[8px] py-[12px]">
        <input type="checkbox" />
        <div className="w-full">
          <div className="flex items-center gap-[12px]">
            <div className="flex items-start">
              <Image src={'/sample/sample_cart.jpg'} alt="장바구니 상품이미지" width={72} height={86} />
            </div>
            <div>
              <p className="text-[13px]">와이드 코튼 카고 팬츠_카키</p>
              <p className="text-[13px]">L / 2개</p>
              <p className="line-through text-[13px] text-[#666666]">116,000원</p>
              <p className="text-[13px] font-semibold">58,000원</p>
            </div>
          </div>
          <div className="flex mt-[12px] gap-[4px]">
            <button className="border border-[#e0e0e0] w-1/2 h-[34px] rounded-[4px] text-[13px] font-medium">
              옵션변경
            </button>
            <button className="border border-[#e0e0e0] w-1/2 h-[34px] rounded-[4px] text-[13px] font-medium">
              쿠폰사용
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
