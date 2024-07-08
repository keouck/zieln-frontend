import React from "react";
import { PrimaryWhiteOutlineButton } from "../../globalcomponents/Buttons";

interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonName?: string;
  buttonLink?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonName,
  buttonLink,
}) => {
  return (
    <section
      className="relative bg-cover bg-center text-white h-60 lg:h-80 overflow-hidden flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-4xl mx-auto text-center component-px component-py">
        <h1 className="text-2xl lg:text-5xl font-bold mb-2 md:mb-4">{title}</h1>
        <p className="md:text-xl mb-3 md:mb-6">{subtitle}</p>
        {buttonName && buttonLink && (
          <div className="flex items-center justify-center">
            <PrimaryWhiteOutlineButton
              buttonName={buttonName}
              link={buttonLink}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
