import React from 'react';
import WishProductsList from './components/WishProductsList';
import TopButtonsBar from './components/TopButtonsBar';

function WishlistPage() {
  return (
    <div>
      <TopButtonsBar />
      <WishProductsList />
    </div>
  );
}

export default WishlistPage;
