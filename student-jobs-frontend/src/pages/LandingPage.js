// src/pages/LandingPage.js
// src/pages/LandingPage.js
import React from 'react';
import Navbar from '../components/navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Connecting Students with Research Opportunities</h2>
        <p className="text-gray-400 mb-8 max-w-2xl">Find freelance, remote-based research work and thesis assistance. Whether you're offering help or looking for help, this platform is for you.</p>
        <div className="space-x-4">
          <a href="/student" className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-500">I’m a Student</a>
          <a href="/employer" className="px-6 py-3 bg-green-600 rounded hover:bg-green-500">I Need Help</a>
        </div>
      </div>

      <div className="bg-gray-800 py-12 px-6">
        <h3 className="text-2xl font-semibold mb-6 text-center">Why Use ResearchHub?</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <div>
            <h4 className="text-lg font-bold mb-2">Remote Access</h4>
            <p className="text-gray-400">Work or hire from anywhere. All interactions are online.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Student Friendly</h4>
            <p className="text-gray-400">Affordable opportunities tailored to college students.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Verified Researchers</h4>
            <p className="text-gray-400">Only approved and rated researchers can post work.</p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-950 text-gray-500 text-center py-6 mt-10">
        &copy; {new Date().getFullYear()} ResearchHub. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;

