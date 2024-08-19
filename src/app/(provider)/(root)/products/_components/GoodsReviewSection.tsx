import React from 'react';
import ReviewStars from './ReviewStars';
import TotalReviewPhotos from './TotalReviewPhotos';
import GoodsReviewCard from './GoodsReviewCard';

function GoodsReviewSection() {
  return (
    <div>
      <p className="mt-[24px] mb-[16px] text-[20px] px-[15px]">구매후기</p>
      <ReviewStars />
      <TotalReviewPhotos />
      <div className="flex h-[40px] text-[13px] font-medium rounded-[4px] px-[15px] mt-[30px]">
        <button className="text-[#aaaaaa] bg-[#f5f5f5] w-1/3 ">스타일 6</button>
        <button className="text-[#aaaaaa] bg-[#f5f5f5] w-1/3">상품 사진 7</button>
        <button className="text-[#aaaaaa] bg-[#f5f5f5] w-1/3">일반 12</button>
      </div>
      <div className="flex justify-between py-[12px] px-[15px]">
        <div>
          <input type="checkbox" id="similiarBody" />
          <label htmlFor="similiarBody" className="text-[13px]">
            나와 비슷한 체형
          </label>
        </div>
        <select name="" id="" className="text-[13px]">
          <option value="">최신순</option>
          <option value="">높은 평점 순</option>
          <option value="">낮은 평점 순</option>
        </select>
      </div>
      <div className="border-b mb-[20px] mx-[15px]" />
      <GoodsReviewCard />
    </div>
  );
}

export default GoodsReviewSection;
