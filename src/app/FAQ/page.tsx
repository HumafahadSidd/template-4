

import React from 'react';

const FAQ = () => {
  return (
    <div className="w-full h-auto">
    
      {/* Top Section */}
      <div className="bg-blue-300 w-full h-[400px] pl-36 pt-20 text-gray-600">
        <h1 className="text-3xl font-extrabold">FAQ</h1>
        <ul className="flex gap-4 mt-2">
          <li className="hover:text-pink-500 cursor-pointer">Home</li>
          <li className="hover:text-pink-500 cursor-pointer">Pages</li>
          <li className="hover:text-pink-500 cursor-pointer">FAQ</li>
        </ul>
      </div>
      <div className='flex '>
      {/* FAQ & Form Section */}
      <div className="flex flex-wrap px-8 py-12 gap-12">
        {/* Left: General Information */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">General Information</h2>
          <div className="mb-6">
            <p className="text-blue-950 font-semibold">
              Eu dictumst cum at sed euismod condimentum?
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br />
              tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-blue-950 font-semibold">
              Maecenas blandit erat at fermentum ex?
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br />
              tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-blue-950 font-semibold">
              Odio malesuada habitant morbi curabitur vestibulum?
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br />
              tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
          <div>
            <p className="text-blue-950 font-semibold">
              Etiam ultricies libero id nisi egestas congue massa?
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed <br />
              tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
        </div>

        {/* Right: Ask a Question Form */}
        <div className="w-full md:w-1/2">
          <div className="border shadow-md p-8 bg-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Ask a Question</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full h-[50px] p-3 border border-gray-300 rounded-md focus:outline-blue-400"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full h-[50px] p-3 border border-gray-300 rounded-md focus:outline-blue-400"
              />
              <textarea
                placeholder="Type Your Message"
                required
                className="w-full h-[120px] p-3 border border-gray-300 rounded-md focus:outline-blue-400"
              ></textarea>
              <button
                type="submit"
                className="text-white bg-pink-600 px-6 py-3 rounded-md hover:bg-pink-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
