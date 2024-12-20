'use client'
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

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Product Brand</h2>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id} className="mb-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand.id)}
                onChange={() => handleCheckboxChange(brand.id)}
                className="form-checkbox"
              />
              <span>{brand.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
