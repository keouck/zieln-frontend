"use client";
/* eslint-disable react/no-unescaped-entities */
import useFetch from "@/app/hooks/useFetch";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { RxStarFilled } from "react-icons/rx";
import Loader from "../../globalcomponents/Loader";

/* eslint-disable @next/next/no-img-element */
export default function LatestEvents() {
  const {
    data: events,
    loading,
    error,
  }: any = useFetch("/events?populate=*", true);

  if (loading) return <Loader />;
  if (error) return;

  return (
    <section className="component-px component-py">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="component-heading">Latest Events</h1>
          <p className="lg:text-lg mt-2">
            Check out the most recent events happening in your area
          </p>
        </div>
        <div>
          <Link href="/events">
            <div className="flex items-center text-gray-600 font-medium hover:text-gray-900 transition duration-300">
              View All Events <GoArrowUpRight className="ml-1" />
            </div>
          </Link>
        </div>
      </div>

      {events?.data?.length === 0 && (
        <div className="flex justify-center items-center h-96 w-full">
          <p className="text-gray-600">No events available</p>
        </div>
      )}

      {/* <!-- Card Grid --> */}
      <div className="mt-4 lg:mt-8 grid md:grid-cols-2 gap-8 lg:gap-16">
        {events?.data?.length > 0
          ? events?.data?.slice(0, 4).map((event: any) => (
              <a
                key={event?.id}
                className="group block relative"
                href={`/events/${event?.id}`}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl shadow dark:bg-neutral-800 relative">
                  <img
                    className="lg:h-96 w-full group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                    src={`${event?.attributes?.images.data[0].attributes.url}`}
                    alt="Event Image"
                  />

                  {/* Hover Popup */}
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2">
                      <RxStarFilled className="text-yellow-500" />
                      <span className="text-white">
                        {event.interested} Interested
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="relative inline-block text-lg font-bold text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 ">
                    {event?.attributes?.title}
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {event?.attributes.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {event?.attributes?.event_categories &&
                      event?.attributes?.event_categories?.data?.map(
                        (category: any) => (
                          <span
                            key={category?.id}
                            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                          >
                            {category?.attributes?.name}
                          </span>
                        )
                      )}
                  </div>
                </div>
              </a>
            ))
          : null}
      </div>
      {/* <!-- End Card Grid --> */}
    </section>
  );
}
