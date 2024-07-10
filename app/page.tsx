import React from "react";
import PageLayout from "./components/globalcomponents/PageLayout";
import { Metadata } from "next";
import HeroSection from "./components/pagecomponents/landingpage/HeroSection";
import Partners from "./components/pagecomponents/landingpage/Partners";
import Contact from "./components/pagecomponents/landingpage/Contact";
import LatestEvents from "./components/pagecomponents/landingpage/LatestEvents";
import FAQs from "./components/pagecomponents/landingpage/FAQs";
import Testimonials from "./components/pagecomponents/landingpage/Testimonials";
import Blogs from "./components/pagecomponents/landingpage/Blogs";

export const metadata: Metadata = {
  title: "ZIELN",
  keywords: "zieln, event, event listing, students",
  openGraph: {
    title: "Zieln",
    description:
      "Our mission at Zieln is to empower students by providing seamless access to information about extra-curricular and co-curricular activities.",
    images: "/images/og-landing.png",
  },
};

const Home: React.FC = () => {
  return (
    <PageLayout>
      <HeroSection />
      <Partners />
      <LatestEvents />
      <Testimonials />
      <Blogs />
      <FAQs />
      <Contact />
    </PageLayout>
  );
};

export default Home;
