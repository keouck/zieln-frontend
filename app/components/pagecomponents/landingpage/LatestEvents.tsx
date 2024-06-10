/* eslint-disable react/no-unescaped-entities */

import { eventsData } from "@/app/data/eventsData";

/* eslint-disable @next/next/no-img-element */
export default function LatestEvents() {
  return (
    <section className="component-px component-py">
      <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <h1 className="component-heading">Latest Events</h1>
      </div>

      {/* <!-- Card Grid --> */}
      <div className="mt-4 lg:mt-8 grid md:grid-cols-2 gap-8 lg:gap-16">
        {eventsData.slice(0, 4).map((event, index) => (
          <a key={index} className="group block" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl shadow dark:bg-neutral-800">
              <img
                className="lg:h-96 w-full group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src={event.image}
                alt="Image Description"
              />
            </div>

            <div className="pt-4">
              <h3 className="relative inline-block text-lg font-bold text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 ">
                {event.title}
              </h3>
              <p className="mt-1 text-gray-600">{event.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {event.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* <!-- End Card Grid --> */}
    </section>
  );
}
