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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            doloremque minus alias, esse explicabo dolor vero laborum repellat,
            in animi porro. Dolorem explicabo aut fugiat delectus facilis
            impedit illum, molestiae illo, eligendi neque aperiam
            necessitatibus?
          </p>
        </div>
      </div>
    </section>
  );
}
