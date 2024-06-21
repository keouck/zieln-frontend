"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BlogCard from "./BlogCard";
import { blogsData } from "@/app/data/blogsData";

export default function BlogsList() {
  return (
    <section className="component-px component-py border-t">
      <div className="text-center">
        <h2 className="text-2xl lg:text-4xl font-bold">Our Blogs</h2>
        <p className="text-gray-600 mt-2 md:text-lg">
          Discover the latest updates and insights
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {blogsData.map((blog, index) => (
          <BlogCard
            key={index}
            id={blog.id}
            category={blog.category}
            title={blog.title}
            content={blog.content}
            date={blog.date}
            image={blog.image}
          />
        ))}
      </div>
    </section>
  );
}
