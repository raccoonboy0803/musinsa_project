import Image from 'next/image';
import React from 'react';

function SearchHeader() {
  return (
    <div>
      <div className="flex gap-[10px] py-[10px] pl-[10px] pr-[15px]">
        <button className="w-[30px] flex items-center justify-center">
          <Image src={'/search/left_arrow_search.svg'} alt="뒤로가기 아이콘" width={12} height={22} />
        </button>
        <div className="h-[40px] bg-[#f3f3f3] w-full flex rounded-[4px]">
          <button className="w-full h-[40px]"></button>
          <button className="w-[40px] h-[40px]">
            <Image src={'/search/reading_glasses.svg'} alt="돋보기 아이콘" width={22} height={22} />
          </button>
        </div>
      </div>
      <div className="h-[45px] px-[10px] pt-[10px] border-b">
        <button className="text-[15px] font-bold px-[5px]">통합</button>
      </div>
    </div>
  );
}

export default SearchHeader;
