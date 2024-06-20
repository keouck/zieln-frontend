/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function TeamsMission() {
  return (
    <section className="component-px component-py ">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div>
          <img
            src="/images/team.svg"
            alt="Event"
            className="w-full rounded-ss-[80px] rounded-ee-[80px]"
          />
        </div>
        <div>
          <h1 className="component-heading mb-4">Our Teams and Mission</h1>
          <p className="md:text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam
            at dicta totam numquam? Dolore veritatis vitae porro cupiditate
            consequuntur, delectus asperiores, nam dignissimos amet corporis
            assumenda odio voluptates recusandae. Quam sint non assumenda eaque
            nihil! Explicabo qui, ullam, consequuntur officia reprehenderit
            odio, iure sunt repellat nisi quaerat exercitationem sequi.
          </p>
        </div>
      </div>
    </section>
  );
}
