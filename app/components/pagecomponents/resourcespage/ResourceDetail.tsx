/* eslint-disable @next/next/no-img-element */
// components/pagecomponents/resourcespage/ResourceDetail.tsx
"use client";
import { IResource } from "@/@types/resources.types";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

interface ResourceDetailProps {
  resource: IResource | undefined;
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
        <Link href="/resources">
          <Button type="default" className="mb-6 font-semibold">
            Go Back
          </Button>
        </Link>

        <h1 className="text-xl lg:text-3xl font-medium mb-6 text-gray-800">
          {resource.attributes.title}
        </h1>

        <p className="text-lg mb-6 text-gray-700">
          {resource.attributes.description}
        </p>

        {resource.attributes.image && (
          <div className="mb-6">
            <img
              src={resource.attributes.image.data.attributes.url}
              alt="Additional content"
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-lg lg:text-xl font-semibold mb-3 text-gray-800">
            Resource Links
          </h2>

          <div className="flex flex-col gap-y-5">
            {resource.attributes.resources.map((item, key) => {
              return (
                <div
                  key={key + "_resouce_link_item"}
                  className="flex flex-col border-b border-gray-400"
                >
                  <div>{item.description}</div>

                  <div className="my-2">
                    <span className="font-semibold">Link here:</span>{" "}
                    <Link
                      href={item.link}
                      target="_blank"
                      className="text-blue-600"
                    >
                      {item.link}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceDetail;
