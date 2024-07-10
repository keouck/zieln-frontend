// faqsData.ts
import { BACKEND_URI } from "@/constant";
import { get } from "@/utils/api";
export const fetchFaqsData = async () => {
  try {
    const data = await get("/faqs");

    // Transform the data to the desired format
    const formattedData =
      data?.data?.map((item: any) => ({
        question: item.attributes.question || "",
        answer: item.attributes.answer || "",
      })) || [];

    return formattedData;
  } catch (error) {
    console.error("Failed to fetch FAQs data:", error);
    throw error;
  }
};
