// faqsData.ts
import { BACKEND_URI } from "../../constant.js";
export const fetchFaqsData = async () => {
  try {
    const response = await fetch(`${BACKEND_URI}/api/faqs`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

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
