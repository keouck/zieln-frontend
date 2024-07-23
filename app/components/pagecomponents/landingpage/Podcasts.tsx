import React from "react";

const podcasts = [
  {
    id: 1,
    title: "Podcast Episode 1",
    embedUrl: "https://www.youtube.com/embed/bOLPy0TBzdk",
  },
  {
    id: 2,
    title: "Podcast Episode 2",
    embedUrl: "https://www.youtube.com/embed/fBnAMUkNM2k?si=LOjPW53K7hZpp6Ak",
  },
  {
    id: 3,
    title: "Podcast Episode 3",
    embedUrl: "https://www.youtube.com/embed/bOLPy0TBzdk",
  },
  {
    id: 4,
    title: "Podcast Episode 4",
    embedUrl: "https://www.youtube.com/embed/fBnAMUkNM2k?si=LOjPW53K7hZpp6Ak",
  },
  {
    id: 5,
    title: "Podcast Episode 5",
    embedUrl: "https://www.youtube.com/embed/bOLPy0TBzdk",
  },
  // Add more podcast episodes as needed
];

export default function Podcasts() {
  return (
    <section className="component-py ">
      <div className="component-px">
        <h1 className="component-heading">Insights From Seniors</h1>
        <p className="lg:text-lg mt-2">
          Explore our podcast to gain insights about opportunities
        </p>
      </div>
      <div className="mt-6 lg:mt-10 overflow-x-auto hide-scrollbar px-4 lg:px-8">
        <div className="flex space-x-4 lg:space-x-8">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="flex-shrink-0 w-80">
              <iframe
                width="100%"
                height="250"
                src={podcast.embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={podcast.title}
                className="rounded-xl"
              ></iframe>
              <h2 className="text-xl font-semibold mt-2">{podcast.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
