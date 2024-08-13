import Image from 'next/image';
import React from 'react';

function NoticeMenu() {
  return (
    <div>
      <div>
        <Image src={'/main/next_beauty.jpg'} alt="nextBeauty" width={64} height={64} />
        <p>& 카리나</p>
      </div>
    </div>
  );
}

export default NoticeMenu;
