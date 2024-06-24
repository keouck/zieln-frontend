"use client";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import DetailContent from "@/app/components/pagecomponents/blogspage/DetailContent";
import { blogsData } from "@/app/data/blogsData";
import { useParams } from "next/navigation";

const BlogDetail = () => {
  const { blog } = useParams();
  const blogId = Array.isArray(blog) ? blog[0] : blog;
  const blogItem = blogsData.find((blg) => blg?.id === parseInt(blogId));

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
      <DetailContent blog={blogItem} />
    </PageLayout>
  );
};

export default BlogDetail;
