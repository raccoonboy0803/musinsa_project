import Image from 'next/image';
import React from 'react';
import GoodsDescription from '../_components/GoodsDescription';
import Link from 'next/link';
import GoodsReviewSection from '../_components/GoodsReviewSection';
import ReviewStars from '../_components/ReviewStars';
import TotalReviewPhotos from '../_components/TotalReviewPhotos';

function GoodsPage() {
  return (
    <div>
      <div className="h-[50px] bg-[#2B2B2B] px-[10px]">
        <Image src={'/brand/grooveRhyme_brand.png'} alt="브랜드 이미지" width={460} height={50} />
      </div>
      <Image
        src={'/sample/sweatshirt_sample_1.webp'}
        alt="맨투맨 이미지"
        width={500}
        height={600}
        className="mx-auto"
      />
      <div className="px-[15px]">
        <p className="text-[14px] text-[#aaaaaa] mb-[15px]">상의 &gt; 맨투맨/스웨트 (그루브라임)</p>
        <p className="text-[20px] font-extrabold mb-[17px]">
          ORIGINAL 1890 ATHLETIC SWEATSHIRT (DARK GREEN) [LRSFCTM753M]
        </p>
        <p className="text-[14px] font-bold text-[#0078ff] mb-[20px]">후기 2개</p>
        <p className="text-[22px] font-semibold">54,221 ~ 59,000원</p>
      </div>
      <div className="flex justify-between mx-[15px] border-t pt-[6px] mt-[6px] border-black pb-[12px]">
        <p className="text-[14px]">전 상품 무료배송</p>
        <button className="flex text-[14px] font-semibold items-center gap-[2px]">
          회원 최저가 계산기 <Image src={'/product/plus_cal.svg'} alt="플러스 아이콘" width={22} height={22} />
        </button>
      </div>
      <div className="flex w-full max-w-[600px] px-[15px] gap-[10px] my-[15px]">
        <button className="flex border border-[#eeeeee] w-1/2 h-[38px] items-center justify-center gap-[3px]">
          <Image src={'/product/share_icon.svg'} alt="공유하기 아이콘" width={22} height={22} />
          공유하기
        </button>
        <button className="flex border border-[#eeeeee] w-1/2 h-[38px] items-center justify-center gap-[3px]">
          <Image src={'/product/empty_like.svg'} alt="빈좋아요 아이콘" width={22} height={22} />
          좋아요
        </button>
      </div>
      <div className="h-[10px] w-full bg-[#f1f1f1]" />
      <div className="h-[36px] px-[15px] my-[20px] flex gap-[4px]">
        <Link href={'/'} className="px-[8px] h-[36px] text-[#777777] bg-[#f1f1f1] text-[12px] inline-flex items-center">
          #맨투맨
        </Link>
        <Link href={'/'} className="px-[8px] h-[36px] text-[#777777] bg-[#f1f1f1] text-[12px] inline-flex items-center">
          #스웻셔츠
        </Link>
      </div>
      <GoodsDescription />
      <GoodsReviewSection />
    </div>
  );
}

export default GoodsPage;
