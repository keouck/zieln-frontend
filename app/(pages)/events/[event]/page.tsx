"use client";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import EventDetail from "@/app/components/pagecomponents/eventspage/EventDetail";
import { eventsData } from "@/app/data/eventsData";
import { useParams } from "next/navigation";

export default function EventDetailPage() {
  const { event } = useParams();
  const eventId = Array.isArray(event) ? event[0] : event;
  const eventItem = eventsData.find((eve) => eve.id === parseInt(eventId));

  if (!eventItem) {
    return (
      <PageLayout>
        <section className="component-px component-py">
          <div>Event not found.</div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <EventDetail event={eventItem} />
    </PageLayout>
  );
}
