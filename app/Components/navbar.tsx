import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-bold text-2xl">My Portfolio</div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link
              href="/"
              className="transition duration-300 hover:text-indigo-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition duration-300 hover:text-indigo-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="transition duration-300 hover:text-indigo-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="transition duration-300 hover:text-indigo-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
