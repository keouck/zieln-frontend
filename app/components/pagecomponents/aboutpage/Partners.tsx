/* eslint-disable @next/next/no-img-element */
import { partnersData } from "@/app/data/partnersData";
import React from "react";

export default function Partners() {
  return (
    <section className="component-px component-py">
      <h1 className="component-heading">Our Partners</h1>
      <div className="flex flex-wrap  gap-4 mt-4 lg:mt-8">
        {partnersData.slice(0,8).map((partner) => (
          <div key="" className="partner-logo">
            <img
              src={partner?.image}
              alt="logo"
              className="h-16 md:h-24 lg:h-28 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
