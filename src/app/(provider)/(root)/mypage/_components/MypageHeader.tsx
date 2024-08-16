import Image from 'next/image';
import React from 'react';

function MypageHeader() {
  return (
    <div className="px-[16px] bg-[#f5f5f5]">
      <div className="flex justify-between py-[12px]">
        <div className="flex items-center">
          <Image src={'/mypage/left_arrow_icon.svg'} alt="뒤로가기 아이콘" width={28} height={28} />
          <p className="text-[16px] font-semibold">마이</p>
        </div>
        <div className="flex gap-[6px]">
          <Image src={'/mypage/setting_icon.svg'} alt="설정 아이콘" width={28} height={28} />
          <Image src={'/mypage/cart_icon_mypage.svg'} alt="장바구니 아이콘" width={28} height={28} />
        </div>
      </div>
    </div>
  );
}

export default MypageHeader;
