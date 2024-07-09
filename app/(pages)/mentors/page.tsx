import PageLayout from "@/app/components/globalcomponents/PageLayout";
import Mentors from "@/app/components/pagecomponents/mentorspage/Mentors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentors | ZIELN",
  keywords: "zieln, event, event listing, students, mentors",
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
      <Mentors />
    </PageLayout>
  );
}
