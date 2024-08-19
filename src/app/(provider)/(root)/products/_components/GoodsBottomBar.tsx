import Image from 'next/image';
import React from 'react';

function GoodsBottomBar() {
  return (
    <div className="h-[73px] py-[11px] px-[12px] border-t border-[#f3f3f3] bg-white flex items-center gap-[12px] fixed bottom-0 w-full max-w-[598px]">
      <div className="flex flex-col items-center size-[50px] justify-center">
        <div className="w-[24px] h-[24px] relative">
          <Image src={'/product/empty_like_big.svg'} alt="빈좋아요 아이콘" fill />
        </div>
        <p className="text-[13px] font-medium">38</p>
      </div>
      <button className="w-full bg-black h-[44px] text-white rounded-[4px] text-[14px] font-medium">구매하기</button>
    </div>
  );
}

export default GoodsBottomBar;
