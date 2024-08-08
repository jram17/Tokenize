import React from 'react';
import bg from '/front-page-bg.png';
import Info from '@/app_components/Info';
function Home() {
  return (
    <div
      className={`flex flex-col items-left justify-center object-cover min-h-screen bg-cover bg-repeat-y overflow-scroll bg-left-top`}
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <Info />
    </div>
  );
}

export default Home;
