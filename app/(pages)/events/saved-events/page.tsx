import PageLayout from "@/app/components/globalcomponents/PageLayout";
import Banner from "@/app/components/pagecomponents/eventspage/Banner";
import EventsList from "@/app/components/pagecomponents/eventspage/EventsList";
import SavedEventsList from "@/app/components/pagecomponents/eventspage/SavedEventsList";
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
      <SavedEventsList />
    </PageLayout>
  );
}
