/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaCalendarAlt,
  FaUser,
  FaLink,
  FaArrowLeft,
} from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { Divider, FloatButton } from "antd";

interface Blog {
  id: number;
  title: string;
  image: string;
  date: string;
  writer: string;
}

interface DetailContentProps {
  blog: Blog;
}

export default function DetailContent({ blog }: DetailContentProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <section className="relative component-px component-py">
      <div className="absolute inset-0 w-full h-96 bg-black -z-10"></div>
      <div className="relative z-20">
        <div className="mb-2 lg:mb-4">
          <span className="bg-white px-4 py-1 rounded-full text-sm">Blog</span>
        </div>
        <h1 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8 lg:max-w-4xl text-white">
          {blog.title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 mb-4 text-white">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-200 lg:text-xl mr-2" />
              <p className="text-sm lg:text-base">
                {new Date(blog.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center">
              <FaUser className="text-gray-200 lg:text-xl mr-2" />
              <p className="text-sm lg:text-base">{blog.writer}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <FacebookShareButton url={url}>
              <FaFacebook className=" lg:text-xl" />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <FaTwitter className=" lg:text-xl" />
            </TwitterShareButton>
            <button onClick={copyToClipboard} className=" lg:text-xl">
              <FaLink />
            </button>
          </div>
        </div>

        <div className="w-full">
          <img
            src={blog.image}
            alt={blog.title}
            className="object-cover w-full max-h-96 rounded-lg"
          />
        </div>
        <div className="mt-4 lg:mt-8 space-y-4 lg:space-y-8 lg:text-lg text-black">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            sequi libero quos nesciunt nemo unde eligendi esse temporibus
            suscipit nihil id impedit atque, possimus quaerat minima optio sit
            ullam quae magni error voluptatum! Ex enim iste recusandae,
            perspiciatis repellendus veritatis dolorem earum assumenda sit ea,
            fuga temporibus. Rerum, odit quibusdam?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            maiores accusamus ad eum? Ad, fugiat dolores unde atque quasi
            voluptatum nemo vitae quisquam ullam! Adipisci obcaecati accusantium
            at nesciunt culpa perferendis id vel fugit omnis, recusandae
            architecto itaque quidem cum voluptate corrupti repudiandae animi
            dolorum accusamus facere veniam. Mollitia eum vel dolores
            consequatur temporibus commodi error quia. Optio maiores ea neque
            iste aspernatur atque quis, ipsum obcaecati ab, quo rerum illum non
            nemo assumenda veritatis commodi! Aut pariatur harum ipsa illum.
            Quis ipsa rerum deleniti maiores blanditiis, sit facilis
            perspiciatis neque, repellat eligendi placeat, corrupti voluptates
            quasi fugit praesentium saepe!
          </p>
        </div>
      </div>
      <FloatButton
        icon={<FaArrowLeft className="text-sm" />}
        description="Go back"
        shape="square"
        style={{
          right: 54,
          width: "60px",
          fontWeight: "bolder",
          border: "1px solid black",
          whiteSpace: "nowrap",
        }}
        onClick={() => window.history.back()}
      />
    </section>
  );
}
