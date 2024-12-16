// import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex flex-col mt-2 items-center">
            <h1 className="text-md font-bold text-[#151875]">Ecommerce Acceories & Fashion item </h1> 
           <p className="text-slate-400 ">About 9,620 results (0.62 seconds)</p>      
          </div>

         
          {/* Action Section (Dropdown Filters) */}
          <div className="flex items-center">
            {/* Per Page Dropdown */}
            <div className="mr-4">
              <label htmlFor="perPage" className="text-sm font-medium text-gray-700">
                Per Page:
              </label>
              <select
                id="perPage"
                className="ml-2 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>50</option>
              </select>
            </div>

            {/* Sort By Dropdown */}
            <div>
              <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
                Sort By:
              </label>
              <select
                id="sortBy"
                className="ml-2 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>size</option>
                <option>Price</option>
                <option>Rating</option>
                <option>Date</option>
              </select>
            </div>
            <div>
              <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
                View:
              </label>
              <select
                id="View"
                className="ml-2 px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
