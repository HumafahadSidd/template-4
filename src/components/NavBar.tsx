
"use client";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="body-font bg-violet-800 text-white">
      <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <FaRegEnvelope />
            <a href="#">
              <span className="text-white cursor-pointer">mhhasanul@gmail.com</span>
            </a>
            <span className="flex items-center space-x-2">
              <MdOutlineWifiCalling3 />
              <span>123456789</span>
            </span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>

          {/* Center Section */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center space-x-6 mt-4 md:mt-0 transition-all duration-300`}
          >
            <select className="bg-violet-800 border-none text-white focus:ring-2 focus:ring-white rounded">
              <option value="lang">English</option>
              <option value="lang">Chinese</option>
              <option value="lang">French</option>
              <option value="lang">Arabic</option>
            </select>
            <select className="bg-violet-800 border-none text-white focus:ring-2 focus:ring-white rounded">
              <option value="currency">USD</option>
              <option value="currency">EUR</option>
              <option value="currency">Yen</option>
              <option value="currency">Riyal</option>
            </select>
          </div>

          {/* Right Section */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center space-x-6 mt-4 md:mt-0 transition-all duration-300`}
          >
            <Link href="/Login">
              <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
                <span>Login</span>
                <RxPerson className="text-xl" />
              </div>
            </Link>
            <Link href="/WishList">
              <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
                <span>Wish List</span>
                <CiHeart className="text-xl" />
              </div>
            </Link>
            <Link href="/ShoppingCart">
              <div className="cursor-pointer hover:text-gray-300">
                <LuShoppingCart className="text-xl" />
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
