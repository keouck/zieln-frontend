/* eslint-disable @next/next/no-img-element */
"use client";
import { blogsData } from "@/app/data/blogsData";
import React from "react";
import BlogCard from "../blogspage/BlogCard";
import Link from "next/link";

export default function Blogs() {
  return (
    <section className="component-py component-px border-b">
      <div className="text-center mb-10 lg:mb-14">
        <h2 className="component-heading">The Blog</h2>
        <p className="lg:text-lg mt-2">
          Discover the latest updates and insights
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {blogsData.slice(0, 3).map((blog, index) => (
          <BlogCard
            key={index}
            id={blog.id}
            category={blog.category}
            title={blog.title}
            content={blog.content}
            date={blog.date}
            image={blog.image}
            writer={blog?.writer}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-primary  text-primary shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href="/blogs"
        >
          Read more
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
