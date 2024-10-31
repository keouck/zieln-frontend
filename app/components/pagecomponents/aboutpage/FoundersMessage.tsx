/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function FoundersMessage() {
  return (
    <section className="component-px component-py">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Event"
            className="w-full rounded-2xl md:h-80 object-cover"
          />
        </div>
        <div>
          <h1 className="component-heading mb-4">
            Greetings from the Founders
          </h1>
          <p className="md:text-lg text-gray-700">
          Ever felt like your school's a maze of missed opportunities? Us too. That's why we built Outsmash, your one-stop shop for crushing the extracurricular and co-curricular game! We want you to actively engage, discover your passions, and unlock your full potential.
          So ditch the FOMO (fear of missing out) and join the Outsmash revolution! We'll help you turn "I wish" into a resounding "I did!"
          </p>
        </div>
      </div>
    </section>
  );
}
