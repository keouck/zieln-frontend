import React from "react";
import Header from "./_components/globalcomponents/Header";
import Footer from "./_components/globalcomponents/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-10 text-center bg-gray-900 text-white">
        <h1 className="text-6xl font-bold mb-8">
          Welcome to <span className="text-primary">ZEILN</span>
        </h1>
      </main>
      <Footer />
    </>
  );
};

export default Home;
