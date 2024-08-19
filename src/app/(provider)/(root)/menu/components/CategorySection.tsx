'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function CategorySection() {
  return (
    <div className="flex">
      <div className="w-[117px]">
        <ul className="text-[14px] text-[#b3b3b3] pl-[15px] flex flex-col justify-center">
          <li className="h-[36px]">상의</li>
          <li className="h-[36px]">바지</li>
          <li className="h-[36px]">신발</li>
          <li className="h-[36px]">가방</li>
          <li className="h-[36px]">뷰티</li>
        </ul>
      </div>
      <div className="pt-[16px] pb-[115px] px-[15px] w-full bg-[#f3f3f3]">
        <div>
          <Link href={'/'}>상의</Link>
          <div className="grid grid-cols-3 ">
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/all_icon.png'}
                alt="전체 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">상의 전체</span>
            </Link>
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/sweatshirt_category.png'}
                alt="맨투맨 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">맨투맨/스웨트셔츠</span>
            </Link>
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/tshirt_category.png'}
                alt="반소매 티셔츠 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">반소매 티셔츠</span>
            </Link>
          </div>
        </div>
        <div>
          <Link href={'/'}>바지</Link>
          <div className="grid grid-cols-3 ">
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/all_icon.png'}
                alt="전체 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">하의 전체</span>
            </Link>
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/denimpants_category.png'}
                alt="데님팬츠 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">데님 팬츠</span>
            </Link>
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/shortpants_category.png'}
                alt="숏 팬츠 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">숏 팬츠</span>
            </Link>
          </div>
        </div>
        <div>
          <Link href={'/'}>신발</Link>
          <div className="grid grid-cols-3 ">
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/all_icon.png'}
                alt="전체 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">신발 전체</span>
            </Link>
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/sneakers_category.png'}
                alt="스니커즈 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">스니커즈</span>
            </Link>
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/formalshoes_category.png'}
                alt="구두 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">구두</span>
            </Link>
          </div>
        </div>
        <div>
          <Link href={'/'}>가방</Link>
          <div className="grid grid-cols-3 ">
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/all_icon.png'}
                alt="전체 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">가방 전체</span>
            </Link>
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/backpack_category.png'}
                alt="백팩 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">백팩</span>
            </Link>
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/crossbag_category.png'}
                alt="크로스백 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">메신저/크로스 백</span>
            </Link>
          </div>
        </div>
        <div>
          <Link href={'/'}>뷰티</Link>
          <div className="grid grid-cols-3 ">
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/all_icon.png'}
                alt="전체 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">뷰티 전체</span>
            </Link>
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/skincare_category.png'}
                alt="스킨케어 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">스킨케어</span>
            </Link>
            <Link href={'/'} className="flex flex-col items-center justify-center gap-[6px]">
              <Image
                src={'/category/fragrance_category.png'}
                alt="향수 아이콘"
                width={118}
                height={118}
                className="rounded-[20px] border"
              />
              <span className="text-[13px]">프레그런스</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
