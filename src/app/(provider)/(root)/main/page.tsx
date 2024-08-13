import React from 'react';
import MainPhotoSection from './_components/MainPhotoSection';
import NoticeMenu from './_components/NoticeMenu';
import RecommentSection from './_components/RecommentSection';
import MainEventSection from './_components/MainEventSection';

function HomePage() {
  return (
    <div>
      <MainPhotoSection />
      <NoticeMenu />
      <RecommentSection />
      <MainEventSection />
    </div>
  );
}

export default HomePage;
