"use client";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import EditEvent from "@/app/components/pagecomponents/eventspage/EditEvent";
import { useParams } from "next/navigation";
import React from "react";

export default function EditEventPage() {
  const slug = useParams();
  return (
    <PageLayout>
      <EditEvent eventId={Number(slug.id)} />
    </PageLayout>
  );
}
