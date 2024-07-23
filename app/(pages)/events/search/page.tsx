import PageLayout from "@/app/components/globalcomponents/PageLayout";
import Banner from "@/app/components/pagecomponents/eventspage/Banner";
import SearchResultsList from "@/app/components/pagecomponents/eventspage/SearchResultsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outsmash | Search Results",
  keywords: "Outsmash, search, event search, students",
  openGraph: {
    title: "Outsmash",
    description: "Search for events and opportunities at Outsmash.",
    images: "/images/og-landing.png",
  },
};

export default function Search() {
  return (
    <PageLayout>
      <Banner
        title="Upcoming Events"
        backgroundImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VhcmNofGVufDB8fDB8fHww"
        buttonName="+ Add Opportunity"
        buttonLink="/create-event"
      />
      <SearchResultsList />
    </PageLayout>
  );
}
