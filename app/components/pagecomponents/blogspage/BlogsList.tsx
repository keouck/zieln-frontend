"use client";
import { blogsData } from "@/app/data/blogsData";
import { DatePicker, Select } from "antd";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import PageLayout from "../../globalcomponents/PageLayout";
import Loader from "../../globalcomponents/Loader";

const { Option } = Select;

export default function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/blog`, {
        method: "PUT",
      });
      const blogs = await res.json();

      if (!res.ok) {
        throw new Error(
          "An error occurred while fetching blogs. Please try again."
        );
      }

      setBlogs(blogs.data);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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
      {loading ? <Loader /> : null}
      <div className="component-px component-py grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {!loading &&
          blogs.map((blog: any) => (
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
