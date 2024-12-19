import React from "react";
import Image from "next/image";

const UniqueFeatures: React.FC = () => {
  return (
    <section className="bg-indigo-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/Group 153.png" // Replace with your image path
              alt="B&B Italian Sofa"
              width={500}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10">
          <h2 className="text-indigo-900 font-bold text-3xl mb-5">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-4 h-4 mt-1 bg-red-500 rounded-full mr-4"></span>
              <p className="text-gray-600">
                All frames constructed with hardwood solids and laminates
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 mt-1 bg-blue-500 rounded-full mr-4"></span>
              <p className="text-gray-600">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 mt-1 bg-green-500 rounded-full mr-4"></span>
              <p className="text-gray-600">
                Arms, backs and seats are structurally reinforced
              </p>
            </li>
          </ul>
          <div className="mt-8">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-600">
              Add To Cart
            </button>
            <p className="mt-4 text-indigo-900 flex-col flex font-medium">
              B&B Italian Sofa <span className="text-gray-600">$32.00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;
