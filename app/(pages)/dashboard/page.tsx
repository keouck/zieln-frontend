import React from "react";
import PageLayout from "../../components/globalcomponents/PageLayout";

const Home: React.FC = () => {
  return (
    <PageLayout>
      <section className="flex flex-col items-center justify-center min-h-screen p-10 text-center ">
        <h1 className="text-6xl font-bold mb-8">Welcome to ZEILN DASHBOARD</h1>
      </section>
    </PageLayout>
  );
};

export default Home;
