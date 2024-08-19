import React from 'react';
import CategoryItemsHeader from '../_components/CategoryItemsHeader';
import CategoryProductCard from '../_components/CategoryProductCard';

function page() {
  return (
    <div className="pb-[120px]">
      <CategoryItemsHeader />
      <div className="grid grid-cols-3">
        <CategoryProductCard />
        <CategoryProductCard />
        <CategoryProductCard />
        <CategoryProductCard />
      </div>
    </div>
  );
}

export default page;
