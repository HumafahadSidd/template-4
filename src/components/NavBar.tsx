import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { MdOutlineWifiCalling3 } from "react-icons/md";
 import React from 'react'
import Link from "next/link";

 export default function NavBar() {
return (
    <div>
      
 
<header className=" body-font bg-violet-800 text-white ">
  <div className="container mx-auto flex flex-wrap p-2 ml-10 gap-20 flex-col md:flex-row items-center">
    
    < FaRegEnvelope />
    <Link href={"/Email"} className="flex title-font font-medium items-center text-blue-600 mb-4 md:mb-0">
       <span className="ml-[40px] text-semibold gap-2 text-white">mhhasanul@gmail.com</span>
    </Link>
    <span className="ml-6 gap-2 text-md flex text-white">< MdOutlineWifiCalling3/>123456789</span>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-5">
      <select className="mr-5 hover:text-gray-900 bg-violet-800">
      <option value="lang">English</option>
      <option value="lang">Chinease</option>
      <option value="lang">French</option>
      <option value="lang">Arabic</option>
      </select>
      <select className="mr-5 hover:text-gray-900 bg-violet-800">
      <option value="lang">USD</option>
      <option value="lang">EUR</option>
      <option value="lang">Yen</option>
      <option value="lang">Riyal</option>
      </select>

      
      <Link href={"/"}className="mr-5 hover:text-gray-900"><div className="flex gap-2 px-3 py-2">Login v <RxPerson className=" size-5" /></div></Link>
      <Link href={"/"}className="mr-5 hover:text-gray-900"><div className="flex gap-2 px-3 py-2">Wish List <CiHeart className="size-5" /></div></Link>
      <Link href={"/"}className="mr-5 hover:text-gray-900 justify-end"><LuShoppingCart className=" size- 5"/></Link>
    </nav>
    
  </div>
</header>
</div>

 )
}