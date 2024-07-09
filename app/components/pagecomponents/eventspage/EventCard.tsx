/* eslint-disable @next/next/no-img-element */
import { PUBLIC_URL } from "@/app/config/url";
import Link from "next/link";
import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

interface EventAttribute {
  title: string;
  location: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user_id?: string;
  images: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    }[];
  };
}

interface Event {
  id: number;
  attributes: EventAttribute;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link href={`/events/${event?.id}`}>
      <div className="cursor-pointer bg-white shadow-md rounded-2xl  overflow-hidden transition duration-300 transform group hover:shadow-lg hover:scale-105">
        <img
          className="w-full h-32 md:h-40 object-cover object-center group-hover:scale-105 transition duration-300"
          src={
            event.attributes?.images.data.length !== 0
              ? `${PUBLIC_URL}${event.attributes?.images.data[0].attributes.url}`
              : `${PUBLIC_URL}/images/placeholder.png`
          }
          alt={event.attributes?.title}
        />
        <div className="p-4">
          <h2 className="md:text-lg font-semibold">
            {event.attributes?.title}
          </h2>
          <div className="">
            <div className="flex items-center mt-2">
              <FiCalendar className="w-4 h-4 mr-2 text-gray-700" />
              <p className="text-gray-700 text-xs md:text-sm">
                {new Date(event.attributes?.date).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
            </div>
            <div className="flex items-center mt-2">
              <FiMapPin className="w-4 h-4 mr-2 text-gray-700" />
              <p className="text-gray-700 text-xs md:text-sm">
                {event.attributes?.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
