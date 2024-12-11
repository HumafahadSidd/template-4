import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DiscountItem: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 font-sans">
      <h1 className="text-3xl font-bold text-blue-900">Discount Item</h1>
      <div className="flex space-x-4 mb-4">
        <Link href="#" className="text-pink-500">Wood Chair</Link>
        <span>&bull;</span>
        <Link href="#" className="text-blue-900">Plastic Chair</Link>
        <span>&bull;</span>
        <Link href="#" className="text-blue-900">Sofa Collection</Link>
      </div>
      <h2 className="text-2xl font-bold text-blue-900">20% Discount Of All Products</h2>
      <h3 className="text-xl font-bold text-pink-500 mt-2">Eams Sofa Compact</h3>
      <p className="text-gray-600 text-center max-w-md my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
      </p>
      <ul className="list-none text-blue-900 mb-4">
        <li>&#10004; Material expose like metals</li>
        <li>&#10004; Simple neutral colours.</li>
        <li>&#10004; Clear lines and geometric figures</li>
        <li>&#10004; Material expose like metals</li>
      </ul>
      <button className="bg-pink-500 text-white py-2 px-4 rounded">
        Shop Now
      </button>
      <div className="mt-4">
        <Image src={"/Group 154(1).png"} alt={"Eams Sofa Compact"}  width={288}  height={500}/>
      </div>
    </div>
  );
};

export default DiscountItem;
