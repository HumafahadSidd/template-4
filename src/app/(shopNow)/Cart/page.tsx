'use client'
import Link from 'next/link';
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
}

const initialProducts: Product[] = [
  { id: 1, name: 'Ut diam consequat', price: 32, quantity: 1, color: 'Brown', size: 'XL' },
  { id: 2, name: 'Vel faucibus posuere', price: 32, quantity: 1, color: 'Brown', size: 'XL' },
  { id: 3, name: 'Ac vitae vestibulum', price: 32, quantity: 1, color: 'Brown', size: 'XL' },
  { id: 4, name: 'Elit massa diam', price: 32, quantity: 1, color: 'Brown', size: 'XL' },
  { id: 5, name: 'Proin pharetra elementum', price: 32, quantity: 1, color: 'Brown', size: 'XL' },
];

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };

  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const subtotal = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  const total = subtotal + 106; // Assuming $106 for shipping and taxes as in the image

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex">
        <div className="flex-1 mr-8">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg mb-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p>Color: {product.color}</p>
                <p>Size: {product.size}</p>
                <p>Price: ${product.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="number" 
                  value={product.quantity} 
                  min="1" 
                  className="w-16 p-1 border rounded"
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                />
                <button onClick={() => handleRemoveProduct(product.id)} className="text-red-500">Remove</button>
              </div>
              <div className="text-lg font-bold">${product.price * product.quantity}</div>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button className="bg-gray-200 py-2 px-4 rounded">Update Cart</button>
            <button className="bg-gray-200 py-2 px-4 rounded">Clear Cart</button>
          </div>
        </div>
        <div className="w-64 p-4 border rounded-lg">
          <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
          <p className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </p>
          <p className="text-sm mb-2">Shipping and taxes calculated at checkout</p>
          <button className="w-full bg-black text-white py-2 rounded mb-4">Proceed to Checkout</button>

          {/* Shipping Calculation Section */}
          <div className="p-4 bg-white border rounded-lg">
            <h2 className="text-lg font-bold mb-4">Calculate Shipping</h2>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Country</label>
              <select className="w-full p-2 border rounded">
                <option>Bangladesh</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Location</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Mirpur Dhaka - 1200" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">Postal Code</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Your Postal Code" />
            </div>
            <button className="w-full bg-pink-500 text-white py-2 rounded">Calculate Shipping</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  return (
    <div>
      <div className='bg-[#F6F5FF] h-[286px] pl-[618px] pt-[111px] w-full'>
        <h1 className='text-3xl text-indigo-800'>Shopping Cart</h1>
        <div>
          <p className="text-gray-500 text-sm">
            <Link href="/">Home</Link> &gt;
            <Link href="/Pages">Pages</Link> &gt;
            <Link href="/Products">Shopping Cart</Link> &gt;
            Product Details
          </p>
        </div>
      </div>
      <ShoppingCart />
    </div>
  );
}
