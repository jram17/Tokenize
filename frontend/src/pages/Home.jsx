import React from 'react';
import bg from '/front-page-bg.jpg';

function Home() {
  return (
    <div
      className={` object-cover min-h-screen bg-cover bg-repeat-y overflow-scroll bg-left-top`}
      style={{ backgroundImage: `url("${bg}")` }}
    ></div>
  );
}

export default Home;
