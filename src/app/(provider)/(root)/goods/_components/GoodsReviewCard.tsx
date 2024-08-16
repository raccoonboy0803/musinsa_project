import Image from 'next/image';
import React from 'react';

function GoodsReviewCard() {
  return (
    <div className="py-[20px]">
      <div className="flex justify-between px-[15px] items-center">
        <div className="flex items-center gap-[8px]">
          <div className="w-[32px] h-[32px] relative">
            <Image src={'/review/default_profile_image.png'} alt="프로필 기본 이미지" fill />
          </div>
          <div>
            <p className="text-[15px] font-bold">LV.5 켈러그</p>
            <p className="text-[12px] text-[#aaaaaa]">남성 · 175cm · 84kg</p>
          </div>
        </div>
        <p className="text-[12px] text-[#aaaaaa]">18일 전</p>
      </div>
      <div className="flex flex-col pl-[53px] pr-[15px]">
        <div className="flex gap-[10px] py-[12px] ">
          <Image src={'/sample/sweatshirt_sample_1.webp'} alt="리뷰 상품 이미지" width={45} height={54} />
          <div className="text-[#777777] text-[12px] flex flex-col justify-center">
            <p>sample title</p>
            <p>XL 구매</p>
          </div>
        </div>
        <Image src={'/review/five_star_review.svg'} alt="별5개" width={75} height={14} className="pb-[10px]" />

        <div className="pt-[6px] pb-[16px]">
          <ul className="list-none flex h-[30px] ">
            <li className="px-[8px] mr-[4px] mb-[4px] text-[12px] text-[#b3b3b3] bg-[#f9f9f9] flex items-center">
              사이즈<span className="pl-[4px] text-[12px] text-[#333333]">보통이에요</span>
            </li>
            <li className="px-[8px] mr-[4px] mb-[4px] text-[12px] text-[#b3b3b3] bg-[#f9f9f9] flex items-center">
              밝기<span className="pl-[4px] text-[12px] text-[#333333]">보통이에요</span>
            </li>
            <li className="px-[8px] mr-[4px] mb-[4px] text-[12px] text-[#b3b3b3] bg-[#f9f9f9] flex items-center">
              색감<span className="pl-[4px] text-[12px] text-[#333333]">보통이에요</span>
            </li>
            <li className="px-[8px] mr-[4px] mb-[4px] text-[12px] text-[#b3b3b3] bg-[#f9f9f9] flex items-center">
              두께감<span className="pl-[4px] text-[12px] text-[#333333]">보통이에요</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[15px]">
            아웃스탠딩 이번 맨투맨 다 구매했는데 그린이랑 멜란지가 가장 이쁘네요. 다음에도 구매하고 싶네요.
          </p>
          <div className="w-[261px] h-[261px] relative rounded-[4px] overflow-hidden mt-[16px]">
            <Image src={'/sample/total_review_photo_sample.jpg'} alt="유저 리뷰 이미지" fill />
          </div>
          <div className="flex py-[16px] gap-[6px]">
            <button className="flex items-center text-[13px] w-1/2 border border-[#e5e5e5] h-[38px] justify-center">
              <Image src={'/review/empty_thumbup.svg'} alt="도움돼요 아이콘" width={18} height={18} />
              도움돼요 0
            </button>
            <button className="flex items-center text-[13px] w-1/2 border border-[#e5e5e5] h-[38px] justify-center">
              <Image src={'/review/empty_smile.svg'} alt="스타일좋아요 아이콘" width={18} height={18} />
              스타일 좋아요 0
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoodsReviewCard;
