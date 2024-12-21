import React from "react";

const MainImage = ({ imageTitle }) => {
  return (
    <section className="main-image bg-[url('./assets/background.jpg')] bg-cover bg-center h-72 md:h-96 lg:h-96 flex items-center justify-center relative">
      <div className="absolute h-full w-full bg-black opacity-50"></div>
      <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl text-white relative z-10">
        {imageTitle}
      </h2>
    </section>
  );
};

export default MainImage;
