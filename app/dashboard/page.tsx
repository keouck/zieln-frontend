import React from "react";
import Header from "../components/globalcomponents/Header";
import Footer from "../components/globalcomponents/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-8 text-tertiary">
          Welcome to <span className="text-primary">ZEILN DASHBOARD</span>
        </h1>
      </main>
      <Footer />
    </>
  );
};

export default Home;
