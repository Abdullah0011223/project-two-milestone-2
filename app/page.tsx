import React from "react";

const Home: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Hi, I&apos;m Abdullah <br /> A Passionate Web Developer {/* Escaped apostrophe */}
        </h1>
        <p className="text-xl mb-8">
          Creating amazing websites and web applications with React, Node.js, and more.
        </p>
        <a
          href="/projects"
          className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 rounded-full transition duration-300"
        >
          See My Work
        </a>
      </div>
    </section>
  );
};

export default Home;

