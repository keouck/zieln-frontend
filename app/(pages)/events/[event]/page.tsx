"use client";
import Loader from "@/app/components/globalcomponents/Loader";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import EventDetail from "@/app/components/pagecomponents/eventspage/EventDetail";
import useFetch from "@/app/hooks/useFetch";
import { useParams } from "next/navigation";

interface EventDetailType {
  data: {
    attributes: any; // Replace 'any' with the actual type of attributes
  };
}

export default function EventDetailPage() {
  const { event } = useParams();
  const eventId = Array.isArray(event) ? event[0] : event;

  const {
    data: eventDetail,
    loading: eventLoading,
    error: eventError,
  } = useFetch<EventDetailType>(`/events/${eventId}?populate=*`, true);

  console.log(eventDetail);

  if (eventLoading) {
    return (
      <PageLayout>
        <Loader />
      </PageLayout>
    );
  }

  if (eventError || !eventDetail) {
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
      {!eventLoading && eventDetail.data && (
        <EventDetail event={eventDetail.data.attributes} />
      )}
    </PageLayout>
  );
}
