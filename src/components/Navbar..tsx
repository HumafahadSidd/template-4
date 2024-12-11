import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-lg font-bold text-blue-600">MyLogo</h1>
          </div>

          {/* Middle Section - Search Bar */}
          <div className="flex-1 flex items-center justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
                <option>View</option>
                <option>Price</option>
                <option>Rating</option>
                <option>Date</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
