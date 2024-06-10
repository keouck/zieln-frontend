import React from "react";
import { FiSearch } from "react-icons/fi";
import EventCard from "./EventCard";
import { eventsData } from "@/app/data/eventsData";
import { PrimaryButton } from "../../globalcomponents/Buttons";

const EventsList = () => {
  return (
    <section className="component-px component-py">
      <div className="mb-8 lg:mb-16 flex justify-center w-full">
        <div className="w-full flex items-center border border-gray-300 rounded-full max-w-xl pl-4 pr-2 py-2">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full focus:outline-none"
          />
          <PrimaryButton buttonName="Search" />
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="col-span-1">
          {/* Filter by category */}
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">Education</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">Environment</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">Motorcycles</span>
            </label>
            {/* Add more categories as needed */}
          </div>
        </div>

        <div className="col-span-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
