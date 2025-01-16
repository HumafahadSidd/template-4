/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state: { cart: CartItem[] }) => state.cart);

  const handleremove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart Page</h3>
      {cartitems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cartWrapper">
          {cartitems.map((item) => (
            <div className="cartCard" key={item.id}>
              <Image src={item.image} alt={item.title} height={200} width={200} />
              <h5>{item.title}</h5>
              <h5>${item.price.toFixed(2)}</h5>
              <button className="btn" onClick={() => handleremove(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cartpage;
function remove(id: number): never {
  throw new Error('Function not implemented.');
}

