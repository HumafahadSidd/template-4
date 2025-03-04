import React from 'react';
import Image from 'next/image';

import FilterSidebar from '@/components/FilterSideBar';
import Link from 'next/link';


interface Product {
  id: number;
  imageSrc: string;
  title: string;
  price: string;
  originalPrice: string;
  description: string;
  ratings: number;
}

const products: Product[] = [
  {
    id: 1,
    imageSrc: "/p4/Rectangle 32.png",
    title: "Accumsan tincidunt",
    price: "$26.00",
    originalPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    ratings: 4,
  },
  {
    id: 2,
    imageSrc: "/p4/Rectangle 32 (1).png",
    title: "Accumsan tincidunt",
    price: "$26.00",
    originalPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    ratings: 4,
  },
  {
    id: 3,
    imageSrc: "/p4/Rectangle 32 (2).png",
    title: "Accumsan tincidunt",
    price: "$26.00",
    originalPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    ratings: 4,
  },
  {
    id: 4,
    imageSrc: "/p4/Rectangle 32 (4).png",
    title: "Accumsan tincidunt",
    price: "$26.00",
    originalPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    ratings: 4,
  },
  {
    id: 5,
    imageSrc: "/p4/Rectangle 32 (5).png",
    title: "Accumsan tincidunt",
    price: "$26.00",
    originalPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    ratings: 4,
  },
  {
    id: 6,
    imageSrc: "/p4/Rectangle 32 (6).png",
    title: "Accumsan tincidunt",
    price: "$26.00",
    originalPrice: "$52.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    ratings: 4,
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className='border shadow-sm mt-4 p-4 flex'>
      <Image src={product.imageSrc} alt={product.title} height={300} width={300} />
      <div className='ml-4 flex flex-col justify-between'>
        <h2 className='text-[#111C85] font-semibold text-2xl'>{product.title}</h2>
        <div className='flex gap-2 mt-2'>
          {[...Array(product.ratings)].map((_, index) => (
            <Image key={index} src="/p3/ant-design_star-filled.png" alt="star" height={20} width={20} />
          ))}
          <Image src="/p3/vector.png" alt="star empty" height={20} width={20} />
        </div>
        <div className='flex gap-2 mt-4'>
          <p>{product.price}</p>
          <p className='text-pink-400'><del>{product.originalPrice}</del></p>
        </div>
        <p className='text-left w-[600px] mt-2'>{product.description}</p>
        <div className='mt-2 flex gap-2'>
          <Image src="/p3/uil_heart-alt.png" alt="heart" height={20} width={20} />
          <Image src="/p3/uil_search-plus (1).png" alt="search" height={20} width={20} />
          <Image src="/p3/fluent_cart-24-regular.png" alt="cart" height={20} width={20} />
        </div>
      </div>
    </div>
  );
}

export default function ShopLeft() {
  return (
    <div className=''>
      <div className='bg-[#F6F5FF] h-[286px] pl-[618px] pt-[111px] w-full'>
        <h1 className='text-3xl text-indigo-800'>Shop Left Sidebar</h1>
        <ul className='flex gap-3'>
          <li><Link href="/" className='hover:text-pink-500'>Home</Link></li>
          <li><Link href="/Pages" className='hover:text-pink-500'>Pages</Link></li>
          <li><Link href="ShopLeft" className='hover:text-pink-500'>Shop Left Sidebar</Link></li>
        </ul>
      </div>
      
      <div className='flex'>
        <FilterSidebar />
        <div className='w-3/4 ml-[250px]'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
