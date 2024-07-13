"use client";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import Banner from "@/app/components/pagecomponents/eventspage/Banner";
import Resources from "@/app/components/pagecomponents/resourcespage/Resources";
import withAuth from "@/app/hoc/withAuth";

const ResourcesPage = () => {
  return (
    <PageLayout>
      <Banner
        title="Resources"
        backgroundImage="https://eq47oznpfsr.exactdn.com/wp-content/uploads/2021/06/LawParalegalhandcomputer.jpg?lossy=1&quality=70&ssl=1"
      />
      <Resources />
    </PageLayout>
  );
};

export default withAuth(ResourcesPage);
