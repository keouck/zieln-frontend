"use client";
import React, { useState, useEffect } from "react";
import { Select, Button, Checkbox, Modal } from "antd";
import { PrimaryButton } from "../../globalcomponents/Buttons";
import EventCard from "./EventCard";
import { eventsData } from "@/app/data/eventsData";
import PaginationComponent from "../../globalcomponents/Pagination";

const EventsList: React.FC = () => {
  const [sortedEvents, setSortedEvents] = useState(eventsData);
  const [sortOrder, setSortOrder] = useState<string>("latest");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    setSortOrder(value.value);
  };

  useEffect(() => {
    const sorted = [...eventsData];
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
  }, [sortOrder]);

  // Pagination logic
  const paginatedEvents = sortedEvents.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) setPageSize(pageSize);
  };

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
          {paginatedEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <PaginationComponent
          totalItems={sortedEvents.length}
          current={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          showSizeChanger
          pageSizeOptions={[5, 10, 20, 50]}
        />
      </div>
    </section>
  );
};

export default EventsList;
