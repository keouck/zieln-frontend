// components/FAQs.tsx
"use client";
import React from "react";
import { Collapse } from "antd";
import { faqsData } from "@/app/data/faqsData";

const { Panel } = Collapse;

const FAQs = () => {
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
              header={<h2 className="text-lg lg:text-xl">{faq?.question}</h2>}
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

export default FAQs;
