import Image from 'next/image';
import React from 'react';

function WishProductsList() {
  return (
    <div>
      <div className="flex justify-between px-[15px]">
        <p className="text-[14px] font-normal">전체 4개</p>
        <button className="p-[5px] text-[14px] font-bold">공유</button>
      </div>
      <div className="px-[16px]">
        <form action="">
          <input type="radio" id="saleInput" />
          <label htmlFor="saleInput">세일</label>
          <input type="radio" id="soldOutIniput" />
          <label htmlFor="soldOutIniput">품절제외</label>
        </form>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <div className="h-[266px] bg-[#F9F9F9] flex items-center">
            <Image src={'/sample/knit_sample.webp'} alt="sample Img" width={200} height={246} />
          </div>
          <div className="px-[10px] pt-[13px]">
            <p className="text-[11px]">매너그램</p>
            <h2 className="text-[12px] font-bold">퓨어코튼100 카라니트_그린라벨 - 7 color</h2>
            <strong className="text-[12px] font-medium">69,000원</strong>
          </div>
        </div>
        <div>
          <div className="h-[266px] bg-[#F9F9F9] flex items-center">
            <Image src={'/sample/knit_sample.webp'} alt="sample Img" width={200} height={246} />
          </div>
          <div className="px-[10px] pt-[13px]">
            <p className="text-[11px]">매너그램</p>
            <h2 className="text-[12px] font-bold">퓨어코튼100 카라니트_그린라벨 - 7 color</h2>
            <strong className="text-[12px] font-medium">69,000원</strong>
          </div>
        </div>
        <div>
          <div className="h-[266px] bg-[#F9F9F9] flex items-center">
            <Image src={'/sample/knit_sample.webp'} alt="sample Img" width={200} height={246} />
          </div>
          <div className="px-[10px] pt-[13px]">
            <p className="text-[11px]">매너그램</p>
            <h2 className="text-[12px] font-bold">퓨어코튼100 카라니트_그린라벨 - 7 color</h2>
            <strong className="text-[12px] font-medium">69,000원</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishProductsList;
