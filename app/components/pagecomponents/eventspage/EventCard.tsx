/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

interface Event {
  title: string;
  date: string;
  location: string;
  image: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="cursor-pointer bg-white shadow-md rounded-2xl  overflow-hidden transition duration-300 transform group hover:shadow-lg hover:scale-105">
      <img
        className="w-full h-32 md:h-40 object-cover object-center group-hover:scale-105 transition duration-300"
        src={event.image}
        alt={event.title}
      />
      <div className="p-4">
        <h2 className="md:text-lg font-semibold">{event.title}</h2>
        <div className="">
          <div className="flex items-center mt-2">
            <FiCalendar className="w-4 h-4 mr-2 text-gray-700" />
            <p className="text-gray-700 text-xs md:text-sm">{event.date}</p>
          </div>
          <div className="flex items-center mt-2">
            <FiMapPin className="w-4 h-4 mr-2 text-gray-700" />
            <p className="text-gray-700 text-xs md:text-sm">{event.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
