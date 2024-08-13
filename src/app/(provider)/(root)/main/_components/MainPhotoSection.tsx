'use client';

import Image from 'next/image';
import React from 'react';

function MainPhotoSection() {
  return (
    <div>
      <Image src={'/main/karina.jpg'} alt="karina_main_img" width={600} height={600} />
    </div>
  );
}

export default MainPhotoSection;
