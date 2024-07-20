import React from "react";

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
    <div className="font-manrope font-medium text-3xl text-light mb-3 flex justify-center">
      {value}
    </div>
    <span className="">{label}</span>
  </div>
);

export default function Stats() {
  return (
    <section className="bg-primaryDark my-8 lg:my-16 component-px text-light">
      <div className="component-py rounded-2xl flex flex-col items-center gap-16 ">
        <div className="text-center lg:max-w-xl">
          <h2 className="font-semibold text-2xl md:text-4xl md:leading-tight">Our Stats</h2>
          <p className="lg:text-lg mt-2">
            Empowering students and professionals with exceptional educational
            and career opportunities.
          </p>
        </div>
        <div className="w-full lg:w-4/5">
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between">
            {statsData.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
