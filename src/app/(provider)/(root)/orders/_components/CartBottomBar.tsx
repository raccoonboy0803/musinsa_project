import React from 'react';

function CartBottomBar() {
  return (
    <div className="fixed bottom-0 bg-white w-full h-[98px] px-[16px] py-[12px] max-w-[598px] flex flex-col gap-[12px]">
      <div className="flex items-center gap-[8px]">
        <input type="checkbox" id="quantityCheck" className="size-[16px]" />
        <label htmlFor="quantityCheck" className="text-[#666666] text-[13px]">
          총 1개
        </label>
      </div>
      <button className="h-[44px] bg-black text-white w-full text-[14px] font-medium rounded-[4px]">
        58,000원 구매하기
      </button>
    </div>
  );
}

export default CartBottomBar;
