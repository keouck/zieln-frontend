"use client";
import Loader from "@/app/components/globalcomponents/Loader";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import DetailContent from "@/app/components/pagecomponents/blogspage/DetailContent";
import useFetch from "@/app/hooks/useFetch";
import { useParams } from "next/navigation";

const BlogDetail = () => {
  const { blog } = useParams();
  const blogId = Array.isArray(blog) ? blog[0] : blog;
  const {
    data: blogData,
    loading,
    error,
  } = useFetch(`/api/blog/${blogId}`, {
    method: "PUT",
  });

  if (loading === false && !blogData?.data?.attributes) {
    return (
      <PageLayout>
        <section className="component-px component-py">
          <div>Blog post not found.</div>
        </section>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <section className="component-px component-py">
          <div>{error}</div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {loading ? (
        <Loader />
      ) : (
        blogData?.data?.attributes && (
          <DetailContent blog={blogData?.data?.attributes} />
        )
      )}
    </PageLayout>
  );
};

export default BlogDetail;
