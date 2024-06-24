/* eslint-disable @next/next/no-img-element */
// components/BlogCard.tsx

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";

interface BlogCardProps {
  id: number;
  category: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  category,
  title,
  content,
  date,
  image,
}) => {
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
    <Link href={`/blogs/${id}`}>
      <div className="bg-white shadow-md rounded-lg lg:rounded-3xl overflow-hidden transition duration-300 transform group hover:shadow-lg hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full h-48 lg:h-60 object-cover rounded-t-lg group-hover:scale-105 transition duration-300"
        />
        <div className="p-4">
          <div className="flex justify-between my-2 text-gray-700">
            <p>{category}</p>
            <p>5 min read</p>
          </div>
          <h2 className="text-lg lg:text-xl font-medium mb-2">{title}</h2>
          <div className="flex justify-between">
            <p className="text-sm text-gray-400">{date}</p>
            <p className="flex space-x-2">
              <FacebookShareButton url={url}>
                <FaFacebook className="text-sm text-gray-700" />
              </FacebookShareButton>
              <TwitterShareButton url={url}>
                <FaTwitter className="text-sm text-gray-700" />
              </TwitterShareButton>
              <button onClick={copyToClipboard} className="text-sm text-gray-700">
                <FaLink />
              </button>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
