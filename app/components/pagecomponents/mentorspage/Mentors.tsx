/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Avatar } from "antd";
import PaginationComponent from "../../globalcomponents/Pagination";
import { mentorData } from "@/app/data/mentorsData";

// Pagination settings
const PAGE_SIZE_OPTIONS = [5, 10, 15, 20];

const Mentors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const filteredMentors = mentorData.filter((mentor) =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedMentors = filteredMentors.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <section className="component-px component-py bg-gray-50 space-y-8 lg:space-y-12">
      <div className="flex items-center justify-center text-center">
        <div>
          <h1 className="text-2xl lg:text-5xl font-semibold mb-4 text-gray-900">
            Everyone needs a <span className="text-blue-700">Mentor</span>
          </h1>
          <p className="max-w-2xl lg:text-lg">
            Search amazing individuals around the globe, find a mentor, expand
            your network, and learn from incredible people!
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search mentors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-6 pr-12 border border-gray-300 rounded-full shadow-md focus:outline-none  placeholder-gray-500 text-gray-900"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-4">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17.65 15.65A6.5 6.5 0 1 0 15.65 17.65A6.5 6.5 0 0 0 17.65 15.65z"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Display message if no mentors are found */}
      {filteredMentors.length === 0 ? (
        <div className="flex justify-center mb-8">
          <p className="text-lg text-gray-600">
            No mentors found with that name.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
            {paginatedMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="w-full h-auto rounded-2xl overflow-hidden shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg"
                    alt="Mentor Background"
                    className="w-full h-24 object-cover"
                  />
                </div>
                <div className="flex items-center justify-center -mt-10">
                  <Avatar src={mentor?.image} size={90} />
                </div>
                <div className="p-2 space-y-4 pb-6">
                  <h2 className="text-center font-medium lg:text-lg">
                    {mentor?.name}
                  </h2>
                  <p className="text-center divide-x divide-black line-clamp-1">
                    {mentor?.keyword?.map((kw, index) => (
                      <span key={index} className="px-2">
                        {kw}
                      </span>
                    ))}
                  </p>
                  <div className="flex items-end justify-center">
                    <Link href={`/mentors/${mentor.id}`}>
                      <button className="border border-gray-400 rounded-full text-primary text-sm px-3 py-1.5 hover:bg-gray-100 transition-colors">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <PaginationComponent
              totalItems={filteredMentors.length}
              current={currentPage}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              pageSizeOptions={PAGE_SIZE_OPTIONS}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Mentors;
