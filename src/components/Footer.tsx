import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-10">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="mb-4">© 2025 Brand. All rights reserved.</p>
      <div className="flex justify-center space-x-4 text-2xl">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          {FaFacebookF({})}
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          {FaTwitter({})}
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          {FaInstagram({})}
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
