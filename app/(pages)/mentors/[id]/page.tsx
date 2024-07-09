"use client";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import MentorProfile from "@/app/components/pagecomponents/mentorspage/MentorProfile";
import { mentorData } from "@/app/data/mentorsData";
import { useParams } from "next/navigation";

export default function MentorDetailPage() {
  const { id } = useParams();
  const mentor = mentorData.find((mtor) => mtor?.id === Number(id));
  return (
    <PageLayout>
      <MentorProfile mentor={mentor} />
    </PageLayout>
  );
}
