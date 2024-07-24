/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Modal } from "antd"; // Import the Ant Design Modal
import "antd/dist/reset.css";
import { YoutubeFilled } from "@ant-design/icons"; // Import YouTube icon

// Define the Podcast interface
interface Podcast {
  id: number;
  title: string;
  embedUrl: string;
}

const podcasts: Podcast[] = [
  {
    id: 1,
    title: "Podcast Episode 1",
    embedUrl: "https://www.youtube.com/embed/bOLPy0TBzdk?autoplay=0",
  },
  {
    id: 2,
    title: "Podcast Episode 2",
    embedUrl:
      "https://www.youtube.com/embed/fBnAMUkNM2k?si=LOjPW53K7hZpp6Ak&autoplay=0",
  },
  {
    id: 3,
    title: "Podcast Episode 3",
    embedUrl: "https://www.youtube.com/embed/bOLPy0TBzdk?autoplay=0",
  },
  {
    id: 4,
    title: "Podcast Episode 4",
    embedUrl:
      "https://www.youtube.com/embed/fBnAMUkNM2k?si=LOjPW53K7hZpp6Ak&autoplay=0",
  },
  {
    id: 5,
    title: "Podcast Episode 5",
    embedUrl: "https://www.youtube.com/embed/bOLPy0TBzdk?autoplay=0",
  },
  // Add more podcast episodes as needed
];

const getThumbnailUrl = (embedUrl: string) => {
  const videoId = embedUrl.split("/embed/")[1].split("?")[0];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

export default function Podcasts() {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePodcastClick = (podcast: Podcast) => {
    setSelectedPodcast(podcast);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedPodcast(null);
  };

  return (
    <section className="component-py">
      <div className="component-px">
        <h1 className="component-heading">Insights From Seniors</h1>
        <p className="lg:text-lg mt-2">
          Explore our podcast to gain insights about opportunities
        </p>
      </div>
      <div className="mt-6 lg:mt-10 px-4 lg:px-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          className="mySwiper podcast" // Add the podcast class here
        >
          {podcasts.map((podcast) => (
            <SwiperSlide key={podcast.id}>
              <div
                className="flex-shrink-0 w-full cursor-pointer relative"
                onClick={() => handlePodcastClick(podcast)}
              >
                <img
                  src={getThumbnailUrl(podcast.embedUrl)}
                  alt={podcast.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center ">
                  <YoutubeFilled
                    style={{
                      fontSize: "48px",
                      color: "#FF0000",
                      backgroundColor: "",
                    }}
                  />
                </div>
                <h2 className="text-xl font-semibold mt-2 text-center">
                  {podcast.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal
        title={selectedPodcast?.title}
        open={isModalVisible}
        onCancel={closeModal}
        footer={null}
        width={1200}
        centered
        destroyOnClose={true} // This will destroy the modal content on close
      >
        {selectedPodcast && isModalVisible && (
          <div className="w-full h-full flex items-center justify-center">
            <iframe
              width="100%"
              height="450"
              src={`${selectedPodcast.embedUrl}&autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedPodcast.title}
              className="rounded-xl"
            ></iframe>
          </div>
        )}
      </Modal>
    </section>
  );
}
