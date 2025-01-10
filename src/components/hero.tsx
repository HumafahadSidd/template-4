import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col items-start">
          {/* Lamp Image */}
          <div className="absolute top-0 left-0 z-0">
            <Image src={"/2.png"} alt={"Lamp"} height={300} width={300} />
          </div>

          <span className="text-pink-500 font-medium">Best Furniture For Your Castle...</span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="mt-6 text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600">
            <Link href="/ShopList">Shop Now</Link>
          </button>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 relative mt-8 md:mt-0 flex justify-center">
          {/* Chair Image */}
          <Image src={"/1.png"} alt={"Chair"} height={600} width={1200} className="object-contain" />

          {/* Discount Badge */}
          <div className="absolute top-8 right-8 bg-blue-500 text-white rounded-full px-4 py-2 text-lg font-medium">
            50% off
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8">
        <span className="w-3 h-3 bg-pink-500 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
      </div>
    </section>
  );
};

export default HeroSection;
