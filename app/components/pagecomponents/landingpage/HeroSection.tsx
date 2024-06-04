import { slidesData } from "@/app/data/slidesData";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function HeroSection() {
  return (
    <section className="">
      {/* <!-- Slider --> */}
      <div className="px-4 md:px-8 lg:px-16">
        <div
          data-hs-carousel='{
          "loadingClasses": "opacity-0"
        }'
          className="relative"
        >
          <div className="hs-carousel relative overflow-hidden w-full h-[30rem]  md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              {slidesData?.map((slide, index) => (
                <div key={index} className="hs-carousel-slide">
                  <div
                    className="h-[30rem]  md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat "
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 lg:ps-20 md:pb-10">
                      <h1 className="block text-white font-bold md:text-lg lg:text-xl">{slide?.title}</h1>
                      <h2 className="block text-white text-xl md:text-3xl">
                        {slide?.description}
                      </h2>
                      <div className="mt-5">
                        <Link
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                          href={slide?.buttonLink}
                        >
                          {slide?.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- Arrows --> */}
          <button
            type="button"
            className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-white hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-3.5 md:size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                ></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>

          <button
            type="button"
            className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-white hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-3.5 md:size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </span>
          </button>
          {/* <!-- End Arrows --> */}
        </div>
      </div>
      {/* <!-- End Slider --> */}
    </section>
  );
}
