"use client";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import CreateEvent from "@/app/components/pagecomponents/eventspage/CreateEvent";
import withAuth from "@/app/hoc/withAuth";
import React from "react";

const CreateEventPage = () => {
  return (
    <PageLayout>
      <CreateEvent />
    </PageLayout>
  );
};

export default withAuth(CreateEventPage);
