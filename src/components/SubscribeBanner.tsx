import React from "react";
import Image from "next/image";

const NewsletterSection: React.FC = () => {
  return (
    <section className="relative bg-gray-50 text-center py-16">
      {/* Background Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/Rectangle 102.png"
          alt="Newsletter Background"
          height={462}
          width={1920}        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-70 z-10">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">
            Get Latest Update By <br /> Subscribing to Our Newsletter
          </h2>
          <button 
            className="bg-pink-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-pink-600"
            aria-label="Subscribe to our newsletter"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Banner Below */}
      <div className="pt-6">
        <Image 
          src="/image 1174.png" // Replace with the correct image path
          alt="Subscribe Banner"
          height={100} 
          width={800} 
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default NewsletterSection;
