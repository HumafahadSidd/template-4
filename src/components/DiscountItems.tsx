// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const DiscountItem: React.FC = () => {
//   return (
//       <div className="flex flex-col mr-4 px-8 font-sans">
//       <h1 className="text-3xl font-bold text-blue-900 text-center">Discount Item</h1>
//         <div className="flex space-x-4 mb-4 justify-center">
//         <Link href="#" className="text-pink-500">Wood Chair</Link>
//         <span>&bull;</span>
//         <Link href="#" className="text-blue-900">Plastic Chair</Link>
//         <span>&bull;</span>
//         <Link href="#" className="text-blue-900">Sofa Collection</Link>
//       </div>
      
//       <div className='flex p-8 ml-4'>  
//         <div>   
//       <h2 className="text-2xl font-bold text-blue-900">20% Discount Of All Products</h2>
      
//       <h3 className="text-xl font-bold text-pink-500 mt-2">Eams Sofa Compact</h3>
//       <p className="text-gray-600 text-center max-w-md my-4">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
//       </p>
//       <ul className="list-none text-blue-900 mb-4">
//         <li>&#10004; Material expose like metals</li>
//         <li>&#10004; Simple neutral colours.</li>
//         <li>&#10004; Clear lines and geometric figures</li>
//         <li>&#10004; Material expose like metals</li>
//       </ul>
//       <div>
//       <button className="bg-pink-500 text-white py-2 px-2 rounded">
//         Shop Now
//       </button>
//       </div>
//       </div>
//       <div className="p-6 ml-10">
//         <Image src={"/18.png"} alt={"Eams Sofa Compact"}  width={500}  height={500} />
//       </div>
//     </div>
//     </div>
  
    
//   );
// };

// export default DiscountItem;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DiscountItem: React.FC = () => {
  return (
    <div className="flex md:flex-row p-6 font-sans">
      
      <div className="flex flex-col mb-6 md:mb-0 md:w-1/2 mr-4">
      <h1 className="text-3xl font-bold text-blue-900 text-center">Discount Item</h1>
        
        <div className="flex space-x-4 mb-4 justify-center text-sm">
          <Link href="#" className="text-pink-500 hover:underline">Wood Chair</Link>
          <span>&bull;</span>
          <Link href="#" className="text-blue-900 hover:underline">Plastic Chair</Link>
          <span>&bull;</span>
          <Link href="#" className="text-blue-900 hover:underline">Sofa Collection</Link>
        </div>
        
        <div className="p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-900 text-center">20% Discount Of All Products</h2>
          <h3 className="text-xl font-bold text-pink-500 mt-2 text-center">Eams Sofa Compact</h3>
          <p className="text-gray-600 text-center max-w-md my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="list-none text-blue-900 mb-4 text-left">
            <li>&#10004; Material expose like metals</li>
            <li>&#10004; Simple neutral colours</li>
            <li>&#10004; Clear lines and geometric figures</li>
            <li>&#10004; Exposed metal materials</li>
          </ul>
          <div className="mt-4">
            <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center p-6">
        <Image src="/18.png" alt="Eams Sofa Compact" width={500} height={500} className="object-cover rounded-md"/>
      </div>
    </div>
  );
};

export default DiscountItem;
