/* eslint-disable @next/next/no-img-element */
// components/pagecomponents/resourcespage/ResourceDetail.tsx
"use client";
import React from "react";

interface Resource {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string; // Optional
  video?: string; // Optional
  link?: string; // Optional
}

interface ResourceDetailProps {
  resource: Resource | undefined;
}

const ResourceDetail = ({ resource }: ResourceDetailProps) => {
  if (!resource) {
    return (
      <div className="text-center text-xl font-semibold">
        Resource not found
      </div>
    );
  }

  return (
    <section className="component-px component-py bg-gray-50">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-xl lg:text-3xl font-medium mb-6 text-gray-800">
          {resource.title}
        </h1>

        <p className="text-lg mb-6 text-gray-700">{resource.description}
           
        </p>

        {resource.image && (
          <div className="mb-6">
            <img
              src={resource.image}
              alt="Additional content"
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>
        )}

        {resource.video && (
          <div className="mb-6">
            <h2 className="text-lg lg:text-xl font-semibold mb-3 text-gray-800">
              Videos
            </h2>
            <video
              controls
              className="w-full h-64 object-cover rounded-md shadow-md"
            >
              <source src={resource.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {resource.link && (
          <div className="mb-6">
            <h2 className="text-lg lg:text-xl font-semibold mb-3 text-gray-800">
              Additional Resources
            </h2>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              {resource.link}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceDetail;
