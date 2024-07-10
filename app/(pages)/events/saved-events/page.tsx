import PageLayout from "@/app/components/globalcomponents/PageLayout";
import SavedEventsList from "@/app/components/pagecomponents/eventspage/SavedEventsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZIELN | Event",
  keywords: "zieln, event, event listing, students",
  openGraph: {
    title: "Zieln",
    description:
      "Our mission at Zieln is to empower students by providing seamless access to information about extra-curricular and co-curricular activities.",
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
