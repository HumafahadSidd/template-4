import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center h-auto lg:h-20 space-y-4 lg:space-y-0">
          {/* Logo Section */}
          <div className="flex flex-col items-center text-center lg:text-left">
            <h1 className="text-md font-bold text-[#151875]">
              Ecommerce Accessories & Fashion Item
            </h1>
            <p className="text-slate-400">
              About 9,620 results (0.62 seconds)
            </p>
          </div>

          {/* Action Section (Dropdown Filters) */}
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Per Page Dropdown */}
            <div>
              <label
                htmlFor="perPage"
                className="text-sm font-medium text-gray-700 bg-white"
              >
                Per Page:
              </label>
              <select
                id="perPage"
                className="ml-2 px-3 py-2 text-sm border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>50</option>
              </select>
            </div>

            {/* Sort By Dropdown */}
            <div>
              <label
                htmlFor="sortBy"
                className="text-sm font-medium bg-white text-gray-700"
              >
                Sort By:
              </label>
              <select
                id="sortBy"
                className="ml-2 px-3 py-2 text-sm border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>Size</option>
                <option>Price</option>
                <option>Rating</option>
                <option>Date</option>
              </select>
            </div>

            {/* View Dropdown */}
            <div>
              <label
                htmlFor="view"
                className="text-sm font-medium bg-white text-gray-700"
              >
                View:
              </label>
              <select
                id="view"
                className="ml-2 px-4 py-2 text-sm border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Grid</option>
                <option value="">List</option>
                <option value="">Compact</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
