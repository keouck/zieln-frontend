import PageLayout from "@/app/components/globalcomponents/PageLayout";
import BlogsList from "@/app/components/pagecomponents/blogspage/BlogsList";
import Banner from "@/app/components/pagecomponents/eventspage/Banner";

export default function Blogs() {
  return (
    <PageLayout>
      <Banner
        title="Our Blogs"
        backgroundImage="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        buttonName=""
        buttonLink=""
      />
      <BlogsList />
    </PageLayout>
  );
}
