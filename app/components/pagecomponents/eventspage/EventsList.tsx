"use client";
import React, { useState, useEffect } from "react";
import { Select, Button, Checkbox, Modal } from "antd";
import { PrimaryButton } from "../../globalcomponents/Buttons";
import EventCard from "./EventCard";
import PaginationComponent from "../../globalcomponents/Pagination";
import useFetch from "@/app/hooks/useFetch";
import Loader from "../../globalcomponents/Loader";

export const revalidate = 10;

const EventsList: React.FC = () => {
  const [sortedEvents, setSortedEvents] = useState([]);
  const [sortOrder, setSortOrder] = useState<string>("latest");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<Set<number>>(
    new Set()
  );
  const [selectedLocations, setSelectedLocations] = useState<Set<number>>(
    new Set()
  );

  // fetch events
  const {
    data: event,
    loading: eventLoading,
    error: eventError,
  } = useFetch<any>("/events?populate=*", true);

  // fetch categories
  const {
    data: category,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch<any>("/event-categories", true);

  // fetch location
  const {
    data: location,
    loading: locationLoading,
    error: locationError,
  } = useFetch<any>("/event-locations", true);

  useEffect(() => {
    if (event?.data) {
      let filtered = event.data;

      if (searchInput) {
        filtered = filtered.filter((ev: any) =>
          ev.attributes.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      }

      if (selectedCategories.size > 0) {
        filtered = filtered.filter((ev: any) =>
          Array.from(selectedCategories).includes(
            ev.attributes.event_categories.data[0]?.id
          )
        );
      }

      if (selectedLocations.size > 0) {
        filtered = filtered.filter(
          (ev: any) =>
            ev.attributes.event_location?.data &&
            Array.from(selectedLocations).includes(
              ev.attributes.event_location.data.id
            )
        );
      }

      let sorted = [...filtered];
      if (sortOrder === "latest") {
        sorted.sort(
          (a, b) =>
            new Date(b.attributes.date).getTime() -
            new Date(a.attributes.date).getTime()
        );
      } else {
        sorted.sort(
          (a, b) =>
            new Date(a.attributes.date).getTime() -
            new Date(b.attributes.date).getTime()
        );
      }
      setSortedEvents(sorted);
    }
  }, [sortOrder, event, searchInput, selectedCategories, selectedLocations]);

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    setSortOrder(value.value);
  };

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleCategoryChange = (id: number) => {
    setSelectedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleLocationChange = (id: number) => {
    setSelectedLocations((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (eventLoading || !event) return <Loader />;

  return (
    <section className="component-px component-py">
      <div className="mb-8 lg:mb-16 grid md:grid-cols-3 gap-4 md:gap-0">
        <div className="md:col-span-2 flex justify-end">
          <div className="w-full flex items-center border border-gray-300 rounded-full max-w-xl px-4 py-2 space-x-3">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full focus:outline-none"
              value={searchInput}
              onChange={handleSearch}
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
        {categoryLoading ? (
          <Loader />
        ) : (
          <div>
            {category?.data?.map((category: any) => (
              <Checkbox
                className="mb-2"
                key={category?.id}
                checked={selectedCategories.has(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              >
                {category?.attributes?.name}
              </Checkbox>
            ))}
          </div>
        )}
        <h2 className="text-lg font-semibold mt-6 mb-4">Locations</h2>
        {locationLoading ? (
          <Loader />
        ) : (
          <div>
            {location?.data?.map((location: any) => (
              <Checkbox
                className="mb-2"
                key={location?.id}
                checked={selectedLocations.has(location.id)}
                onChange={() => handleLocationChange(location.id)}
              >
                {location?.attributes?.location}
              </Checkbox>
            ))}
          </div>
        )}
      </Modal>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="col-span-1 hidden lg:block">
          <div className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            {categoryLoading ? (
              <Loader />
            ) : (
              <div>
                {category?.data?.map((category: any) => (
                  <Checkbox
                    className="mb-2"
                    key={category?.id}
                    checked={selectedCategories.has(category.id)}
                    onChange={() => handleCategoryChange(category.id)}
                  >
                    {category?.attributes?.name}
                  </Checkbox>
                ))}
              </div>
            )}
            <h2 className="text-lg font-semibold mt-6 mb-4">Locations</h2>
            <div>
              {location?.data?.map((location: any) => (
                <Checkbox
                  className="mb-2"
                  key={location?.id}
                  checked={selectedLocations.has(location.id)}
                  onChange={() => handleLocationChange(location.id)}
                >
                  {location?.attributes?.location}
                </Checkbox>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {paginatedEvents.map((event: any) => (
            <EventCard key={event?.id} event={event} />
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
