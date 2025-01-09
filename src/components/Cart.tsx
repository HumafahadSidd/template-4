// In Cart.tsx

'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
// Correct import for Image component in Next.js

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto px-5 mt-5">
      <h1 className="text-3xl text-indigo-800">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="mt-4">Your cart is empty.</p>
      ) : (
        <ul className="mt-4">
          {cart.map((item) => (
            <li key={item.id} className="border-b py-4">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Image src={item.img} alt={item.title} width={50} height={50} />
                  <span className="ml-4">{item.title}</span>
                </div>
                <span>{item.price}</span>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                  className="border p-1 w-16"
                />
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
