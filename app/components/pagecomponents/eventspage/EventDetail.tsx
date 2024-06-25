/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRegCalendarCheck,
  FaRegStar,
  FaStar,
  FaUserFriends,
} from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import {
  PrimaryButton,
  PrimaryOutlineButton,
} from "../../globalcomponents/Buttons";
import { FaBookmark } from "react-icons/fa6";

interface EventDetailProps {
  event: {
    title: string;
    description: string;
    location: string;
    audience: string;
    image: string;
    interested: number; // New property for interested count
  };
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  const [saved, setSaved] = useState(false); // State to track if event is saved
  const [interested, setInterested] = useState(false); // State to track if user is interested
  const [interestedCount, setInterestedCount] = useState(event.interested); // State to track the count of interested users

  const toggleSaved = () => {
    setSaved(!saved); // Toggle the saved state
  };

  const toggleInterested = () => {
    if (interested) {
      setInterested(false); // If already interested, toggle to uninterested
      setInterestedCount(interestedCount - 1); // Decrement the interested count
    } else {
      setInterested(true); // If not interested, toggle to interested
      setInterestedCount(interestedCount + 1); // Increment the interested count
    }
  };

  return (
    <section className="pb-8 lg:pb-16">
      {/* Banner */}
      <div className="">
        <img
          src={event?.image}
          alt="Banner"
          className="w-full h-48 sm:h-64 md:h-80 object-cover"
        />
      </div>

      {/* Basic Infos */}
      <div className="component-px pb-8 flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="flex flex-row gap-4 lg:gap-8">
          <div className="w-40 h-32 md:w-48 md:h-48 -mt-8 md:-mt-16 overflow-hidden rounded-lg shadow-lg border-2 flex items-center justify-center">
            <img
              src="https://t3.ftcdn.net/jpg/04/53/38/84/360_F_453388401_QAHlQGKY8CLhXeeGV9bWkgAaGzxUY75a.jpg"
              alt="Profile Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pt-2 md:pt-4 lg:pt-8">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold md:mb-2">
              {event.title}
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              {event.description}
            </p>
          </div>
        </div>
        <div className=" mt-0 lg:mt-10 space-y-2">
          <div className="flex items-center text-sm md:text-base">
            <FaMapMarkerAlt className="mr-2" />
            <p>{event.location}</p>
          </div>
          <div className="flex items-center text-sm md:text-base">
            <FaUserFriends className="mr-2" />
            <p>{event.audience}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="component-px">
        <div className="flex flex-row flex-wrap items-center gap-4 mb-8">
          <PrimaryButton
            icon={<FaRegCalendarCheck />}
            buttonName="Register (510)"
            link="/register"
          />
          <PrimaryOutlineButton
            icon={saved ? <FaBookmark /> : <FiBookmark />}
            buttonName={saved ? "Saved For Later" : "Save For Later"}
            onClick={toggleSaved}
          />
          <PrimaryOutlineButton
            icon={interested ? <FaStar /> : <FaRegStar />}
            buttonName={`Interested (${interestedCount})`}
            onClick={toggleInterested}
          />
        </div>
      </div>

      {/* About Event */}
      <div className="component-px">
        <h3 className="text-lg md:text-2xl font-medium">About this Event</h3>
        <p className="text-sm lg:text-base mt-2 lg:mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          asperiores voluptatem possimus modi qui vero dignissimos, illum libero
          omnis, officiis esse eum. Vitae commodi repellat deleniti. Corrupti
          sed natus officia vitae.
        </p>
        <p className="text-sm lg:text-base mt-2 lg:mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          asperiores voluptatem possimus modi qui vero dignissimos, illum libero
          omnis, officiis esse eum. Vitae commodi repellat deleniti. Corrupti
          perferendis adipisci quod ea exercitationem odio ipsa praesentium modi
          consectetur. Ab illo deleniti in, id, deserunt beatae libero sapiente
          officiis, ut fuga vero quos officia. Suscipit beatae dolores molestias
          sed natus officia vitae.
        </p>
      </div>
    </section>
  );
};

export default EventDetail;
