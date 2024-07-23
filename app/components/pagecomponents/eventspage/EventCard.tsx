/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { FiCalendar, FiEdit, FiMapPin, FiTrash, FiUsers } from "react-icons/fi";

interface EventAttribute {
  title: string;
  location: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  endDate?: string;
  interested_by: {
    data: [];
  };
  registered_by: {
    data: [];
  };
  user_id?: string;
  banner: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    };
  };
  images: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    }[];
  };
}
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useRouter } from "next/navigation";
import { Modal } from "antd";
import { BACKEND_URI } from "@/constant";
import { useUser } from "@clerk/nextjs";

dayjs.extend(isBetween);

interface Event {
  id: number;
  attributes: EventAttribute;
}

interface EventCardProps {
  event: Event;
  refetch?: () => {};
}

const EventCard = ({ event, refetch }: EventCardProps) => {
  const { user } = useUser();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const today = dayjs().startOf("day");

  const eventStart = dayjs(event?.attributes?.date).startOf("day");
  const eventEnd = event?.attributes?.endDate
    ? dayjs(event?.attributes?.endDate).endOf("day")
    : eventStart;

  // Checking if the event is ongoing
  const isOngoing = today.isBetween(eventStart, eventEnd, null, "[)"); // Used '[)' to include start date and exclude end date

  // Calculating countdown if the event starts within the next 7 days
  const daysUntilEvent = eventStart.diff(today, "day");
  const showCountdown =
    !isOngoing && daysUntilEvent >= 0 && daysUntilEvent <= 7;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const url = `${BACKEND_URI}/api/events/${event.id}`;
    await fetch(url, { method: "DELETE" });
    refetch && refetch();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = () => {
    router.push(`/edit-event/${event.id}`);
  };

  console.log("here: ", event);
  return (
    <div className="relative">
      <Link href={`/events/${event.id}`} onClick={(e) => e.stopPropagation()}>
        <div className="cursor-pointer bg-white shadow-md rounded-2xl  transition duration-300 transform group hover:shadow-lg hover:scale-105 relative overflow-hidden">
          <img
            className="w-full h-32 md:h-40 object-cover object-center group-hover:scale-105 transition duration-300"
            src={event.attributes.banner.data.attributes.url}
            alt="event card image"
          />

          <div className="flex mt-4 absolute top-0 right-4">
            {isOngoing && (
              <div className="bg-white flex items-center gap-2 text-black border border-black text-xs px-2 py-1 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                On-going
              </div>
            )}
            {showCountdown && !isOngoing && (
              <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {daysUntilEvent} Days to go
              </div>
            )}
          </div>

          {/* <div className="absolute left-0 top-0 h-16 w-16">
            <div className="bg-indigo-700 text-xs absolute transform -rotate-45 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
              {event?.postedBy}
            </div>
          </div> */}

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

              <div className="flex items-center mt-2">
                <FiUsers className="w-4 h-4 mr-2 text-gray-700" />
                <span className="text-gray-700 text-xs md:text-sm">
                  {event.attributes?.registered_by.data.length} Registered
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {event.attributes.user_id === user?.username && (
        <>
          <Modal
            title="Confirm Deletion"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Delete"
            okButtonProps={{ danger: true }}
          >
            <p>Are you sure you want to delete this event?</p>
          </Modal>
          <div
            className="flex items-center justify-end mt-2 space-x-2 absolute bottom-3 right-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit();
              }}
              className="text-blue-500 hover:text-blue-700"
            >
              <FiEdit className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showModal();
              }}
              className="text-red-500 hover:text-red-700"
            >
              <FiTrash className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EventCard;
