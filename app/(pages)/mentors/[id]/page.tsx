"use client";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import MentorProfile from "@/app/components/pagecomponents/mentorspage/MentorProfile";
import { mentorsData } from "@/app/data/mentorsData";
import { useParams } from "next/navigation";

export default function MentorDetailPage() {
  const { id } = useParams();
  const mentor = mentorsData.find((mtor) => mtor?.id === Number(id));
  return (
    <PageLayout>
      {mentor ? (
        <MentorProfile mentor={mentor} />
      ) : (
        <div>No mentor data available.</div>
      )}
    </PageLayout>
  );
  
}
