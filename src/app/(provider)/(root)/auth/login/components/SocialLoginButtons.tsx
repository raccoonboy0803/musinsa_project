'use client';

import React from 'react';
import Image from 'next/image';
// import { createClient } from '@/supabase/supabaseClient';

type OAuthProvider = 'google' | 'kakao';

// const handleSocialLogin = async (provider: OAuthProvider) => {
//   const supabase = createClient();
//   const { error } = await supabase.auth.signInWithOAuth({
//     provider: provider,
//     options: {
//       redirectTo: `${window.location.origin}/auth/callback`
//     }
//   });

//   if (error) {
//     console.error(`Error logging in with ${provider}:`, error.message);
//   }
// };

function SocialLoginButtons() {
  const handleLogin = (provider: OAuthProvider) => async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // await handleSocialLogin(provider);
  };

  return (
    <form className="px-[16px] py-[20px] flex flex-col gap-[16px]">
      <button
        onClick={handleLogin('kakao')}
        className="flex justify-center py-[10px] px-[16px] bg-[#fee500] rounded-[4px] w-full"
      >
        <div className="flex gap-[4px] items-center">
          <Image src="/login/kakao.png" alt="kakaoImg" width={14} height={14} />
          <p className="text-[14px] font-medium">카카오 로그인</p>
        </div>
      </button>
      <button
        onClick={handleLogin('google')}
        className="flex justify-center py-[10px] px-[16px] gap-[4px] rounded-[4px] w-full border"
      >
        <div className="flex gap-[4px] items-center">
          <Image src="/login/google.png" alt="googleImg" width={14} height={14} />
          <p className="text-[14px] font-medium">Google 로그인</p>
        </div>
      </button>
    </form>
  );
}

export default SocialLoginButtons;
