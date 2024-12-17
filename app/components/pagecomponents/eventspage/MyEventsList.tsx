"use client";
import React, { useState, useEffect } from "react";
import { Select, Input } from "antd";
import { PrimaryButton } from "../../globalcomponents/Buttons";
import MyEventCard from "./MyEventCard";
import { eventsData } from "@/app/data/eventsData";
import PaginationComponent from "../../globalcomponents/Pagination";

const MyEventsList: React.FC = () => {
  const [sortedEvents, setSortedEvents] = useState(eventsData);
  const [sortOrder, setSortOrder] = useState<string>("latest");

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const handleSortChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
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

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleDelete = (eventId: number) => {
    const filteredEvents = sortedEvents.filter((event) => event.id !== eventId);
    setSortedEvents(filteredEvents);
  };

  return (
    <section className="component-px component-py bg-light">
      <div className="mb-8 lg:mb-16 grid md:grid-cols-3 gap-4 md:gap-0">
        <div className="md:col-span-2 flex justify-end">
          <div className="w-full flex items-center border border-gray-300 rounded-full max-w-xl px-4 py-2 space-x-3">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full focus:outline-none bg-transparent"
            />
            <PrimaryButton buttonName="Search" />
          </div>
        </div>

        <div className="md:col-span-1 w-full flex items-center justify-end">
          <Select
            labelInValue
            defaultValue={{ value: "latest", label: "Sort By:" }}
            style={{ width: 120 }}
            onChange={handleSortChange}
          >
            <Select.Option value="latest">Latest</Select.Option>
            <Select.Option value="oldest">Oldest</Select.Option>
          </Select>
        </div>
      </div>

      <div className="mb-8 lg:mb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedEvents.map((event) => (
          <MyEventCard key={event.id} event={event} onDelete={handleDelete} />
        ))}
      </div>

      <PaginationComponent
        current={currentPage}
        pageSize={pageSize}
        totalItems={sortedEvents.length}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default MyEventsList;
