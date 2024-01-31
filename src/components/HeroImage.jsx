import React from "react";

const HeroImage = () => {
  return (
    <div className="bg-gradient-to-b from-Highlight h-[320px] w-[192px] md:w-[360px] md:h-[600px] to-transparent rounded-[113px]">
      <img
        src="./assets/hero_image.png"
        alt="hero_image"
        className="h-full w-full"
      />
    </div>
  );
};

export default HeroImage;
