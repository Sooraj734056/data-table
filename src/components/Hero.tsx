import React from "react";
import heroImage from "../assets/hero.jpg";

const Hero: React.FC = () => (
  <section className="relative bg-gray-100">
    <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Build fast, responsive, and modern web applications easily.
        </p>
        <a
          href="#features"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
        >
          Explore Features
        </a>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Hero banner"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Hero;
