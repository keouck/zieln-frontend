"use client";
import { useState, useEffect } from "react";
import { DatePicker, Select } from "antd";
import BlogCard from "./BlogCard";
import PaginationComponent from "../../globalcomponents/Pagination";
import useFetch from "@/app/hooks/useFetch";
import Loader from "../../globalcomponents/Loader";

const { Option } = Select;

export default function BlogsList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("latest");
  const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const {
    data: blogs,
    loading,
    error,
  } = useFetch<any>(`/blogs?populate=*`, true);

  const {
    data: blogCategories,
    loading: blogCategoriesLoading,
    error: blogCategoriesError,
  } = useFetch<any>("/blog-categories", true);

  useEffect(() => {
    if (blogs?.data) {
      let filtered = blogs.data;

      if (selectedCategory) {
        filtered = filtered.filter((blog: any) =>
          blog.attributes.blog_categories.data.some(
            (category: any) => category.attributes.Category === selectedCategory
          )
        );
      }

      if (selectedDate) {
        const selectedDateTime = new Date(selectedDate).getTime();
        filtered = filtered.filter(
          (blog: any) =>
            /// should display blogs published till the end of the selected date
            new Date(blog.attributes.publishedAt).getTime() <=
            selectedDateTime + 86400000
        );
      }

      let sorted = [...filtered];
      if (sortOrder === "latest") {
        sorted.sort(
          (a, b) =>
            new Date(b.attributes.publishedAt).getTime() -
            new Date(a.attributes.publishedAt).getTime()
        );
      } else {
        sorted.sort(
          (a, b) =>
            new Date(a.attributes.publishedAt).getTime() -
            new Date(b.attributes.publishedAt).getTime()
        );
      }

      setFilteredBlogs(sorted);
    }
  }, [sortOrder, blogs, selectedCategory, selectedDate]);

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
  };

  // Pagination logic
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) setPageSize(pageSize);
  };

  if (loading || blogCategoriesLoading) return <Loader />;
  if (error || blogCategoriesError) return;

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
            <Option value="all">All</Option>
            {blogCategories?.data?.map((category: any) => (
              <Option key={category?.id} value={category?.attributes?.Category}>
                {category?.attributes?.Category}
              </Option>
            ))}
          </Select>
          <DatePicker
            onChange={handleDateChange}
            // only allow dates before today
            disabledDate={(current) =>
              current && current.isAfter(new Date(Date.now()))
            }
          />
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

      {filteredBlogs.length > 0 ? (
        <div className="component-px pb-8 lg:pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {paginatedBlogs.map((blog: any) => (
            <BlogCard
              key={blog?.id}
              id={blog.id}
              category={blog?.attributes?.blog_categories?.data
                .map((cat: any) => cat.attributes.Category)
                .join(", ")}
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
