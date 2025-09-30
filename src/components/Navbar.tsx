import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold">Brand</div>
          <div className="hidden md:flex space-x-4">
            <a href="/#home" className="hover:text-blue-500 transition">Home</a>
            <a href="/#features" className="hover:text-blue-500 transition">Features</a>
            <a href="/#pricing" className="hover:text-blue-500 transition">Pricing</a>
            <a href="/#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-4 space-y-1 shadow-md">
          <a href="/#home" className="block px-3 py-2 rounded hover:bg-gray-100">Home</a>
          <a href="/#features" className="block px-3 py-2 rounded hover:bg-gray-100">Features</a>
          <a href="/#pricing" className="block px-3 py-2 rounded hover:bg-gray-100">Pricing</a>
          <a href="/#contact" className="block px-3 py-2 rounded hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
