
'use client';
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false); // Close the mobile menu when a link is clicked
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-20 h-16">
        {/* Logo */}
        <div className="flex items-center ">
          <h1 className="text-2xl font-bold text-blue-900">Hekto</h1>
        </div>

        {/* Navigation and Search Bar Section */}
        <div className="flex items-center space-x-6 w-full justify-between">
          {/* Desktop Menu Links */}
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li>
              <Link
                href="/"
                className="text-pink-500 hover:text-pink-600 font-medium"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Pages"
                className="hover:text-gray-900 transition duration-200"
                onClick={handleLinkClick}
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/ProductDetail"
                className="hover:text-gray-900 transition duration-200"
                onClick={handleLinkClick}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/Blog"
                className="hover:text-gray-900 transition duration-200"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/ShopList"
                className="hover:text-gray-900 transition duration-200"
                onClick={handleLinkClick}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="hover:text-gray-900 transition duration-200"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar (Desktop) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border bg-white  text-black px-6 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
              aria-label="Search"
            />
            <button
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
              aria-label="Search Button"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l4 4"
                />
              </svg>
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-white text-gray-700 z-10 shadow-md`}
      >
        <li className="border-b">
          <Link
            href="/"
            className="block py-2 px-4 text-pink-500 hover:text-pink-600 font-medium"
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li className="border-b">
          <Link
            href="/Pages"
            className="block py-2 px-4 hover:text-gray-900 transition duration-200"
            onClick={handleLinkClick}
          >
            Pages
          </Link>
        </li>
        <li className="border-b">
          <Link
            href="/ProductDetail"
            className="block py-2 px-4 hover:text-gray-900 transition duration-200"
            onClick={handleLinkClick}
          >
            Products
          </Link>
        </li>
        <li className="border-b">
          <Link
            href="/Blog"
            className="block py-2 px-4 hover:text-gray-900 transition duration-200"
            onClick={handleLinkClick}
          >
            Blog
          </Link>
        </li>
        <li className="border-b">
          <Link
            href="/ShopList"
            className="block py-2 px-4 hover:text-gray-900 transition duration-200"
            onClick={handleLinkClick}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/Contact"
            className="block py-2 px-4 hover:text-gray-900 transition duration-200"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
