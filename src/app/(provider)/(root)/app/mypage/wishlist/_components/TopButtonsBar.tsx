import React from 'react';

function TopButtonsBar() {
  return (
    <div className="px-[15px] py-[12px]">
      <div className="grid grid-cols-3 border border-[#f3f3f3] h-[38px]">
        <button>상품</button>
        <button>브랜드</button>
        <button>스타일</button>
      </div>
    </div>
  );
}

export default TopButtonsBar;
