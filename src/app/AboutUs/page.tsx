"use client"; // Converts this file into a Client Component

import React from "react";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Top Section */}
      <div className="w-full h-24 bg-gray-100 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-bold text-blue-900">About Us</h1>
        <p className="text-sm text-gray-600">
          Home / Pages / <span className="text-pink-500">About Us</span>
        </p>
      </div>

      {/* Main Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-6">
        {/* Left Image Section */}
        <div className="flex justify-center">
          <Image
            src="business-history.png" // Replace with your image path
            alt="Our Business History"
            height={300}
            width={300}
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            efficitur metus at justo scelerisque rhoncus. Vivamus id mattis erat
            et vitae sagittis auctor blandit. Aenean lacus libero vitae lobortis
            quam.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="font-semibold text-blue-900 mb-2">🚚 Free Delivery</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              posuere gravida.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="font-semibold text-blue-900 mb-2">
              💯 100% Cash Back
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              posuere gravida.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="font-semibold text-blue-900 mb-2">
              ✅ Quality Product
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              posuere gravida.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="p-6 shadow-md rounded-lg bg-white">
            <h3 className="font-semibold text-blue-900 mb-2">
              📞 24/7 Support
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              posuere gravida.
            </p>
          </div>
        </div>
      </div>

      {/* Client Testimonial Section */}
      <div className="container mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">Our Client Say!</h2>
        <div className="flex justify-center mb-4">
          <Image
            src="client-photo.jpg" // Replace with actual client image
            alt="Client Image"
            height={48}
            width={48}
          />
          <Image
            src="client-photo2.jpg"
            alt="Client Image"
    height={48}
    width={48}
          />
          <Image
            src="client-photo3.jpg"
            alt="Client Image"
            height={48}
            width={48}
          />
        </div>
        <p className="font-semibold text-gray-800 mb-2">Selina Gomez</p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet
          diam quam. Maecenas ultricies dolor adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
