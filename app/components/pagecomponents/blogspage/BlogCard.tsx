/* eslint-disable @next/next/no-img-element */
// components/BlogCard.tsx

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";

interface BlogCardProps {
  id: number;
  category: string[];
  title: string;
  content: string;
  date: string;
  image: string;
  writer: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  content,
  image,
  writer,
  date,
}) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const copyToClipboard = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent navigation
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 ">
      <Link href={`/blogs/${id}`}>
        <div className="aspect-w-16 aspect-h-11 block overflow-hidden rounded-xl">
          <img
            className="w-full h-60 object-cover  group-hover:scale-105 transition duration-300"
            src={image}
            alt="Image Description"
          />
        </div>
        <div className="my-3">
          <p className="text-gray-500 mb-2">
            <small>{date}</small>
          </p>
          <h3 className="text-xl font-semibold text-gray-800 ">{title}</h3>
          <p className="mt-5 text-gray-600 line-clamp-2">{content}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <img
            className="size-8 rounded-full"
            src="/logo.png"
            alt="Image Description"
          />
          <div>
            <h5 className="text-sm text-gray-800 ">By {writer}</h5>
          </div>
        </div>
        <div className="flex gap-x-2 text-gray-800">
          <FacebookShareButton url={url}>
            <FaFacebook className="text-base" />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <FaTwitter className="text-base" />
          </TwitterShareButton>
          <button onClick={copyToClipboard} className="text-base">
            <FaLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
