import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className="flex px-[10px] h-[50px]">
      <Image src={'/header/main_logo.svg'} alt="main_logo" width={95} height={16} className="mx-auto" />
      <div className="flex gap-[8px]">
        <Image src={'/header/search_icon.svg'} alt="search_icon" width={26} height={26} />
        <Image src={'/header/cart_icon.svg'} alt="cart_icon" width={26} height={26} />
      </div>
    </div>
  );
}

export default Header;
