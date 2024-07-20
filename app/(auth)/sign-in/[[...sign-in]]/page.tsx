"use client";
/* eslint-disable @next/next/no-img-element */
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import { SignIn } from "@clerk/nextjs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// Define the slider data array with placeholder images
const sliderData = [
  "https://d8it4huxumps7.cloudfront.net/uploads/images/login/login-img-1.png?d=734x734",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/login/login-img-2.png?d=734x734",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/login/login-img-3.png?d=734x734",
];

export default function SignInPage() {
  return (
    <PageLayout>
      <section className="relative min-h-screen component-px component-py w-full flex items-center justify-center border-t">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "url('https://www.veeforu.com/wp-content/uploads/2022/10/paper-texture-background-scaled.jpg')",
            zIndex: -1,
          }}
        ></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 w-full component-py lg:rounded-2xl  xl:border xl:shadow  xl:overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-50 bg-gray-100 hidden lg:block"></div>
          <h1 className="hidden lg:block absolute top-8 left-12 text-lg font-bold font-lora bg-white px-4 py-2 border border-black rounded-full">
            Outsmash
          </h1>
          <div className="hidden lg:flex items-center justify-center p-8">
            {/* Image slider using Swiper */}
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
              modules={[Autoplay, Pagination]}
            >
              {sliderData.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex items-center justify-center pb-16">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-96 h-auto"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex items-center justify-center lg:justify-normal relative">
            <div className="hidden xl:block absolute -top-4 right-36 z-10">
              <svg
                className="w-16 h-auto text-orange-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="hidden xl:block absolute bottom-0 -left-32 z-10">
              <svg
                className="w-40 h-auto text-cyan-500"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <SignIn />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
