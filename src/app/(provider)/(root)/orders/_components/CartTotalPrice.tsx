import React from 'react';

function CartTotalPrice() {
  return (
    <div className="px-[16px] pt-[24px] pb-[12px]">
      <p className="text-[18px] font-medium">구매 금액</p>
      <div className="mt-[12px]">
        <div className="flex justify-between text-[13px] py-[4px]">
          <p>상품 금액</p>
          <p>184,000원</p>
        </div>
        <div className="flex justify-between text-[13px] py-[4px]">
          <p>할인 금액</p>
          <p className="text-[#245eff]">-59,360원</p>
        </div>
        <div className="flex justify-between text-[13px] py-[4px]">
          <p>배송비</p>
          <p className="text-[#245eff]">배송비 무료</p>
        </div>
      </div>
      <div className="mt-[12px]">
        <div className="flex justify-between text-[14px] font-semibold">
          <p>총 구매 금액</p>
          <p>124,640원</p>
        </div>
        <div className="flex justify-between text-[13px] text-[#666666] py-[4px]">
          <p>적립혜택 예상</p>
          <p>최대 9,646원</p>
        </div>
      </div>
    </div>
  );
}

export default CartTotalPrice;
