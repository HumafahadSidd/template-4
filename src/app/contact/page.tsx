
"use client";

import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Top Section */}
      <div className="w-full h-24 bg-gray-100 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-bold text-blue-900">Contact Us</h1>
        <p className="text-sm text-gray-600">
          Home / Pages / <span className="text-pink-500">Contact Us</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-900 mb-4">
            Information About us
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            efficitur metus at justo scelerisque rhoncus. Morbi tristique quam
            ac mauris sagittis convallis. Aenean lacus libero vitae lobortis.
          </p>
          {/* Dots Section */}
          <div className="flex space-x-4 mb-10">
            <div className="h-4 w-4 rounded-full bg-pink-500"></div>
            <div className="h-4 w-4 rounded-full bg-blue-500"></div>
            <div className="h-4 w-4 rounded-full bg-purple-500"></div>
          </div>

          {/* Contact Way */}
          <h2 className="text-2xl font-extrabold text-blue-900 mb-4">
            Contact Way
          </h2>
          <ul className="text-gray-600 space-y-4">
            <li>
              <span className="text-blue-500 font-semibold">✉</span> The 27th of
              March, 99 <br />
              E-Mail: example@mail.com
            </li>
            <li>
              <span className="text-pink-500 font-semibold">📞</span> Support
              Phone <br /> Available 24/7
            </li>
            <li>
              <span className="text-yellow-500 font-semibold">📍</span> 20
              Orchard, CA <br />
              Greenwich, United Kingdom
            </li>
            <li>
              <span className="text-green-500 font-semibold">🚚</span> Free
              standard shipping <br />
              available
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-extrabold text-blue-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            efficitur metus at justo scelerisque rhoncus.
          </p>

          {/* Form Section */}
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full p-3 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              rows={5}
              placeholder="Type Your Message"
              className="w-full p-3 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition duration-200"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex justify-center my-10">
       <Image src={"/Group 124.png"} alt={"peoples"} height={300} width={400}/>

      </div>
    </div>
  );
};

export default Contact;
