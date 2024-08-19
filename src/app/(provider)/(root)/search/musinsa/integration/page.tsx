import React from 'react';
import CategoryProductCard from '../../../category/_components/CategoryProductCard';

function SearchResultPage() {
  return (
    <div>
      <div className="flex justify-between items-center pl-[15px] pr-[7px] h-[50px]">
        <p className="text-[14px]">
          <span className="font-bold">42,920</span>개의 검색결과
        </p>
        <select name="" id="" className="text-[14px]">
          <option value="">무신사 추천순</option>
        </select>
      </div>
      <div className="grid grid-cols-3">
        <CategoryProductCard />
        <CategoryProductCard />
        <CategoryProductCard />
        <CategoryProductCard />
        <CategoryProductCard />
      </div>
    </div>
  );
}

export default SearchResultPage;
