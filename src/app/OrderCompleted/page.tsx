import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const OrderComplete: React.FC = () => {
  return (
    <div className='flex flex-col bg-[#F6F5FF] min-h-screen'>
      <div className='bg-[#F6F5FF] h-[286px] px-6 lg:px-[150px] pt-[111px] w-full'>
        <h1 className='text-3xl text-indigo-800'>Order Completed</h1>
        <div>
          <ul className='flex gap-3 flex-wrap'>
            <Link href={"/"}><li className='hover:text-pink-500'>Home</li></Link>
            <Link href={"/"}><li className='hover:text-pink-500'>Pages</li></Link>
            <Link href={"/ShopLeft"}><li className='hover:text-pink-500'>Shop Left Sidebar</li></Link>
          </ul>
        </div>
      </div>

      <div className='mt-10 p-6 bg-white shadow-lg rounded-lg text-center w-full max-w-3xl mx-auto'>
        <Image src={"/p6/clock 1.png"} alt={"clock"} height={50} width={50} className='inline-block' />
        <h1 className='text-4xl font-bold text-indigo-800 mt-4'>Order Completed</h1>
        <p className='mt-4 text-gray-500'>Thank you for your order!</p>
        <p className='mt-2 text-gray-600'>Your order number is <span className='font-semibold'>#123456</span></p>
        <p className='mt-2 text-gray-600'>We have sent you an email confirmation to <span className='font-semibold'>your-email@example.com</span></p>
        <div className='mt-6'>
          <Link href={"/ProductDetail"}>
            <button className='px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600'>Continue Shopping</button>
          </Link>
        </div>
        <div className='mt-10 flex justify-center lg:justify-end'>
          <Image src={"/p6/checklist 1.png"} alt={"check list"} height={50} width={50} />
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
