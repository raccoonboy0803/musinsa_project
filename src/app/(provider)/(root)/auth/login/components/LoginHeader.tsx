import Image from 'next/image';
import React from 'react';

function LoginHeader() {
  return (
    <div className="flex items-center px-[16px] py-[12px] bg-[#f5f5f5]">
      <Image src={'/login/left_arrow.svg'} alt="뒤로가기 아이콘" width={28} height={28} />
      <p className="text-[16px] font-medium">로그인/회원가입</p>
    </div>
  );
}

export default LoginHeader;
