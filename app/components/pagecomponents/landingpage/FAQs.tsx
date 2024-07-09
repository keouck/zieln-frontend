"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Collapse } from "antd";
import { fetchFaqsData } from "@/app/data/faqsData";

const { Panel } = Collapse;

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [faqsData, setFaqsData] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadFaqsData = useCallback(async () => {
    try {
      const data = await fetchFaqsData();
      setFaqsData(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFaqsData();
  }, [loadFaqsData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

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
          {faqsData.map((faq, index) => (
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
      <div className="lg:w-1/3">Loading...</div>
    </div>
  </section>
);

const Error: React.FC<{ message: string }> = ({ message }) => (
  <section className="component-px component-py">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div className="lg:w-1/3">Error: {message}</div>
    </div>
  </section>
);

export default FAQs;
