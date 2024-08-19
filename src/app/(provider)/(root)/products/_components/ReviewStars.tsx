import Image from 'next/image';
import React from 'react';

function ReviewStars() {
  return (
    <div className="border-b-[10px] border-[#f1f1f1] pb-[20px]">
      <div className="text-[14px] font-bold text-[#aaaaaa] h-[21px] mx-[5px]">
        <button className="pl-[10px] pr-[8px]">평점</button>
        <button className="pl-[10px] pr-[8px]">사이즈</button>
        <button className="pl-[10px] pr-[8px]">밝기</button>
        <button className="pl-[10px] pr-[8px]">색감</button>
        <button className="pl-[10px] pr-[8px]">두께감</button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[25px] mb-[12px] h-[35px] overflow-hidden w-[222px] relative">
          <Image
            src={'/review/review_star.png'}
            alt="후기 평점"
            width={222}
            height={385}
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
              transform: 'translateY(-350px)',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        </div>
        <p className="text-[16px] font-bold">
          <span className="text-[#ff923a]">5.0</span>
          <span className="text-[#cccccc] "> / 5</span>
        </p>
      </div>
    </div>
  );
}

export default ReviewStars;
