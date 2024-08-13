import Image from 'next/image';
import React from 'react';
import instagramIcon from '/public/footer/instagram.svg';
import youtubeIcon from '/public/footer/youtube.svg';
import twitterIcon from '/public/footer/twitter.svg';

function Footer() {
  return (
    <div className="bg-[#f9f9f9] pt-[26px] pb-[120px] px-[16px]">
      <p>사업자 정보</p>
      <p>법적 고지사항</p>
      <p>파트너 지원</p>
      <p>고객 지원</p>
      <p>© 2012 MUSINSA ALL RIGHTS RESERVED</p>
      <p>
        일부 상품의 경우 주식회사 무신사는 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한
        책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
      </p>
      <div className="flex gap-[16px]">
        <Image src={instagramIcon} alt="인스타그램 바로가기" width={30} height={30} />
        <Image src={youtubeIcon} alt="유튜브 바로가기" width={30} height={30} />
        <Image src={twitterIcon} alt="트위터 바로가기" width={30} height={30} />
      </div>
    </div>
  );
}

export default Footer;
