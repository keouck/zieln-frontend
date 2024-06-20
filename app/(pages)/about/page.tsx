import PageLayout from "@/app/components/globalcomponents/PageLayout";
import FoundersMessage from "@/app/components/pagecomponents/aboutpage/FoundersMessage";
import Introduction from "@/app/components/pagecomponents/aboutpage/Introduction";
import NameMeaning from "@/app/components/pagecomponents/aboutpage/NameMeaning";
import Partners from "@/app/components/pagecomponents/aboutpage/Partners";
import TeamsMission from "@/app/components/pagecomponents/aboutpage/TeamsMission";

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
