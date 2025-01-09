'use client';
import React, { useState } from 'react';

interface Brand {
  id: number;
  name: string;
}

const brands: Brand[] = [
  { id: 1, name: 'Coaster Furniture' },
  { id: 2, name: 'Fusion Dot High Fashion' },
  { id: 3, name: 'Unique Furniture Restor' },
  { id: 4, name: 'Dream Furniture Flipping' },
  { id: 5, name: 'Young Repurposed' },
  { id: 6, name: 'Green DIY furniture' },
];

const BrandFilter: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setSelectedBrands((prev) =>
      prev.includes(id) ? prev.filter((brandId) => brandId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedBrands(brands.map((brand) => brand.id));
  };

  const handleClearAll = () => {
    setSelectedBrands([]);
  };

  return (
    <div className="p-4 max-w-md mx-auto sm:p-6 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-4 text-center">Product Brand</h2>

      
      {/* List of Brands */}
      <ul className="space-y-2">
        {brands.map((brand) => (
          <li key={brand.id} className="mb-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand.id)}
                onChange={() => handleCheckboxChange(brand.id)}
                className="form-checkbox focus:ring-2 focus:ring-blue-500"
                aria-label={`Select ${brand.name}`}
              />
              <span className="truncate">{brand.name}</span>
            </label>
          </li>
        ))}
      </ul>

      {/* Empty State */}
      {selectedBrands.length === 0 && (
        <p className="mt-4 text-gray-500 text-sm text-center">No brands selected.</p>
      )}
      {/* Buttons for Select All and Clear All */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
        <button
          onClick={handleSelectAll}
          className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
        >
          Select All
        </button>
        <button
          onClick={handleClearAll}
          className="w-full sm:w-auto px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:ring-2 focus:ring-gray-300"
        >
          Clear All
        </button>
      </div>

    </div>
  );
};

export default BrandFilter;
