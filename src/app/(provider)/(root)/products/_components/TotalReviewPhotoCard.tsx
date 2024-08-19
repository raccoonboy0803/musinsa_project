import Image from 'next/image';
import React from 'react';

function TotalReviewPhotoCard({ src }: { src: string }) {
  return (
    <div className="w-[138px] h-[135px] relative">
      <Image src={src} alt="전체 후기 사진" fill />
    </div>
  );
}

export default TotalReviewPhotoCard;
