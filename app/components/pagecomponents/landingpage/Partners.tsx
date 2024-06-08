/* eslint-disable @next/next/no-img-element */
import { partnersData } from "@/app/data/partnersData";
import React from "react";

export default function Partners() {
  return (
    <section className="py-8">
      <div className=" overflow-hidden w-full">
        <div
          className="flex gap-4 pr-4 w-[200%] h-full animate-marquee"
          style={{ "--marquee-duration": "20s" } as React.CSSProperties}
        >
          <div className="flex flex-1 gap-4 h-full">
            {partnersData?.map((partner, index) => (
              <div
                key={index}
                className="flex flex-1 items-center justify-center "
              >
                <img
                  src={partner?.image}
                  alt=""
                  className="w-12 lg:w-20 transform grayscale hover:grayscale-0 hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:px-8 xl:px-16 mt-4 lg:mt-8 shadow-2xl">
        <hr />
      </div>
    </section>
  );
}
