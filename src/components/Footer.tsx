
import Link from "next/link";
import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-4">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-wrap text-center md:text-left">
          {/* Left Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-gray-900 font-bold text-xl mb-3">Hekto</h2>
            <form className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-gray-200 rounded-l-lg px-4 py-2 outline-none text-gray-700"
              />
              <button className="bg-pink-500 text-white px-4 rounded-r-lg hover:bg-pink-600">
                Sign Up
              </button>
            </form>
            <p className="text-gray-600">
              Contact Info:
              <br />
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          {/* Categories Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="text-gray-900 font-bold text-sm mb-3">Categories</h2>
            <ul className="list-none space-y-2">
              <li className="hover:text-pink-500 cursor-pointer">
                Laptops & Computers
              </li>
              <li className="hover:text-pink-500 cursor-pointer">
                Cameras & Photography
              </li>
              <li className="hover:text-pink-500 cursor-pointer">
                Smart Phones & Tablets
              </li>
              <li className="hover:text-pink-500 cursor-pointer">
                Video Games & Consoles
              </li>
              <li className="hover:text-pink-500 cursor-pointer">
                Waterproof Headphones
              </li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-gray-900 font-bold text-sm mb-3">Customer Care</h2>
            <ul className="list-none space-y-2">
              <li className="hover:text-pink-500 cursor-pointer">My Account</li>
              <li className="hover:text-pink-500 cursor-pointer">Discount</li>
              <li className="hover:text-pink-500 cursor-pointer">Returns</li>
              <li className="hover:text-pink-500 cursor-pointer">Orders History</li>
              <li className="hover:text-pink-500 cursor-pointer">Order Tracking</li>
            </ul>
          </div>

          {/* Pages Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-gray-900 font-bold text-sm mb-3">Pages</h2>
            <ul className="list-none space-y-2">
              <li className="hover:text-pink-500 cursor-pointer">Blog</li>
              <li className="hover:text-pink-500 cursor-pointer">Browse the Shop</li>
              <li className="hover:text-pink-500 cursor-pointer">Category</li>
              <li className="hover:text-pink-500 cursor-pointer">Pre-Built Pages</li>
              <li className="hover:text-pink-500 cursor-pointer">
                Visual Composer Elements
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="container mx-auto px-5 py-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            © 2024 Hekto - All Rights Reserved
          </p>
          <div className="flex space-x-3">
            <Link href="#" className="text-gray-600 hover:text-pink-500">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-500">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-500">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-500">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
