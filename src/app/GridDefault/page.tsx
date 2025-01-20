'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar.';
import GridDefault from '@/components/GridDefault';
import { sanityFetch } from '@/sanity/lib/fetch';

// Define the Product interface
interface Product {
  _id: string;
  name: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  price: string;
  description: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  stockLevel: number;
  category: string;
}

export default function ShopGridDefault() {
  // State to hold the fetched products
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "product"]{
        _id,
        name,
        image {
          asset->{
            _id,
            url
          }
        },
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category
      }`;
      const productData = await sanityFetch({ query });
      setProducts(productData);
    }
    fetchData();
  }, []);

  // Sample image rows data
  const imageRows = [
    {
      row: 1,
      images: [
        { src: "/p2/e.c1.png", alt: "sofa", height: 300, width: 270 },
        { src: "/p2/ec5.png", alt: "sofa", height: 300, width: 270 },
        { src: "/Ecommerce accesories (2).png", alt: "sofa", height: 300, width: 270 },
      ],
    },
    {
      row: 2,
      images: [
        { src: "/p2/Ecommerce Accesories (1).png", alt: "sofa", height: 300, width: 270 },
        { src: "/p2/Ecommerce accesories (2).png", alt: "sofa", height: 300, width: 270 },
        { src: "/p2/Ecommerce accesories (3).png", alt: "sofa", height: 300, width: 270 },
        { src: "/p2/Ecommerce accesories (4).png", alt: "sofa", height: 300, width: 270 },
      ],
    },
    {
      row: 3,
      images: [
        { src: "/p2/Ecommerce accesories (5).png", alt: "sofa", height: 300, width: 270 },
        { src: "/p2/Ecommerce accesories (4).png", alt: "sofa", height: 300, width: 270 },
        { src: "/Ecommerce accesories.png", alt: "sofa", height: 300, width: 270 },
        { src: "/Ecommerce accesories (2).png", alt: "sofa", height: 300, width: 270 },
      ],
    },
    {
      row: "banner",
      images: [
        { src: "/image 1174.png", alt: "subscribeBanner", height: 100, width: 800 },
      ],
    },
  ];

  return (
    <div>
      <div>
        <GridDefault />
      </div>
      <section className="mt-8 justify-center ml-[200px]">
        <div className='m-6'>
          <Navbar />
        </div>
        <div className=' border shadow-md p-4 mt-4 m-4 '>
          <h1 className='text-center text-2xl font-bold'>Products</h1>
          <div className='grid grid-cols-3 border p-2 m-2 mb-4 mt-2 bg-slate-400'>
          {products.map((product) => (
            <div key={product._id}>
              <h2 className='font-bold mb-1 text-center'>{product.name}</h2>
              <Image
                src={product.image.asset.url}
                alt={product.name}
                width={200}
                height={200}
              />
              <p>Price:{product.price}</p>
              <p>Discription:{product.description}</p>
              <p>Discount: {product.discountPercentage}%</p>
              <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>
              <p>Stock Level: {product.stockLevel}</p>
              <p>Category: {product.category}</p>
            </div>
            
          ))}
        </div>
        </div>
        {imageRows.map((row, index) => (
          <div key={index} className={`flex ${row.row === 'banner' ? 'justify-center' : 'space-x-4'}`}>
            {row.images.map((img, i) => (
              <div key={i} className={row.row === 'banner' ? 'mt-6 mb-2' : ''}>
                <Image src={img.src} alt={img.alt} height={img.height} width={img.width} />
              </div>
              
            ))}
          </div>
        
          
        ))}
      </section>
    </div>
  );
}
