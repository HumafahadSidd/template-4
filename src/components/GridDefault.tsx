import Link from 'next/link';
import React from 'react';

export default function GridDefault() {
  return (
    <div className=''>
      <div className='bg-[#F6F5FF] h-[286px] pl-[618px] pt-[111px] w-full'>
        <h1 className='text-3xl text-indigo-800'>Shop Grid Default</h1>
        <nav>
          <ul className='flex gap-3'>
            <Link href="/"><li className='hover:text-pink-500'>Home</li></Link>
            <Link href="/Pages"><li className='hover:text-pink-500'>Pages</li></Link>
            <Link href="/ShopLeft"><li className='hover:text-pink-500'>Shop Left Sidebar</li></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
