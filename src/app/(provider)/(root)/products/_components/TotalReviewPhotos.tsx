// import React from 'react';
// import TotalReviewPhotoCard from './TotalReviewPhotoCard';

// const images = [
//   '/sample/total_review_photo_sample.jpg',
//   '/sample/total_review_photo_sample.jpg',
//   '/sample/total_review_photo_sample.jpg',
//   '/sample/total_review_photo_sample.jpg',
//   '/sample/total_review_photo_sample.jpg',
//   '/sample/total_review_photo_sample.jpg'
// ];

// function TotalReviewPhotos() {
//   const itemsPerRow = 4;
//   const maxItems = 8;
//   const totalItems = images.length;

//   const displayItems = totalItems > maxItems ? images.slice(0, maxItems) : images;
//   const showViewAllButton = totalItems > maxItems;
//   return (
//     <div className="border-b-[10px] border-[#f1f1f1] py-[30px]">
//       <div className="px-[15px]">
//         <p className="pb-[15px] text-[15px] font-semibold">
//           전체 후기 사진 <span>{totalItems}</span>
//         </p>
//         <div className="grid grid-cols-4 gap-[10px]">
//           {displayItems.map((src, index) => (
//             <TotalReviewPhotoCard key={index} src={src} />
//           ))}
//           {showViewAllButton && (
//             <div className="col-span-4 flex justify-center items-center">
//               <button className="px-[16px] py-[8px] bg-blue-500 text-white rounded-[4px]">전체보기</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TotalReviewPhotos;

import React from 'react';
import TotalReviewPhotoCard from './TotalReviewPhotoCard';
import Image from 'next/image';

const images = [
  '/sample/total_review_photo_sample.jpg',
  '/sample/total_review_photo_sample.jpg',
  '/sample/total_review_photo_sample.jpg',
  '/sample/total_review_photo_sample.jpg',
  '/sample/total_review_photo_sample.jpg',
  '/sample/total_review_photo_sample.jpg'
];

function TotalReviewPhotos() {
  const itemsPerRow = 4;
  const maxItems = 8;
  const totalItems = images.length;

  const displayItems = totalItems > maxItems ? images.slice(0, maxItems - 1) : images;
  const showViewAllButton = totalItems > maxItems || totalItems > itemsPerRow;

  return (
    <div className="border-b-[10px] border-[#f1f1f1] py-[30px]">
      <div className="px-[15px]">
        <p className="pb-[15px] text-[15px] font-semibold">
          전체 후기 사진 <span>{totalItems}</span>
        </p>
        <div className="grid grid-cols-4">
          {displayItems.map((src, index) => (
            <TotalReviewPhotoCard key={index} src={src} />
          ))}
          {showViewAllButton && (
            <div className="relative col-span-1">
              <button className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="w-[32px] h-[32px] border rounded-full flex items-center justify-center">
                  <Image src={'/review/show_total_image.svg'} alt="전체보기 아이콘" width={18} height={19} />
                </span>
                <p className="text-[12px] pt-[8px]">전체보기</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TotalReviewPhotos;
