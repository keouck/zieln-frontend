"use client";
import { IResource } from "@/@types/resources.types";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import ResourceDetail from "@/app/components/pagecomponents/resourcespage/ResourceDetail";
import useFetch from "@/app/hooks/useFetch";
import withAuth from "@/app/hoc/withAuth";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ResourceDetailPage = () => {
  const [resource, setResource] = useState<IResource | null>();

  const { id } = useParams();

  const { data } = useFetch(`/resources/${id}/?populate=image,resources`, true);

  useEffect(() => {
    if (data) setResource((data as any).data);
  }, [data]);

  return (
    <PageLayout>
      {resource && <ResourceDetail resource={resource} />}
    </PageLayout>
  );
};

export default withAuth(ResourceDetailPage);
