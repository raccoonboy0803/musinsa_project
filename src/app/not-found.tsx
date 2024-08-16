import LinkBackButton from '@/components/LinkBackButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function NotfoundPage() {
  return (
    <div className="pt-[30px]">
      <Image
        src={'/etc/musinsa_notfound.png'}
        alt="notfound title"
        width={100}
        height={17}
        className="mb-[171px] mx-auto"
      />
      <div className="flex flex-col justify-center items-center">
        <Image src={'/etc/mark_notfound.png'} alt="notfound icon" width={60} height={60} />
        <strong className="mt-[30px] mb-[16px] text-[30px] font-semibold text-center">
          페이지를 찾을 수<br />
          없습니다
        </strong>
        <p className="text-[#777777] text-[14px] text-center">
          페이지의 주소가 잘못 입력되었거나,
          <br />
          변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
          <br />
          입력하신 페이지 주소를 다시 한번 확인해 주세요
        </p>
        <Link
          href={'/'}
          className="mt-[40px] mb-[5px] bg-black text-white font-bold text-[14px] w-[130px] h-[50px] flex items-center justify-center"
        >
          무신사 홈
        </Link>
        <LinkBackButton />
      </div>
    </div>
  );
}

export default NotfoundPage;
