import Image from 'next/image';
import React from 'react';

function GoodsDescription() {
  return (
    <div>
      <div className="flex h-[50px] w-full text-[14px] text-[#6e6e6e] border-b border-[#cccccc]">
        <button className="w-1/5">정보</button>
        <button className="w-1/5">사이즈</button>
        <button className="w-1/5">추천</button>
        <button className="w-1/5">후기</button>
        <button className="w-1/5">문의</button>
      </div>
      <div className="px-[15px] pt-[20px] pb-[10px]">
        <video
          width="100%"
          playsInline
          muted
          loop
          height="auto"
          controls
          className="video-autoplay fr-draggable"
          autoPlay
        >
          <source src="https://k9638927.hgodo.com/GROOVE/2023FW/YUQI.mp4" />
        </video>
        {/* <div className="relative w-[600px] h-[600px]"> */}

        <Image
          src={'/sample/product_detail_sample_1.jpg'}
          alt="상품디테일이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src={'/sample/product_detail_sample_2.jpg'}
          alt="상품디테일이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src={'/sample/product_detail_sample_3.jpg'}
          alt="상품디테일이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src={'/sample/product_detail_sample_4.jpg'}
          alt="상품디테일이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src={'/sample/product_detail_sample_5.jpg'}
          alt="상품디테일이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src={'/sample/product_detail_sample_6.jpg'}
          alt="상품디테일이미지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
}

export default GoodsDescription;
