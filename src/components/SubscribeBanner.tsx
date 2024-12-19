import React from "react";
import Image from "next/image";
const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-gray-50 text-center py-16">
      {/* Background Image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('Rectangle 102.png')", // Replace this with your actual image URL
          height: "300px",
        }}
      >
        {/* Overlay Content */}
        <div className="absolute -inset-2 flex flex-col items-center justify-center text-center bg-white bg-opacity-70">
          <h2 className="text-2xl font-bold text-indigo-800 mb-2">
            Get Latest Update By <br />Subscribe to Our Newsletter
          </h2>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-pink-600">
            Subscribe Now
          </button>
        </div>
      </div>
      <div>
               </div>
               <div className="pt-6 mb-2 justify-self-center h-4">
            <Image src={"/image 1174.png"} alt={"subscribeBanner"} height={100} width={800}/>
          </div>
        


          </section>
  );
};

export default NewsletterSection;
