"use client";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import EventDetail from "@/app/components/pagecomponents/eventspage/EventDetail";
import { eventsData } from "@/app/data/eventsData";
import { useParams } from "next/navigation";

export default function EventDetailPage() {
  const { event } = useParams();
  const eventId = Array.isArray(event) ? event[0] : event;
  const eventItem = eventsData.find((eve) => eve.id === parseInt(eventId));
  const defaultEvent = {
    id: 0,
    image: "",
    title: "Event Not Found",
    description: "The requested event could not be found.",
    tags: [],
    date: "",
    location: "",
    audience: "",
    name: "Event Not Found", // Add 'name' property
  };

  return (
    <PageLayout>
      <EventDetail event={eventItem || defaultEvent} />
    </PageLayout>
  );
}
