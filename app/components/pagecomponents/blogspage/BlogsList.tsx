"use client";
import { blogsData } from "@/app/data/blogsData";
import { DatePicker, Select } from "antd";
import { useState } from "react";
import BlogCard from "./BlogCard";
import PaginationComponent from "../../globalcomponents/Pagination";
import useFetch from "@/app/hooks/useFetch";
import Loader from "../../globalcomponents/Loader";

const { Option } = Select;

export default function BlogsList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("latest");

  const [filterBlogs, setFilterBlogs] = useState<any[]>([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const {
    data: blogs,
    loading,
    error,
  } = useFetch<any>("/blogs?populate=*", true);
  const {
    data: blogCategories,
    loading: blogCategoriesLoading,
    error: blogCategoriesError,
  } = useFetch<any>("/blog-categories", true);

  if (loading || blogCategoriesLoading) return <Loader />;
  if (error || blogCategoriesError) return;

  const handleCategoryChange = (value: string | null) => {
    setSelectedCategory(value === "all" ? null : value);
    setCurrentPage(1);
  };

  const handleDateChange = (date: any, dateString: string | string[]) => {
    if (Array.isArray(dateString)) {
      setSelectedDate(dateString[0]);
    } else {
      setSelectedDate(dateString);
    }
  };

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value);

    setFilterBlogs(
      blogs?.data?.filter((blog: any) => {
        let categoryMatch = selectedCategory
          ? blog.category === selectedCategory
          : true;
        let dateMatch = selectedDate ? blog.date === selectedDate : true;
        return categoryMatch && dateMatch;
      })
    );
  };

  // Filter blogs
  const filteredBlogs = blogsData.filter((blog) => {
    let categoryMatch = selectedCategory
      ? blog.category === selectedCategory
      : true;
    let dateMatch = selectedDate ? blog.date === selectedDate : true;
    return categoryMatch && dateMatch;
  });

  // Sort blogs
  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  // Pagination logic
  const paginatedBlogs = sortedBlogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) setPageSize(pageSize);
  };

  return (
    <section>
      <div className="mb-8 pt-8 lg:pt-16 component-px">
        <div className="flex justify-center">
          <h1 className="text-xl lg:text-3xl font-medium mb-4 lg:mb-8 max-w-3xl text-center">
            Stay Updated with the Latest Trends and Insights from Our Expert
            Blogs
          </h1>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <Select
            placeholder="Select Category"
            allowClear
            onChange={handleCategoryChange}
            className="w-48"
          >
            {blogCategories?.data?.map((category: any) => (
              <Option key={category?.id} value={category?.attributes?.Category}>
                {category?.attributes?.Category}
              </Option>
            ))}
          </Select>
          <DatePicker.RangePicker onChange={handleDateChange} />
          <Select
            placeholder="Sort By"
            defaultValue="latest"
            onChange={handleSortOrderChange}
            className="w-32"
          >
            <Option value="latest">Latest</Option>
            <Option value="oldest">Oldest</Option>
          </Select>
        </div>
      </div>

      {blogs?.data?.length > 0 ? (
        <div className="component-px pb-8 lg:pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {blogs?.data?.map((blog: any) => (
            <BlogCard
              key={blog?.id}
              id={blog.id}
              category={blog?.blog_categories}
              title={blog?.attributes?.Title}
              content={blog?.attributes?.description}
              date={new Date(blog?.attributes?.publishedAt).toLocaleString(
                "en-US",
                {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                }
              )}
              image={
                blog?.attributes?.Thumbnail?.data?.attributes?.url ||
                "/logo.png"
              }
              writer={blog?.attributes?.author || "Zieln"}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg lg:text-xl font-medium">
            No blogs found under the selected category.
          </p>
        </div>
      )}

      <div className="flex justify-center mt-8 pb-8 lg:pb-16">
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
