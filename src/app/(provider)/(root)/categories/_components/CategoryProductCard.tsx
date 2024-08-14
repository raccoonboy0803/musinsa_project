import Image from 'next/image';
import React from 'react';

function CategoryProductCard() {
  return (
    <div>
      <Image src={'/sample/sweatshirt_sample_1.webp'} alt="카테고리 리스트 상품 이미지" width={200} height={240} />
      <div className="pt-[18px] px-[10px] h-[146px]">
        <p className="text-[11px]">그루브라임</p>
        <p className="text-[12px] font-bold">ORIGINAL 1890 ATHLETIC SWEATSHIRT (DARK GREEN) [LRSFCTM753M]</p>
        <p className="text-[12px] font-semibold my-[4px]">59,000원</p>
        <div className="flex gap-[2px]">
          <Image src={'/product/product_like_icon.svg'} alt="좋아요 아이콘" width={14} height={14} />
          <p className="text-[#ff0000] text-[10px]">38</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductCard;
