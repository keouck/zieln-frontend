"use client";
import Loader from "@/app/components/globalcomponents/Loader";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import EventDetail from "@/app/components/pagecomponents/eventspage/EventDetail";
import { eventsData } from "@/app/data/eventsData";
import useFetch from "@/app/hooks/useFetch";
import { useParams } from "next/navigation";

export default function EventDetailPage() {
  const { event } = useParams();
  const eventId = Array.isArray(event) ? event[0] : event;

  const {
    data: eventDetail,
    loading: eventLoading,
    error: eventError,
  } = useFetch(`/api/event/${eventId}`, {
    method: "PUT",
  });

  console.log(eventDetail);

  if (eventLoading) {
    return (
      <PageLayout>
        <Loader />
      </PageLayout>
    );
  }

  if (eventError) {
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
      {!eventLoading && <EventDetail event={eventDetail?.data?.attributes} />}
    </PageLayout>
  );
}
