"use client";
import { blogsData } from "@/app/data/blogsData";
import { DatePicker, Select } from "antd";
import { useState } from "react";
import BlogCard from "./BlogCard";
import Loader from "../../globalcomponents/Loader";
import useFetch from "@/app/hooks/useFetch";

const { Option } = Select;

export default function BlogsList() {
  const {
    data: category,
    loading: categoryLoading,
    error: errorLoading,
  } = useFetch(`/api/category`, {
    method: "PUT",
  });
  console.log("category", category);
  const {
    data: blogs,
    loading,
    error,
  } = useFetch(`/api/blog`, {
    method: "PUT",
  });

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCategoryChange = (value: any) => {
    setSelectedCategory(value);
  };

  const handleDateChange = ({ date, dateString }: any) => {
    setSelectedDate(dateString);
  };

  const filteredBlogs = blogsData.filter((blog) => {
    let categoryMatch = selectedCategory
      ? blog.category === selectedCategory
      : true;
    let dateMatch = selectedDate ? blog.date === selectedDate : true;
    return categoryMatch && dateMatch;
  });

  if (error) {
    return (
      <section className="component-px component-py">
        <div>{error}</div>
      </section>
    );
  }

  return (
    <section>
      <div className="text-white bg-primary component-px component-py">
        <div className="text-center ">
          <h2 className="text-2xl lg:text-5xl font-bold mb-2 md:mb-4">
            Our Blogs
          </h2>
          <p className="md:text-xl mb-3 md:mb-6">
            Discover the latest updates and insights
          </p>
        </div>

        <div className="mt-4 lg:mt-8 text-center flex flex-col lg:flex-row items-center justify-center gap-4">
          <p>Filter by: </p>
          {!categoryLoading && (
            <Select
              placeholder="Select Category"
              style={{ width: 200 }}
              onChange={handleCategoryChange}
              allowClear
            >
              {category?.data?.map((category: any) => (
                <Option key={category.id} value={category.attributes.Category}>
                  {category.attributes.Category}
                </Option>
              ))}
            </Select>
          )}
          <DatePicker
            placeholder="Select Date"
            style={{ width: 200 }}
            onChange={handleDateChange}
            allowClear
            inputReadOnly
          />
        </div>
      </div>
      {loading ? <Loader /> : null}
      <div className="component-px component-py grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {!loading &&
          blogs?.data?.map((blog: any) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              category={"something"}
              title={blog.attributes.Title}
              content={blog.attributes.description}
              date={new Date(blog.attributes.publishedAt).toDateString()}
              image={`http://localhost:1337${blog.attributes.Thumbnail.data.attributes.url}`}
              writer={"Someone"}
            />
          ))}
      </div>
    </section>
  );
}
