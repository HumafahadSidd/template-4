
"use client"; // Marks this as a Client Component

import React from "react";
import Image from "next/image";
const SingleBlog = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      <div className="w-full bg-gray-100 py-6 text-center">
        <h1 className="text-2xl font-bold text-blue-900">Single Blog</h1>
        <p className="text-gray-500">
          Home / Pages / <span className="text-pink-500">Single Blog</span>
        </p>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 px-6">
        {/* Blog Article */}
        <div className="lg:col-span-2">
          {/* Blog Image */}
          <Image
            src="Blog1.png" 
            alt="Blog Main Image"
            height={300} width={400}
          />

          {/* Blog Meta Info */}
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <span className="mr-4">📅 April 10, 2024</span>
            <span className="mr-4">🧑 Author: John Doe</span>
            <span>💬 Comments: 3</span>
          </div>

          {/* Blog Title */}
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Mauris at orci non vulputate diam tincidunt nec.
          </h2>

          {/* Blog Content */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            scelerisque dolor non tellus pellentesque, sit amet scelerisque ex
            ultrices. Proin blandit, justo in consequat feugiat, ex ante
            scelerisque massa, sed consequat metus lectus at augue.
          </p>

          {/* Quoted Text */}
          <div className="border-l-4 border-pink-500 pl-4 italic text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur
            blandit tempor mi, vel consectetur risus tincidunt non.
          </div>

          {/* More Blog Content */}
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus
            vehicula lacus nisl, ut fermentum arcu volutpat eget. Morbi tempor
            purus non est fringilla venenatis.
          </p>

          {/* Video & Images */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <Image
                src=""
                alt="Video Thumbnail"
                height={300} width={400}  
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
                ▶
              </button>
            </div>
            <Image
              src="blog-image-2.jpg"
              alt="Secondary Image"
              height={300} width={400}
            />
          </div>

          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vehicula lacus nisl, ut fermentum arcu volutpat eget.
          </p>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Fashion (10)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Lifestyle (5)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Travel (7)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Others (3)
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="#" className="hover:text-pink-500">
                  📍 Latest Trends in Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  🌍 Top Travel Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  🏡 Home Decor Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Sale Product */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Sale Products</h3>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="product1.jpg"
                alt="Product"
                height={300} width={400}
              />
              <Image
                src="product2.jpg"
                alt="Product"
                height={300} width={400}
              />
            </div>
          </div>

          {/* Follow Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                👍 Facebook
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                🐦 Twitter
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                📷 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Products */}
      <div className="container mx-auto py-10 px-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <Image
              src="product3.jpg"
              alt="Product 3"
              height={300} width={400}
            />
            <h4 className="font-semibold text-gray-800">Queen Seat</h4>
            <p className="text-pink-500">$399</p>
          </div>
          {/* Repeat for other products */}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
