"use client";
import { boxesData } from "@/app/data/boxesData";
import { MainPageButton } from "../../globalcomponents/Buttons";
import { Avatar } from "antd";

/* eslint-disable @next/next/no-img-element */

const SmallCard = ({ title, subtitle, bgColor, imageUrl }: any) => (
  <div
    className={`${bgColor} relative flex flex-col justify-between p-4 lg:py-8 rounded-lg h-full overflow-hidden shadow-xl`}
  >
    <div className="">
      <h3 className="text-base lg:text-xl font-[600] text-black">{title}</h3>
      <p className="text-xs md:text-sm text-black mt-2 pr-8 mb-4">{subtitle}</p>
    </div>
    <div className="w-full absolute -bottom-4 right-4 flex justify-end ">
      <img src={imageUrl} alt={title} className="object-cover w-24 right-4" />
    </div>
  </div>
);

const BigCard = ({ title, subtitle, bgColor, imageUrl }: any) => (
  <div
    className={`${bgColor} relative flex flex-col justify-between p-4 lg:px-4 rounded-lg h-full overflow-hidden shadow-xl`}
  >
    <div className="">
      <h3 className="text-xl lg:text-2xl font-[600] text-black">{title}</h3>
      <p className="text-xs md:text-sm lg:text-base text-black mt-2">
        {subtitle}
      </p>
    </div>
    <div className="">
      <img
        src={imageUrl}
        alt={title}
        className="lg:absolute -bottom-8 right-0 w-24 lg:w-36 h-40 lg:h-48 object-cover"
      />
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="component-px component-py grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Grid */}
        <div className="flex flex-col justify-center">
          <div className="relative">
            <h1 className="text-3xl lg:text-5xl font-[600] text-black dark:text-white">
              <span className="text-primary">
                Empower Your Journey Beyond the Classroom
              </span>
            </h1>
            <h2 className="lg:text-lg text-gray-700 dark:text-black-300 mt-4">
              Discover, Engage, and Grow with Outsmash, Your Hub for
              Extra-Curricular and Co-Curricular Opportunities
            </h2>
            <MainPageButton link="/events" buttonName="Explore!" />
          </div>
        </div>

        {/* Video Embed */}
        <div className="flex flex-col items-center">
          <div className="w-[70%] bg-white shadow-xl rounded-lg p-4">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg shadow-md"
              src="https://www.youtube.com/embed/kkbQ8cWz2YA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="mt-4 text-lg md:text-xl font-semibold text-black text-center">
            Watch Our Video to Learn More About Outsmash
          </h3>
        </div>
      </div>
    </section>
  );
}
