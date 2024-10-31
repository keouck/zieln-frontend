"use client";
import { boxesData } from "@/app/data/boxesData";
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
              <span className="text-primary">Empower Your Journey Beyond
              the Classroom</span>
            </h1>
            <h2 className="lg:text-lg text-gray-700 dark:text-black-300 mt-4">
              Discover, Engage, and Grow with Outsmash, Your Hub for
              Extra-Curricular and Co-Curricular Opportunities
            </h2>

            {/* <div className="hidden absolute w-full end-0 right-32 lg:flex justify-end">
              <svg
                viewBox="0 0 202.819 45.163"
                className="hero__underline w-60"
              >
                <path
                  d="M2.12 9.857L156.9 5.515l43.806-1.229V0a749.549 749.549 0 00-114.1 22.4 2.146 2.146 0 00.584 4.209 109.73 109.73 0 0133.39 5.281v-4.129l-30 9.532a2.146 2.146 0 000 4.132 96.378 96.378 0 0022.862 3.736c2.827.118 2.821-4.167 0-4.285a91.282 91.282 0 01-21.694-3.583v4.132l30-9.532a2.147 2.147 0 000-4.132 113.829 113.829 0 00-34.558-5.434l.584 4.209a742.128 742.128 0 01112.935-22.25c2.726-.318 2.9-4.367 0-4.285L45.927 4.343 2.12 5.572c-2.821.079-2.833 4.365 0 4.285z"
                  fill="#273469"
                ></path>
              </svg>
            </div> */}
          </div>

          <div className="mt-4 flex">
            <div className="border border-dashed p-2 rounded-full border-primary flex items-center">
              <Avatar.Group
                size="large"
                maxCount={4} // Adjust to show up to 4 avatars
              >
                <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
                <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" />
                <Avatar src="https://randomuser.me/api/portraits/women/1.jpg" />
                <Avatar src="https://randomuser.me/api/portraits/women/2.jpg" />
                {/* Add more avatars as needed */}
              </Avatar.Group>
            </div>
          </div>
        </div>

        {/* Boxes Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-6">
            {boxesData
              .slice(0, 3)
              .map((box, index) =>
                box.size === "small" ? (
                  <SmallCard
                    key={index}
                    title={box.title}
                    subtitle={box.subtitle}
                    bgColor={box.bgColor}
                    imageUrl={box.imageUrl}
                  />
                ) : null
              )}
          </div>
          <div className="grid gap-6">
            {boxesData
              .slice(3)
              .map((box, index) =>
                box.size === "big" ? (
                  <BigCard
                    key={index}
                    title={box.title}
                    subtitle={box.subtitle}
                    bgColor={box.bgColor}
                    imageUrl={box.imageUrl}
                  />
                ) : null
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
