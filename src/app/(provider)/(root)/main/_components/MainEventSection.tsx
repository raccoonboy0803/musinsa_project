import Image from 'next/image';
import React from 'react';

function MainEventSection() {
  return (
    <div>
      <h1>무신사 잡화대전</h1>
      <div className="flex gap-[5px] px-[16px]">
        <div>
          <Image src={'/mainEvent/mlb_event_main.jpg'} alt="mlb_main" width={282} height={375} />
          <p>빈티지 볼 캡 한정 발매</p>
          <h2>엠엘비</h2>
        </div>
        <div>
          <Image src={'/mainEvent/rawraw_event_main.jpg'} alt="mlb_main" width={282} height={375} />
          <p>선발매 + 최대 30% 할인</p>
          <h2>로우로우</h2>
        </div>
      </div>
    </div>
  );
}

export default MainEventSection;
