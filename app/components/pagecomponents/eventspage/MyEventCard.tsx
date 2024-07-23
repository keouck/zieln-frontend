/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiCalendar, FiMapPin, FiUsers, FiEdit, FiTrash } from "react-icons/fi";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { Modal } from "antd";

dayjs.extend(isBetween);

interface Event {
  id: number;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  image: string;
  interested: number;
  registered: number;
}

interface MyEventCardProps {
  event: Event;
  onDelete: (eventId: number) => void;
}

const MyEventCard = ({ event, onDelete }: MyEventCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  const today = dayjs().startOf("day");
  const eventStart = dayjs(event.date).startOf("day");
  const eventEnd = event.endDate
    ? dayjs(event.endDate).endOf("day")
    : eventStart;

  const isOngoing = today.isBetween(eventStart, eventEnd, null, "[)");
  const daysUntilEvent = eventStart.diff(today, "day");
  const showCountdown =
    !isOngoing && daysUntilEvent >= 0 && daysUntilEvent <= 7;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    onDelete(event.id);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = () => {
    router.push(`/edit-event/${event.id}`);
  };

  return (
    <div className="cursor-pointer bg-white shadow-md rounded-2xl overflow-hidden transition duration-300 transform group hover:shadow-lg  relative">
      <img
        className="w-full h-32 md:h-40 object-cover object-center group-hover:scale-105 transition duration-300"
        src={event.image}
        alt={event.title}
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
          <div className="flex items-center mt-2">
            <FiUsers className="w-4 h-4 mr-2 text-gray-700" />
            <span className="text-gray-700 text-xs md:text-sm">
              {event.registered} Registered
            </span>
          </div>
          <div className="flex items-center justify-end mt-2 space-x-2">
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
        </div>
      </div>
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
    </div>
  );
};

export default MyEventCard;
