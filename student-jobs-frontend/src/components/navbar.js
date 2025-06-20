// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ResearchHub</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="/student" className="hover:text-blue-400">Students</a>
        <a href="/employer" className="hover:text-blue-400">Researchers</a>
      </div>
    </nav>
  );
};

export default Navbar;
