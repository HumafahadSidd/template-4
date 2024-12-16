"use client"; 
import React from "react";
import Image from "next/image";
const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      {/* Top Section */}
      <div className="w-full h-24 bg-gray-100 flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-blue-900">404 Not Found</h1>
        <p className="text-sm text-gray-600">
          Home / Pages / <span className="text-pink-500">404 Not Found</span>
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <Image
          src="Group 123.png"
          alt="404 Illustration"
          height={200}
          width={200}        />
        <p className="text-gray-600 mt-6 text-lg">
          <strong>Oops! The page you requested was not found!</strong>
        </p>

        {/* Back to Home Button */}
        <button
          className="mt-8 px-6 py-3 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
          onClick={() => window.location.href = "/"}
        >
          Back To Home
        </button>
      </div>

      {/* Footer Logos */}
      <div className="w-full flex justify-center mt-12 space-x-6 text-gray-400">
        <span className="text-sm">radiant LIVE</span>
        <span className="text-sm">HAND CRAFTED</span>
        <span className="text-sm">Mestonix</span>
        <span className="text-sm">Sunshine</span>
        <span className="text-sm">Future</span>
      </div>
    </div>
  );
};

export default NotFoundPage;
