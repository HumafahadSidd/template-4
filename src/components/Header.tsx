// import React from 'react'
// import { CiSearch } from "react-icons/ci";

// export default function Header() {
//   return (
//     <div className='flex bg-white max-w-screen max-auto'>
//       <div className='font-extrabold py-10 text-[#0D0E43] text-3xl'>Hekto </div>
//       <span>
//         <ul className='flex  py-10 items-center'>
//             <li className='text-pink-700'>Home v</li>
//             <li>Pages</li>
//             <li>Products</li>
//             <li>Blog</li>
//             <li>Shop</li>
//             <li>Contact</li>
//             <li className='flex bg-pink-200 '><input type="text"  /><CiSearch className='px-5 py-4 text-black' /></li>
//         </ul>
//          </span> 
//     </div>
//   )
// }
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-blue-900">Hekto</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <Link
              href="#"
              className="text-pink-500 hover:text-pink-600 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-gray-900 transition duration-200"
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-gray-900 transition duration-200"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-gray-900 transition duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-gray-900 transition duration-200"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-gray-900 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300  px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />
          <button
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
            aria-label="Search"
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
      </div>
    </nav>
  );
};

export default Header;
