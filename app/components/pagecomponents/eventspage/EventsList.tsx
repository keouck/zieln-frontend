"use client";
import React, { useState, useEffect } from "react";
import { Select, Button, Checkbox, Modal } from "antd";
import { PrimaryButton } from "../../globalcomponents/Buttons";
import EventCard from "./EventCard";
import { eventsData } from "@/app/data/eventsData";

const EventsList: React.FC = () => {
  const [sortedEvents, setSortedEvents] = useState(eventsData);
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState<boolean>(true);
  const [sortOrder, setSortOrder] = useState<string>("latest");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    setSortOrder(value.value);
  };

  const fetchEvent = async () => {
    try {
      const res = await fetch(`/api/event`, {
        method: "POST",
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          "An error occurred while fetching events. Please try again."
        );
      }

      const events = data?.data?.map((event: any) => ({
        id: event.id,
        title: event.attributes.name,
        date: "2021-10-10",
        location: "New York",
        image: "https://cdn2.allevents.in/thumbs/thumb665ae34394a59.jpg",
      }));

      console.log("event", events);
      setEvents(events);
    } catch (error) {
      console.error(error);
    } finally {
      setEventsLoading(false);
    }
  };

  useEffect(() => {
    let sorted = [...eventsData];
    if (sortOrder === "latest") {
      sorted.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else {
      sorted.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }
    setSortedEvents(sorted);

    fetchEvent();
  }, [sortOrder]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <section className="component-px component-py">
      <div className="mb-8 lg:mb-16 grid md:grid-cols-3 gap-4 md:gap-0">
        <div className="md:col-span-2 flex justify-end">
          <div className="w-full flex items-center border border-gray-300 rounded-full max-w-xl px-4 py-2 space-x-3">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full focus:outline-none"
            />
            <PrimaryButton buttonName="Search" />
          </div>
        </div>

        <div className="md:col-span-1 w-full flex items-center justify-end ">
          <Select
            labelInValue
            defaultValue={{ value: "latest", label: "Sort By:" }}
            style={{ width: 120 }}
            onChange={handleChange}
            className=""
            options={[
              {
                value: "latest",
                label: "Latest",
              },
              {
                value: "oldest",
                label: "Oldest",
              },
            ]}
          />
          <Button className="ml-4 lg:hidden" onClick={handleOpenModal}>
            Filters
          </Button>
        </div>
      </div>

      <Modal
        title="Filters"
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div>
          <Checkbox className="mb-2">Education</Checkbox>
          <Checkbox className="mb-2">Environment</Checkbox>
          <Checkbox className="mb-2">Motorcycles</Checkbox>
          {/* Add more categories as needed */}
        </div>
        <h2 className="text-lg font-semibold mt-6 mb-4">Locations</h2>
        <div>
          <Checkbox className="mb-2">New York</Checkbox>
          <Checkbox className="mb-2">Los Angeles</Checkbox>
          <Checkbox className="mb-2">Chicago</Checkbox>
          {/* Add more locations as needed */}
        </div>
      </Modal>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="col-span-1 hidden lg:block">
          <div className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div>
              <Checkbox className="mb-2">Education</Checkbox>
              <Checkbox className="mb-2">Environment</Checkbox>
              <Checkbox className="mb-2">Motorcycles</Checkbox>
              {/* Add more categories as needed */}
            </div>
            <h2 className="text-lg font-semibold mt-6 mb-4">Locations</h2>
            <div>
              <Checkbox className="mb-2">New York</Checkbox>
              <Checkbox className="mb-2">Los Angeles</Checkbox>
              <Checkbox className="mb-2">Chicago</Checkbox>
              {/* Add more locations as needed */}
            </div>
          </div>
        </div>

        <div className="col-span-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {eventsLoading ? (
            <div>Loading....</div>
          ) : events.length === 0 ? (
            <div>
              <h2 className="text-xl font-semibold">No events found</h2>
            </div>
          ) : (
            sortedEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
