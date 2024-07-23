import PageLayout from "@/app/components/globalcomponents/PageLayout";
import MyEventsList from "@/app/components/pagecomponents/eventspage/MyEventsList";
import React from "react";

export default function page() {
  return (
    <PageLayout>
      <MyEventsList />
    </PageLayout>
  );
}
