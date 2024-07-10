"use client";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import MentorProfile from "@/app/components/pagecomponents/mentorspage/MentorProfile";
import { mentorData } from "@/app/data/mentorsData";
import useFetch from "@/app/hooks/useFetch";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MentorDetailPage() {

  const [mentorDetail, setMentorDetail] = useState<any>(null)

  const { id } = useParams();

  const { data } = useFetch(`/mentors/${id}/?populate=socialLinks,image`, true);

  useEffect(() => {
    if(data !== null) setMentorDetail((data as any).data)
  }, [data])


  return (
    <PageLayout>
      {mentorDetail && <MentorProfile mentor={mentorDetail as any} />}
    </PageLayout>
  );
}
