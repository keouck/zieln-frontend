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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };
  return (
    <Link
      className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40"
      href={`/blogs/${id}`}
    >
      <div className="aspect-w-16 aspect-h-11">
        <img
          className="w-full h-60 object-cover rounded-xl"
          src={image}
          alt="Image Description"
        />
      </div>
      <div className="my-3">
        <p className="text-gray-500 mb-2">
          <small>{date}</small>
        </p>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          {title}
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400 line-clamp-2">
          {content}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <img
            className="size-8 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Image Description"
          />
          <div>
            <h5 className="text-sm text-gray-800 dark:text-neutral-200">
              By {writer}
            </h5>
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
    </Link>
  );
};

export default BlogCard;
