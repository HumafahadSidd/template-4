
import React from 'react';
import ProductList from '@/components/ProductList';
import Navbar from '@/components/Navbar.';

const Blog: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className='w-[1920px] h-[286px] bg-[#F6F9f5]'>
        <h1 className='text-3xl ml-32 pt-[60px] text-[#101750] w-[177px] h-[38px]'>Blog Page</h1>
        <ul className='flex ml-32 pt-10 text-[#101750] gap-5'>
          <li>Home</li>
          <li>Page</li>
          <li>Home</li>
        </ul>
      </div>
      <div className='left w-[1300px] h-[1000px] shadow'>
        <ProductList />
      </div>
      <div className='Right'>
        <div className='w-64 p-4 border rounded-lg h-[800px]'>

        </div>
      </div>
    </div>
  );
};

export default Blog;
