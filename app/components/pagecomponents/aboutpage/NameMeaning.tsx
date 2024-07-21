/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function NameMeaning() {
  return (
    <section className="component-px component-py">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-8">
          <h2 className="component-heading mb-4">
            What does <q>Outsmash</q> mean?
          </h2>
          <div className="text-lg text-gray-700">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              earum fugit nesciunt provident laboriosam consectetur explicabo
              aliquid voluptatibus, enim ratione, voluptates exercitationem et
              corrupti illo voluptate veniam quo dicta quam maiores id? Ipsam
              saepe totam ea iste voluptate.
            </p>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 h-40 md:h-80 bg-primaryDark flex items-center justify-center"
          style={{
            boxShadow: "5px 10px 30px 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "50px",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1
            className="text-3xl md:text-6xl lg:text-8xl font-extrabold animate-pulse"
            style={{ fontFamily: "cursive" }}
          >
            <q>Outsmash</q>
          </h1>
        </div>
      </div>
    </section>
  );
}
