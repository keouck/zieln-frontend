"use client";
import Loader from "@/app/components/globalcomponents/Loader";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import DetailContent from "@/app/components/pagecomponents/blogspage/DetailContent";
import { blogsData } from "@/app/data/blogsData";
import useFetch from "@/app/hooks/useFetch";
import { useParams } from "next/navigation";

const BlogDetail = () => {
  const { blog } = useParams();
  const blogId = Array.isArray(blog) ? blog[0] : blog;

  const {
    data: blogDetail,
    loading,
    error,
  } = useFetch<any>(`/blogs/${blogId}?populate=*`, true);

  console.log(blogDetail);

  if (loading)
    return (
      <PageLayout>
        <Loader />
      </PageLayout>
    );

  if (error) {
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
      {!loading && <DetailContent blog={blogDetail?.data?.attributes} />}
    </PageLayout>
  );
};

export default BlogDetail;
