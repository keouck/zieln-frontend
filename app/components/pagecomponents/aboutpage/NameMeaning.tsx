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
            Outsmash is a collaborative platform which caters to students, clubs and organizations and other institutions , eventually bridging the gap between them together and spreading the word of opportunities to the students to help them become aware of the amazing opportunities available OUTside of the BOX, hence out name: OUTSMASH. We aim to help students go explore OUTside world of opportunities by SMASHing the walls of limitations.
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
