
import React from 'react';
import BrandFilter from './BrandFilter';
import { GiPlainCircle } from 'react-icons/gi';

const FilterSidebar: React.FC = () => {
  return (
    <div className="p-4 w-64 bg-white shadow-lg">
      <BrandFilter />
      {/* Discount Offer */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Discount Offer</h2>
        <ul>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>20% Cashback</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>5% Cashback Offer</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>25% Discount Offer</span>
            </label>
          </li>
        </ul>
      </div>

      {/* Rating Item */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Rating Item</h2>
        <ul>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>5 stars (5241)</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>4 stars (1756)</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>3 stars (426)</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>2 stars (29)</span>
            </label>
          </li>
        </ul>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Prestashop</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Magento</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Bigcommerce</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>osCommerce</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>3dcart</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Bags</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Accessories</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Jewellery</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Watches</span>
            </label>
          </li>
        </ul>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Price Filter</h2>
        <ul>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>$0.00 - $150.00</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>$150.00 - $350.00</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>$150.00 - $504.00</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>$450.00 +</span>
            </label>
          </li>
        </ul>
      </div>

      {/* Filter By Color */}
      
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Filter By Color</h2>
        <ul>
        <div className="flex">
          <li className="mb-2">
            <label className="flex items-center space-x-1">
              {/* <input type="checkbox" className="form-checkbox" /> */}
              <span><GiPlainCircle color='blue' />Blue</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-1">
              {/* <input type="checkbox" className="form-checkbox" /> */}
              <span><GiPlainCircle color='orange' /> &nbsp;Orange</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-1">
              {/* <input type="checkbox" className="form-checkbox" /> */}
              <span><GiPlainCircle color='brown' /> &nbsp;Brown</span>
            </label>
          </li>
          </div>
          <div className='flex'>

          <li className="mb-2">
            <label className="flex items-center space-x-1">
              {/* <input type="checkbox" className="form-checkbox" /> */}
              <span><GiPlainCircle color='green' /> &nbsp;Green</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-1">
              {/* <input type="checkbox" className="form-checkbox" /> */}
              <span><GiPlainCircle color='purple' /> &nbsp;Purple</span>
            </label>
          </li>
          <li className="mb-2">
            <label className="flex items-center space-x-1">
              {/* <input type="checkbox" className="form-checkbox" /> */}
              <span><GiPlainCircle color='skyblue' /> &nbsp;Skyblue</span>
            </label>
          </li>
          </div>
        </ul>
      </div>
      </div>
    
  );
};

export default FilterSidebar;
