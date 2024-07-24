/* eslint-disable @next/next/no-img-element */
"use client";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { FloatButton } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaFacebook,
  FaLink,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";

interface Blog {
  Title: string;
  Content: BlocksContent;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blog_categories: {
    data: {
      id: number;
      attributes: {
        Category: string;
      };
    }[];
  };
  Thumbnail: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    };
  };
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
          {blog?.blog_categories?.data &&
            blog?.blog_categories?.data?.map((category: any) => (
              <span
                key={category?.id}
                className="bg-white px-4 py-1 rounded-full text-sm"
              >
                {blog?.blog_categories?.data[0]?.attributes?.Category}
              </span>
            ))}
        </div>
        <h1 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8 lg:max-w-4xl text-white">
          {blog?.Title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 mb-4 text-white">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-200 lg:text-xl mr-2" />
              <p className="text-sm lg:text-base">
                {new Date(blog?.publishedAt).toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center">
              <FaUser className="text-gray-200 lg:text-xl mr-2" />
              <p className="text-sm lg:text-base">{"Zieln"}</p>
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
            src={blog?.Thumbnail?.data?.attributes?.url || "/logo.png"}
            alt={blog?.Title}
            className="object-cover w-full max-h-96 rounded-lg"
          />
        </div>
        <div className="mt-4 lg:mt-8 space-y-4 lg:space-y-8 lg:text-lg text-black">
          {blog?.Content && (
            <BlocksRenderer
              content={blog?.Content}
              blocks={{
                paragraph: ({ children }) => <p className="mb-4">{children}</p>,
                heading: ({ children, level }) => {
                  switch (level) {
                    case 1:
                      return (
                        <h1 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8">
                          {children}
                        </h1>
                      );
                    case 2:
                      return (
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-8">
                          {children}
                        </h2>
                      );
                    case 3:
                      return (
                        <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-8">
                          {children}
                        </h3>
                      );
                    case 4:
                      return (
                        <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-8">
                          {children}
                        </h4>
                      );
                    case 5:
                      return (
                        <h5 className="text-sm lg:text-base font-semibold mb-4 lg:mb-8">
                          {children}
                        </h5>
                      );
                    case 6:
                      return (
                        <h6 className="text-xs lg:text-sm font-semibold mb-4 lg:mb-8">
                          {children}
                        </h6>
                      );
                    default:
                      return <p>{children}</p>;
                  }
                },
                link: ({ children, url }) => (
                  <Link
                    href={url}
                    rel="noopener noreferrer"
                    className="text-black underline hover:no-underline"
                  >
                    {children}
                  </Link>
                ),
                list: ({ children, format }) => {
                  const List = format === "ordered" ? "ol" : "ul";
                  return <List className="list-disc ml-8">{children}</List>;
                },
              }}
              modifiers={{
                code: ({ children }) => (
                  <pre className="bg-gray-100 p-4 rounded-lg">{children}</pre>
                ),
                bold: ({ children }) => <strong>{children}</strong>,
                italic: ({ children }) => <em>{children}</em>,
                underline: ({ children }) => <u>{children}</u>,
                strikethrough: ({ children }) => <s>{children}</s>,
              }}
            />
          )}
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
