"use client";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import ResourceDetail from "@/app/components/pagecomponents/resourcespage/ResourceDetail";
import { resourcesData } from "@/app/data/resourcesData";
import { useParams } from "next/navigation";

const ResourceDetailPage = () => {
  const { id } = useParams();
  const resource = resourcesData?.find((rsc) => rsc.id === Number(id));

  return (
    <PageLayout>
      <ResourceDetail resource={resource} />
    </PageLayout>
  );
};

export default ResourceDetailPage;
