"use client";

import React, { useState } from "react";
import { Camera, Code, Mail, Moon, Sun } from "lucide-react";

const PortfolioOneSheet = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-3xl w-full">
        <div className="mb-8 flex justify-end">
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Camera className="w-12 h-12 mr-4" />
            <h1 className="text-3xl font-bold">My Portfolio</h1>
          </div>
          <p className="mb-6">
            Welcome to my portfolio! I am a full-stack developer with expertise in NextJS,
            React, and Tailwind CSS. Check out some of my latest projects below.
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center">
              <Code className="w-8 h-8 mr-2" />
              <span>Web Development</span>
            </div>
            <div className="flex items-center">
              <Camera className="w-8 h-8 mr-2" />
              <span>Photography</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-8 h-8 mr-2" />
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOneSheet;
