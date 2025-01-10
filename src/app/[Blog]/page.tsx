import React from 'react';
import LatestBlog from '@/components/latestblog';
import BlogSidebar from '@/components/BlogSideBar';

const Blog: React.FC = () => {
  return (
    <div>
      
      <div className='w-full h-[286px] bg-[#F6F9F5]'>
        <h1 className='text-3xl ml-32 pt-[60px] text-[#101750]'>Blog Page</h1>
        <ul className='flex ml-32 pt-10 text-[#101750] gap-5'>
          <li>Home</li>
          <li>Page</li>
          <li>SingleBlog</li>
        </ul>
      </div>
      <div className='flex justify-between px-32 py-10'>
        <div className='w-2/3'>
          <LatestBlog />
        </div>
        <div className='w-1/3 p-4 border rounded-lg ml-5'>
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog;
