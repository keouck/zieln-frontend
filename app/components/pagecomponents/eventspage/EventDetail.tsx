/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
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
import Loader from "../../globalcomponents/Loader";
import LoginRequiredAlert from "../../globalcomponents/LoginRequiredAlert"; // Adjust the path accordingly
import useFetch from "@/app/hooks/useFetch";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";

interface EventDetailProps {
  event: {
    user_id: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    date: string;
    location: string;
    interested_by: {
      data: [];
    };
    registered_by: {
      data: [];
    };
    endDate?: string;
    banner: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    logo: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  const [saved, setSaved] = useState(false); // State to track if event is saved
  const [interested, setInterested] = useState(false); // State to track if user is interested
  const [interestedCount, setInterestedCount] = useState<number>(
    Number(event?.interested_by.data.length) || 0
  ); // State to track the count of interested users

  const { event: eventId } = useParams();

  const [currentClerkUserId, setCurrentClerkUserId] = useState<string | null>(
    null
  );

  const { user } = useUser();

  console.log(user);

  const { data: clerkUserData } = useFetch(
    `/clerk-users?filters[username][$eq]=${user?.username || "dummy"}`,
    true
  );

  const { data: prevData, update } = useFetch(
    `/events/${eventId}?populate=*`,
    true
  );

  useEffect(() => {
    if (!clerkUserData) return;

    if ((clerkUserData as any).data.length === 0) {
      setCurrentClerkUserId(null);
      return;
    }

    const userData = (clerkUserData as any).data.filter(
      (item: any) => item.attributes.username === user!.username
    );

    if (userData.length === 0) {
      setCurrentClerkUserId(null);
      return;
    }

    setCurrentClerkUserId(userData[0].id);
  }, [clerkUserData, user]);

  const toggleSaved = () => {
    const payload = { ...(prevData as any).data.attributes };

    update({
      data: {
        ...payload,
        saved_by: {
          connect: [currentClerkUserId],
        },
        banner: payload.banner.data.id,
        logo: payload.logo.data.id,
      },
    });
  };

  const toggleInterested = async () => {
    const payload = { ...(prevData as any).data.attributes };

    update({
      data: {
        ...payload,
        interested_by: {
          connect: [currentClerkUserId],
        },
        banner: payload.banner.data.id,
        logo: payload.logo.data.id,
      },
    });
  };

  if (!event) return <Loader />;

  return (
    <section className="pb-8 lg:pb-16">
      {/* Banner */}
      <div className="">
        <img
          src={
            event?.banner?.data?.attributes?.url
              ? `${event?.banner?.data?.attributes?.url}`
              : "/logo.png"
          }
          alt="Banner"
          className="w-full h-48 sm:h-64 md:h-80 object-cover"
        />
      </div>

      {/* Basic Infos */}
      <div className="component-px pb-8 flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="flex flex-row gap-4 lg:gap-8">
          <div className="w-40 h-32 md:w-48 md:h-48 -mt-8 md:-mt-16 overflow-hidden rounded-lg shadow-lg border-2 flex items-center justify-center">
            <img
              src={
                event?.logo?.data?.attributes?.url
                  ? `${event?.logo?.data?.attributes?.url}`
                  : "/logo.png"
              }
              alt="Profile Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pt-2 md:pt-4 lg:pt-8">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold md:mb-2">
              {event?.title}
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              {event?.description}
            </p>
          </div>
        </div>
        <div className=" mt-0 lg:mt-10 space-y-2">
          <div className="flex items-center text-sm md:text-base">
            <FaMapMarkerAlt className="mr-2" />
            <p>{event?.location}</p>
          </div>
          <div className="flex items-center text-sm md:text-base">
            <FaUserFriends className="mr-2" />
            <p>{event?.registered_by.data.length} registers</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="component-px">
        <div className="flex flex-row flex-wrap items-center gap-4 mb-8">
          <LoginRequiredAlert
            action={() => console.log("Register action")}
            buttonContent={
              <PrimaryButton
                icon={<FaRegCalendarCheck />}
                buttonName={`Register (${event.interested_by.data.length})`}
              />
            }
          />
          <LoginRequiredAlert
            action={toggleSaved}
            buttonContent={
              <PrimaryOutlineButton
                icon={saved ? <FaBookmark /> : <FiBookmark />}
                buttonName={`${
                  saved ? "Saved For Later" : "Save For Later "
                } (${event.saved_by.data.length})`}
              />
            }
          />
          <LoginRequiredAlert
            action={toggleInterested}
            buttonContent={
              <PrimaryOutlineButton
                icon={interested ? <FaStar /> : <FaRegStar />}
                buttonName={`Interested (${
                  (event.interested_by as any).data.length
                })`}
              />
            }
          />
        </div>
      </div>

      {/* About Event */}
      <div className="component-px">
        <h3 className="text-lg md:text-2xl font-medium">About this Event</h3>
        <p className="text-sm lg:text-base mt-2 lg:mt-4">
          {event?.description}
        </p>
      </div>
    </section>
  );
};

export default EventDetail;
