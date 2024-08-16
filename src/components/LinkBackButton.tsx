'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

function LinkBackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="text-[14px] font-bold text-[#777777] w-[130px] h-[50px]">
      이전 페이지
    </button>
  );
}

export default LinkBackButton;
