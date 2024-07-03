"use client";
import Loader from "@/app/components/globalcomponents/Loader";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import DetailContent from "@/app/components/pagecomponents/blogspage/DetailContent";
import { blogsData } from "@/app/data/blogsData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Blog {
  id: string;
  attributes: any;
}

const BlogDetail = () => {
  const { blog } = useParams();
  const blogId = Array.isArray(blog) ? blog[0] : blog;
  const blogItem = blogsData.find((blg) => blg?.id === parseInt(blogId));
  const [blogData, setBlogData] = useState<Blog>({ id: "", attributes: {} });
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBlogData = async (blogId: string | string[]) => {
    try {
      const res = await fetch(`/api/blog/${blogId}`, {
        method: "PUT",
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          "An error occurred while fetching blog data. Please try again."
        );
      }

      console.log(data.data);

      setBlogData(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData(blog);
  }, [blog]);

  if (!blogItem) {
    return (
      <PageLayout>
        <section className="component-px component-py">
          <div>Blog post not found.</div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {loading ? (
        <Loader />
      ) : (
        blogData?.attributes && <DetailContent blog={blogData.attributes} />
      )}
    </PageLayout>
  );
};

export default BlogDetail;
