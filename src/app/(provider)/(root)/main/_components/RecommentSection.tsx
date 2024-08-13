import Image from 'next/image';
import React from 'react';

function RecommentSection() {
  return (
    <div>
      <h1>티셔츠로 트렌디한 룩 연출</h1>
      <div className="flex px-[16px] gap-[5px]">
        <div>
          <Image src={'/recommend/superserve_tshirt.jpg'} alt="superserve" width={186} height={223} />
          <p>슈퍼서브</p>
          <p>9,900원</p>
        </div>
        <div>
          <Image src={'/recommend/superserve_tshirt.jpg'} alt="superserve" width={186} height={223} />
          <p>슈퍼서브</p>
          <p>9,900원</p>
        </div>
        <div>
          <Image src={'/recommend/superserve_tshirt.jpg'} alt="superserve" width={186} height={223} />
          <p>슈퍼서브</p>
          <p>9,900원</p>
        </div>
      </div>
    </div>
  );
}

export default RecommentSection;
