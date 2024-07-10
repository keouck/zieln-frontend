import PageLayout from "@/app/components/globalcomponents/PageLayout";
import FoundersMessage from "@/app/components/pagecomponents/aboutpage/FoundersMessage";
import Introduction from "@/app/components/pagecomponents/aboutpage/Introduction";
import NameMeaning from "@/app/components/pagecomponents/aboutpage/NameMeaning";
import Partners from "@/app/components/pagecomponents/aboutpage/Partners";
import TeamsMission from "@/app/components/pagecomponents/aboutpage/TeamsMission";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outsmash | About",
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
      <Introduction />
      <FoundersMessage />
      <NameMeaning />
      <TeamsMission />
      <Partners />
    </PageLayout>
  );
}
