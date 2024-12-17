import { wikiPosts } from "@/app/data/wikiData";
import React from "react";

const WikiPage: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-lora font-bold text-primary mb-6">
          College Application Wiki
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wikiPosts.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-lora font-semibold text-primary mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 text-sm mb-4">{item.content}</p>
              <a
                // href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WikiPage;

