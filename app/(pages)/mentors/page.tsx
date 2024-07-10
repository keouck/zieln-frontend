import PageLayout from "@/app/components/globalcomponents/PageLayout";
import Mentors from "@/app/components/pagecomponents/mentorspage/Mentors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentors | Outsmash",
  keywords: "Outsmash, event, event listing, students, mentors",
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
      <Mentors />
    </PageLayout>
  );
}
