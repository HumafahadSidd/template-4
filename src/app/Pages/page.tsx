
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import Navbar from '@/components/Navbar.';
import GridDefault from '@/components/GridDefault';

// interface Product {
//   id: number;
//   name: string;
  
//   image: string;
//   price: number;
//   oldprice: string;
// }

// const products: Product[] = [
//   { id: 1, name: 'Product 1', image: '/e.c1.png', price: 100, oldprice: '$120' },
//   { id: 2, name: 'Product 1', image: '/e/c2.png', price: 100, oldprice: '$120' },
//   { id: 3, name: 'Product 1', image: '/path/to/image1.jpg', price: 100, oldprice: '$120' },
//   { id: 4, name: 'Product 1', image: '/path/to/image1.jpg', price: 100, oldprice: '$120' },
//   { id: 5, name: 'Product 1', image: '/path/to/image1.jpg', price: 100, oldprice: '$120' },
//   { id: 6, name: 'Product 1', image: '/path/to/image1.jpg', price: 100, oldprice: '$120' },
//   { id: 7, name: 'Product 1', image: '/path/to/image1.jpg', price: 100, oldprice: '$120' },
//   { id: 8, name: 'Product 1', image: '/path/to/image1.jpg', price: 100, oldprice: '$120' },
//   { id: 9, name: 'Product 1', image: '/path/to/image1.jpg', price: 100, oldprice: '$120' },
//   { id: 10, name: 'Product 1', image: '/path/to/image1.jpg', price: 100, oldprice: '$120' },
//   { id: 11, name: 'Product 2', image: '/path/to/image2.jpg', price: 80, oldprice: '$100' },
//   // Add more products as needed
// ];

export default function Pages() {
  return (
    <div>
      <GridDefault />
{/*       
          <div className='w-full h-[286px] bg-[#F6F5FF]'>
            
            <div className='ml-[200px] pt-16'>
              <h1 className='text-[#101750] font-bold text-3xl'>Shop Grid Default</h1>
              <div className='flex hover:text-pink-400 space-x-2 text-center'>
                <Link href="/">Home</Link>
                <Link href="/Shop">Shop</Link>
                <Link href="#">Grid Default</Link>
              </div>
            </div>
          </div> */}
          <Navbar />
        
        <section className='mt-8 h-[1400px] justify-center ml-[200px]'>
          
        
{/* row1 */}
          <div className=' flex space-x-4 '>
            
            <div className='p-4' >
              <Image src={"/p2/e.c1.png"} alt={'sofa'} height={300} width={270}/>
            </div>
            <div>
              <Image src={"/p2/ec5.png"} alt={'sofa'} height={300} width={270}/>
            </div>
            <div>
              <Image src={"/Ecommerce accesories (2).png"} alt={'sofa'} height={300} width={270}/>
            </div>
                    
            <div>
              <Image src={"/ec5.png"} alt={'sofa'} height={300} width={270}/>
            </div>
 </div>
{/* row2 */}
            <div className='flex space-x-4'>
            <div>
              <Image src={"/p2/Ecommerce Accesories (1).png"} alt={'sofa'} height={300} width={270}/>
            </div>
            
            <div>
              <Image src={"/p2/Ecommerce accesories (2).png"} alt={'sofa'} height={300} width={270}/>
            </div>
            <div>
              <Image src={"/p2/Ecommerce accesories (3).png"} alt={'sofa'} height={300} width={270}/>
            </div>
            <div>
              <Image src={"/p2/Ecommerce accesories (4).png"} alt={'sofa'} height={300} width={270}/>
            </div>
            </div>
{/* row3 */}
<div>
            <div className='flex space-x-4'>
            <div>
              <Image src={"/p2/Ecommerce accesories (5).png"} alt={'sofa'} height={300} width={270}/>
            </div>
                     
            <div>
              <Image src={"/p2/Ecommerce accesories (4).png"} alt={'sofa'} height={300} width={270}/>
            </div>
            
            <div>
              <Image src={"/Ecommerce accesories.png"} alt={'sofa'} height={300} width={270}/>
            </div>
            <div>
              <Image src={"/Ecommerce accesories (2).png"} alt={'sofa'} height={300} width={270}/>
            </div>
      </div>
            </div>
            <div className=''>
                         <div className="mt-6 mb-2 justify-self-center h-4">
                        <Image src={"/image 1174.png"} alt={"subscribeBanner"} height={100} width={800}/>
                      </div>
             </div>
                      </section>             
             
          </div>
        
          
        
        
  );
}
