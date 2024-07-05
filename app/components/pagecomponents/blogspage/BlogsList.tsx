"use client";
import { blogsData } from "@/app/data/blogsData";
import { DatePicker, Select } from "antd";
import { useState } from "react";
import BlogCard from "./BlogCard";
import PaginationComponent from "../../globalcomponents/Pagination";

const { Option } = Select;

export default function BlogsList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const handleCategoryChange = (value: string | null) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const handleDateChange = (date: any, dateString: string | string[]) => {
    if (Array.isArray(dateString)) {
      setSelectedDate(dateString[0]);
    } else {
      setSelectedDate(dateString);
    }
  };

  // Filter blogs
  const filteredBlogs = blogsData.filter((blog) => {
    let categoryMatch = selectedCategory
      ? blog.category === selectedCategory
      : true;
    let dateMatch = selectedDate ? blog.date === selectedDate : true;
    return categoryMatch && dateMatch;
  });

  // Pagination logic
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) setPageSize(pageSize);
  };

  return (
    <section>
      <div className="text-white bg-primary component-px component-py">
        <div className="text-center">
          <h2 className="text-2xl lg:text-5xl font-bold mb-2 md:mb-4">
            Our Blogs
          </h2>
          <p className="md:text-xl mb-3 md:mb-6">
            Discover the latest updates and insights
          </p>
        </div>

        <div className="mt-4 lg:mt-8 text-center flex flex-col lg:flex-row items-center justify-center gap-4">
          <p>Filter by: </p>
          <Select
            placeholder="Select Category"
            style={{ width: 200 }}
            onChange={handleCategoryChange}
            allowClear
          >
            <Option value={null}>All</Option>
            <Option value="Tips and Tricks">Tips and Tricks</Option>
            <Option value="Career Development">Career Development</Option>
            <Option value="Tech and Innovation">Tech and Innovation</Option>
            {/* Add more categories as needed */}
          </Select>
          <DatePicker
            placeholder="Select Date"
            style={{ width: 200 }}
            onChange={handleDateChange}
            allowClear
            inputReadOnly
          />
        </div>
      </div>
      <div className="component-px component-py grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {paginatedBlogs.map((blog, index) => (
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

      <div className="flex justify-center mt-8pb-8 lg:pb-16">
        <PaginationComponent
          totalItems={filteredBlogs.length}
          current={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          showSizeChanger
          pageSizeOptions={[5, 10, 20, 50]}
        />
      </div>
    </section>
  );
}
