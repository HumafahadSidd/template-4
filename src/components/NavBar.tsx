// // import { LuShoppingCart } from "react-icons/lu";
// // import { CiHeart } from "react-icons/ci";
// // import { FaRegEnvelope } from "react-icons/fa";
// // import { RxPerson } from "react-icons/rx";
// // import { MdOutlineWifiCalling3 } from "react-icons/md";
// //  import React from 'react'
// // import Link from "next/link";

// //  export default function NavBar() {
// // return (
// //     <div>
      
 
// // <header className=" body-font bg-violet-800 text-white ">
// //   <div className="container mx-auto flex flex-wrap p-2 ml-10 gap-20 flex-col md:flex-row items-center">
    
// //     < FaRegEnvelope />
// //     <Link href={"/Email"} className="flex title-font font-medium items-center text-blue-600 mb-4 md:mb-0">
// //        <span className="ml-[40px] text-semibold gap-2 text-white">mhhasanul@gmail.com</span>
// //     </Link>
// //     <span className="ml-6 gap-2 text-md flex text-white">< MdOutlineWifiCalling3/>123456789</span>
// //     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-5">
// //       <select className="mr-5 hover:text-gray-900 bg-violet-800">
// //       <option value="lang">English</option>
// //       <option value="lang">Chinease</option>
// //       <option value="lang">French</option>
// //       <option value="lang">Arabic</option>
// //       </select>
// //       <select className="mr-5 hover:text-gray-900 bg-violet-800">
// //       <option value="lang">USD</option>
// //       <option value="lang">EUR</option>
// //       <option value="lang">Yen</option>
// //       <option value="lang">Riyal</option>
// //       </select>

    
// //       <Link href={"/Login"}className="mr-5 hover:text-gray-900"><div className="flex gap-2 px-3 py-2">Login v <RxPerson className=" size-5" /></div></Link>
// //       <Link href={"/WishList"}className="mr-5 hover:text-gray-900"><div className="flex gap-2 px-3 py-2">Wish List <CiHeart className="size-5" /></div></Link>
// //       <Link href={"/"}className="mr-5 hover:text-gray-900 justify-end"><LuShoppingCart className=" size- 5"/></Link>
// //     </nav>
    
// //   </div>
// // </header>
// // </div>

// //  )
// // }
// import { LuShoppingCart } from "react-icons/lu";
// import { CiHeart } from "react-icons/ci";
// import { FaRegEnvelope } from "react-icons/fa";
// import { RxPerson } from "react-icons/rx";
// import { MdOutlineWifiCalling3 } from "react-icons/md";
// import React from "react";
// import Link from "next/link";

// export default function NavBar() {
//   return (
//     <header className="body-font bg-violet-800 text-white">
//       <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
//         {/* Left Section */}
//         <div className="flex items-center space-x-6">
//           <FaRegEnvelope />
//           <Link href="/Email" passHref>
//             <span className="text-white cursor-pointer">mhhasanul@gmail.com</span>
//           </Link>
//           <span className="flex items-center space-x-2">
//             <MdOutlineWifiCalling3 />
//             <span>123456789</span>
//           </span>
//         </div>

//         {/* Center Section */}
//         <div className="hidden md:flex items-center space-x-6">
//           <select className="bg-violet-800 border-none text-white focus:ring-2 focus:ring-white rounded">
//             <option value="lang">English</option>
//             <option value="lang">Chinese</option>
//             <option value="lang">French</option>
//             <option value="lang">Arabic</option>
//           </select>
//           <select className="bg-violet-800 border-none text-white focus:ring-2 focus:ring-white rounded">
//             <option value="currency">USD</option>
//             <option value="currency">EUR</option>
//             <option value="currency">Yen</option>
//             <option value="currency">Riyal</option>
//           </select>
//         </div>

//         {/* Right Section */}
//         <nav className="flex items-center space-x-6">
//           <Link href="/Login" passHref>
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
//               <span>Login</span>
//               <RxPerson className="text-xl" />
//             </div>
//           </Link>
//           <Link href="/WishList" passHref>
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
//               <span>Wish List</span>
//               <CiHeart className="text-xl" />
//             </div>
//           </Link>
//           <Link href="/" passHref>
//             <div className="cursor-pointer hover:text-gray-300">
//               <LuShoppingCart className="text-xl" />
//             </div>
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }
"use client"
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
          <a href="#" >
            <span className="text-white cursor-pointer">mhhasanul@gmail.com</span>
          </a>
          <span className="flex items-center space-x-2">
            <MdOutlineWifiCalling3 />
            <span>123456789</span>
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Center Section */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex items-center space-x-6`}
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
          } md:flex items-center space-x-6`}
        >
          <Link href="/Login" >
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
              <span>Login</span>
              <RxPerson className="text-xl" />
            </div>
          </Link>
          <Link href="/WishList" >
            <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
              <span>Wish List</span>
              <CiHeart className="text-xl" />
            </div>
          </Link>
          <Link href="/Cart" >
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
