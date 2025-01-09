import React from 'react';
import Image from 'next/image';
const BlogSidebar: React.FC = () => {
  return (
    <div className='w-64 p-4 border rounded-lg'>
      {/* Search Section */}
      <div className='mb-6'>
        <h3 className='font-bold text-indigo-700 mb-2'>Search</h3>
        <input type="text" className='w-full px-3 py-2 bg-white text-gray-400 border rounded' placeholder="Search..." />
      </div>

      {/* Categories Section */}
      <div className='mb-6'>
        <h3 className='font-bold text-gray-700  mb-2'>Categories</h3>
        <div className='flex gap-4'>
        <ul>
          <li className='mb-2'>Hobbies (14)</li>
          <li className='mb-2'>Women (21)</li>
          <li className='mb-2'>Women (21)</li>
        </ul>
        <ul>
          <li className='mb-2'>Hobbies (14)</li>
          <li className='mb-2'>Women (21)</li>
          <li className='mb-2'>Women (21)</li>
        </ul>
      </div>
      </div>

      {/* Recent Post Section */}
      <div className='mb-6'>
        <h3 className='font-bold text-gray-700 mb-2'>Recent Post</h3>
        <div className='mb-2'>
          <span> <Image src={"/p7/Rectangle 126.png"} alt={"image1"} height={50} width={50} /></span>

          <p className='font-medium'>It is a long established fact</p>
          <p className='text-sm text-gray-500'>Aug 07 2020</p>
        </div>
        <div className='mb-2'>
        <span> <Image src={"/p7/Rectangle 126 (2).png"} alt={"image1"} height={50} width={50} /></span>
          <p className='font-medium'>It is a long established fact</p>
          <p className='text-sm text-gray-500'>Aug 07 2020</p>
        </div>
      </div>

      {/* Sale Product Section */}
      <div className='mb-6'>
          <span> <Image src={"/p7/Rectangle 126 (2).png"} alt={"image1"} height={50} width={50} /></span>
        <h3 className='font-bold text-gray-700 mb-2'>Sale Product</h3>
        <div className='mb-2'>
        <span> <Image src={"/p7/Rectangle 126 (3).png"} alt={"image1"} height={50} width={50} /></span>
          <p className='font-medium'>Etiam ornare in enim mauris.</p>
          <p className='text-sm text-gray-500'>Aug 07 2020</p>
        </div>
        <div className='mb-2'>
        <span> <Image src={"/p7/Rectangle 126 (4).png"} alt={"image1"} height={50} width={50} /></span>
          <p className='font-medium'>Vivamus pulvinar et enim.</p>
          <p className='text-sm text-gray-500'>Aug 07 2020</p>
        </div>
      </div>

      {/* Offer Product Section */}
      <div className='mb-6'>
        <h3 className='font-semibold text-gray-700 mb-2'>Offer Product</h3>
        <div className='mb-2'>
        <span> <Image src={"/p7/Rectangle 126 (5).png"} alt={"image1"} height={50} width={50} /></span>
          <p className='font-medium'>Duis lectus est. $12.00 - $15.00</p>
        </div>
        <div className='mb-2'>
        <span> <Image src={"/p7/Rectangle 126.png"} alt={"image1"} height={50} width={50} /></span>
          <p className='font-medium'>Sed placerat. $12.00 - $15.00</p>
        </div>
      </div>

      {/* Follow Section */}
      <div className='mb-6'>
        <h3 className='font-semibold text-gray-700 mb-2' >Follow</h3>
        <div className='flex space-x-2'>
          <a href="#" className='text-blue-600'>Facebook</a>
          <a href="#" className='text-pink-500'>Instagram</a>
          <a href="#" className='text-blue-400'>Twitter</a>
        </div>
      </div>

      {/* Tags Section */}
      <div>
        <h3 className='font-semibold text-gray-700 mb-2'>Tags</h3>
        <div className='flex flex-wrap gap-2'>
          <span className='px-2 py-1 '>General</span>
          <span className='px-2 py-1 '>Atsanil</span>
          <span className='px-2 py-1 '>insas</span>
          <span className='px-2 py-1 '>Bipsaas</span>
          <span className='px-2 py-1 '>Nulla</span>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
