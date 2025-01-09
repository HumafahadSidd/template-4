import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; // Import the Image component

const ShoppingCart: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      name:"Products1",
      src: '/15.png',
      price: 32.00,
      quantity: 2,
      total: 64.00,
    },
    {
      id: 2,
      name:"Products2",
      src: '/14.png',
      price: 45.00,
      quantity: 1,
      total: 45.00,
    },
    {
      id: 3,
      name:"Products3",
      src: '/13.png',
      price: 12.50,
      quantity: 3,
      total: 37.50,
    },
  ];

  return (
    <div className='flex flex-wrap h-screen'>
      <div className='bg-[#F6F5FF] h-[286px] pl-[150px] pt-[111px] w-full'>
        <h1 className='text-3xl text-indigo-800'>Shopping Cart</h1>
        <div>
          {/* Breadcrumb */}
          <p className="text-gray-500 text-sm">
            <Link href="/">Home</Link> &gt; 
            <Link href="/Pages">Pages</Link> &gt; 
            <Link href="/Cart">Shopping Cart</Link> &gt;
          </p>
        </div>
      </div>
      <div className='w-full lg:w-2/3 px-4 mt-5'>
        <div className='flex justify-between'>
          <div className='font-bold text-indigo-400'><h1>Product</h1></div>
          <div className='font-bold text-indigo-400'><h1>Price</h1></div>
          <div className='font-bold text-indigo-400'><h1>Quantity</h1></div>
          <div className='font-bold text-indigo-400'><h1>Total</h1></div>
        </div>
        {cartItems.map(item => (
          <div key={item.id} className='flex justify-between items-center my-4 border p-2 rounded'>
            <div className='flex items-center'>
              <Image src={item.src} alt={`Product ${item.id}`} width={50} height={50} />
              <span className='ml-2 text-gray-800'>{item.name}</span>
            </div>
            <div className='text-gray-600'>${item.price.toFixed(2)}</div>
            <div className='text-gray-600'>
              <input
                type="number"
                value={item.quantity}
                className='w-16 text-center border rounded bg-white'
                readOnly
              />
            </div>
            <div className='text-gray-600'>${item.total.toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className='w-full lg:w-1/3 px-4 mt-5'>
        <div className='px-5 py-10 bg-gray-300 text-indigo'>
          <h1 className='text-xl font-bold'>Cart Totals</h1>
          <h2 className='mt-2 ' >SubTotal: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${cartItems.reduce((acc, item) => acc + item.total, 0).toFixed(2)}</h2>
          <h2>Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${(cartItems.reduce((acc, item) => acc + item.total, 0) * 1.15).toFixed(2)} <span className='text-xs'>(with 15% VAT)</span></h2>
          <p className='mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link href={"/OrderCompleted"}><button className='mt-4 px-4 py-2 bg-green-500 text-white rounded'>Proceed to Checkout</button></Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
