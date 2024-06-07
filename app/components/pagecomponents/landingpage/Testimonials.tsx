/* eslint-disable @next/next/no-img-element */
"use client";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import testimonialsData from "@/app/data/testimonialsData";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Testimonials() {
  return (
    <section className="relative component-py bg-primary text-white">
      <div className="text-center">
        <h1 className="component-heading">Testimonials</h1>
        <p className="lg:text-lg  mt-2">What other says about us</p>
      </div>
      <div className="mt-4  component-px py-8 bg-darkGreen">
        <Swiper
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          navigation={true}
          pagination={true}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonialsData?.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

interface Testimonial {
  name: string;
  designation: string;
  message: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="component-px pb-4 text-white relative">
      <div className="component-px absolute -top-0 left-0">
        <BiSolidQuoteAltLeft size={72} className=" opacity-25" />
      </div>
      <div className="w-full flex items-center text-center">
        <div className="pt-4 lg:pt-8">
          <p className="text-xl lg:text-3xl mt-4 md:text-base">
            {testimonial?.message}
          </p>
          <p className="mt-4 lg:mt-8 text-lg lg:text-xl font-medium">{testimonial?.name}</p>
          <p className="text-gray-400">{testimonial?.designation}</p>
        </div>
      </div>
    </div>
  );
};
