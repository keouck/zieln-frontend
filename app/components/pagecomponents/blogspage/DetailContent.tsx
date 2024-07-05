/* eslint-disable @next/next/no-img-element */
"use client";
import { FloatButton } from "antd";
import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaFacebook,
  FaLink,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import BlockRenderClient from "@/app/utils/BlockRender";

interface BlogCategories {
  data: {
    id: string;
    attributes: {
      Category: string;
    };
  }[];
}

interface Blog {
  id: number;
  Title: string;
  Thumbnail: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  Content: BlocksContent;
  blog_categories: BlogCategories;
  date: string;
  writer: string;
  createdAt: string;
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
          {blog?.blog_categories?.data?.map((category) => (
            <span
              key={category.id}
              className="bg-white px-4 py-1 rounded-full text-sm mr-2"
            >
              {category.attributes.Category}
            </span>
          ))}
          {/* <span className="bg-white px-4 py-1 rounded-full text-sm">Blog</span> */}
        </div>
        <h1 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8 lg:max-w-4xl text-white">
          {blog.Title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 mb-4 text-white">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-200 lg:text-xl mr-2" />
              <p className="text-sm lg:text-base">
                {new Date(blog.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center">
              <FaUser className="text-gray-200 lg:text-xl mr-2" />
              <p className="text-sm lg:text-base">{blog.writer || "Zieln"}</p>
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
            src={`http://localhost:1337${blog?.Thumbnail?.data?.attributes.url}`}
            alt={blog.Title}
            className="object-cover w-full max-h-96 rounded-lg"
          />
        </div>
        <div className="mt-4 lg:mt-8 space-y-4 lg:space-y-8 lg:text-lg text-black">
          {blog?.Content && <BlockRenderClient content={blog.Content} />}
        </div>
      </div>
      <FloatButton
        icon={
          <img
            src="https://www.svgrepo.com/show/101168/go-back-arrow.svg"
            alt=""
          />
        }
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
