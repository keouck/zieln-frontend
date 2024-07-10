"use client";
import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import useFetch from "@/app/hooks/useFetch"; // Assuming this is the path to your useFetch hook
import Loader from "../../globalcomponents/Loader";

const { Panel } = Collapse;

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const { data, loading, error } = useFetch<FAQ[]>("/faqs", true);

  if (loading) {
    return <Loading />;
  }

  if (error) return;

  // Transform the data to the desired format
  const faqsData =
    data?.data?.map((item: any) => ({
      question: item.attributes.question || "",
      answer: item.attributes.answer || "",
    })) || [];

  return (
    <section className="component-px component-py">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="lg:w-1/3">
          <div className="">
            <h1 className="component-heading">Frequently asked questions</h1>
            <p className="mt-2 text-gray-600">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>
        <Collapse
          accordion
          bordered={false}
          className="bg-transparent w-full"
          style={{ fontFamily: "revert" }}
        >
          {faqsData &&
            faqsData.map((faq, index) => (
              <Panel
                header={<h2 className="text-lg lg:text-xl">{faq.question}</h2>}
                className="py-2"
                key={index}
              >
                <p className="lg:text-lg">{faq.answer}</p>
              </Panel>
            ))}
        </Collapse>
      </div>
    </section>
  );
};

const Loading: React.FC = () => (
  <section className="component-px component-py">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div className="lg:w-1/3">
        <Loader />
      </div>
    </div>
  </section>
);

export default FAQs;
