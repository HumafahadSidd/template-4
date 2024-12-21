
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import Navbar from '@/components/Navbar.';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldprice: string;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', image: '/path/to/image1.jpg', price: 100, oldprice: '$120' },
  { id: 2, name: 'Product 2', image: '/path/to/image2.jpg', price: 80, oldprice: '$100' },
  // Add more products as needed
];

const Pages: React.FC = () => {
  return (
    <div>
      <Wrapper>
        <section>
          <div className='w-full h-[286px] bg-[#F6F5FF]'>
            <div></div>
            <div className='ml-[250px] pt-16'>
              <h1 className='text-[#101750] font-bold text-3xl'>Shop Grid Default</h1>
              <div className='flex hover:text-pink-400 space-x-2 text-center'>
                <Link href="/">Home</Link>
                <Link href="/Shop">Shop</Link>
                <Link href="#">Grid Default</Link>
              </div>
            </div>
          </div>
          <Navbar />
          <div className='flex flex-wrap'>
            {products.map((item) => (
              <div key={item.id} className='w-[270px] h-[350px] bg-[#F6F5FF] m-4'>
                <div className='w-[270px] h-[270px] bg-[#F6F5FF]'>
                  <Image src={item.image} alt={item.name} width={270} height={270} />
                </div>
                <div className='w-[270px] h-[80px] bg-[#F6F5FF] p-2'>
                  <h1 className='text-[#101750] font-bold text-xl'>{item.name}</h1>
                  <div className='flex space-x-2'>
                    <h1 className='text-[#101750] font-bold text-xl'>${item.price}</h1>
                    <h1 className='text-[#101750] font-bold text-xl line-through'>{item.oldprice}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Wrapper>
    </div>
  );
}

export default Pages;
