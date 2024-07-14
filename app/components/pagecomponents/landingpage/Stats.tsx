"use client";
import useFetch from "@/app/hooks/useFetch";
import React from "react";
import Loader from "../../globalcomponents/Loader";

const statsData = [
  { value: "260+", label: "Active Users" },
  { value: "975+", label: "Opportunities" },
  { value: "724+", label: "Brands Trust Us" },
  { value: "89+", label: "Organizations" },
];

const StatCard: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => (
  <div className="block text-center lg:text-left">
    <div className="font-manrope font-semibold text-center text-3xl text-primary mb-3">
      {value}
    </div>
    <span className="text-gray-900 text-xl">{label}</span>
  </div>
);

export default function Stats() {
  const {
    data: stats,
    loading,
    error,
  } = useFetch<any>("/stats?populate=*", true);

  console.log(stats);

  return (
    !loading && (
      <section className="bg-gray-100 my-8 lg:my-16 component-px">
        <div className="component-py rounded-2xl flex flex-col items-center gap-16 ">
          <div className="text-center lg:max-w-xl">
            <h2 className="component-heading">
              {stats?.data?.[0].attributes?.title}
            </h2>
            <p className="lg:text-lg mt-2">
              {stats?.data?.[0].attributes?.description}
            </p>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between">
              {stats?.data?.[0].attributes?.statistics?.map((stat: any) => (
                <StatCard
                  key={stat?.id}
                  value={stat?.number}
                  label={stat?.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
}
