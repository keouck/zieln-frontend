import PageLayout from "@/app/components/globalcomponents/PageLayout";
import Banner from "@/app/components/pagecomponents/eventspage/Banner";
import EventsList from "@/app/components/pagecomponents/eventspage/EventsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outsmash | Event",
  keywords: "Outsmash, event, event listing, students",
  openGraph: {
    title: "Outsmash",
    description:
      "Our mission at Outsmash is to empower students by providing seamless access to information about extra-curricular and co-curricular activities.",
    images: "/images/og-landing.png",
  },
};

export default function About() {
  return (
    <PageLayout>
      <Banner
        title="Upcoming Events"
        backgroundImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fHww"
        buttonName="+ Post Opportunity"
        buttonLink="/create-event"
      />
      <EventsList />
    </PageLayout>
  );
}
