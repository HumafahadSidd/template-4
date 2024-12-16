/* eslint-disable @typescript-eslint/no-explicit-any */


import React from 'react';
import Image from 'next/image';
// Sample Product Data (Replace with actual data fetched from API)
const products = [
  {
    id: 1,
    name: 'Dictum morbi',
    oldPrice: 58.00,
    newPrice: 26.00,
    rating: 4,
    image: 'Rectangle 32 (4).png', 
    },
  {
    id: 2,
    name: 'Sodales sit',
    oldPrice: 55.00,
    newPrice: 30.00,
    rating: 5,
    image: 'Rectangle 32 (5).png',
  },
  {
    id: 3,
    name: 'Nibh varius',
    oldPrice: 52.00,
    newPrice: 26.00,
    rating: 3,
    image: 'Rectangle 32 (6).png',
  },
];

// Sidebar Filter Component
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="filter-section">
        <h3>Product Brand</h3>
        <ul>
          <li><input type="checkbox" /> Coaster Furniture</li>
          <li><input type="checkbox" /> Fusion Dot High Fashion</li>
          <li><input type="checkbox" /> Unique Furniture Restor</li>
          <li><input type="checkbox" /> Dream Furniture Flipping</li>
          <li><input type="checkbox" /> Young Repurposed</li>
          <li><input type="checkbox" /> Green DIY Furniture</li>
        </ul>
      </div>

      <div className="filter-section">
        <h3>Discount Offer</h3>
        <ul>
          <li><input type="checkbox" /> 20% Cashback</li>
          <li><input type="checkbox" /> 5% Cashback Offer</li>
          <li><input type="checkbox" /> 25% Discount Offer</li>
        </ul>
      </div>

      <div className="filter-section">
        <h3>Rating Item</h3>
        <ul>
          <li>
            <input type="checkbox" /> ★★★★★ (140)
          </li>
          <li>
            <input type="checkbox" /> ★★★★☆ (120)
          </li>
          <li>
            <input type="checkbox" /> ★★★☆☆ (95)
          </li>
          <li>
            <input type="checkbox" /> ★★☆☆☆ (35)
          </li>
        </ul>
      </div>
    </aside>
  );
};

// Product Card Component
const ProductCard = ({ product }: { product: any}) => {
  return (
    <div className="product-card">
      <Image src={product.image} alt={product.name} className="product-image"  height={300} width={250} />
      <div className="product-info">
        <h4>{product.name}</h4>
        <div className="product-price">
          <span className="new-price">${product.newPrice.toFixed(2)}</span>
          <span className="old-price">${product.oldPrice.toFixed(2)}</span>
        </div>
        <div className="product-rating">
          {'★'.repeat(product.rating)}
          {'☆'.repeat(5 - product.rating)}
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

// Main Component
const ShopLeftSidebar = () => {
  return (
    <div className="shop-page">
      <h1>Shop Left Sidebar</h1>
      <div className="shop-container">
        {/* Sidebar Filters */}
        <Sidebar />

        {/* Product Listing */}
        <section className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ShopLeftSidebar;
