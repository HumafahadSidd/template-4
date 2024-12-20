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
          src="/Group 123.png"
          alt="404 Illustration"
          height={600}
          width={800}        />
        <p className="text-gray-600 mt-6 text-lg">
           <strong>Oops! The page you requested was not found!</strong>
        </p>

        {/* Back to Home Button */}
        <button
          className="mt-8 px-6 py-3 bg-pink-600 text-white hover:bg-pink-700 transition"
          onClick={() => window.location.href = "/"}
        >
          Back To Home
        </button>
      </div>
<div>
  <Image src={"/image 1174.png"} alt={"banner"} height={300} width={1200} />
</div>
     
    </div>
  );
};

export default NotFoundPage;
