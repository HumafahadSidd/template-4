
import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: string;
  imgSrc: string;
  code: string;
  oldPrice: string;  
}

const FeaturedProduct: Product[] = [
  { id: 5, title: "Cantilever Chair", oldPrice:'$65',price: "$42.00", imgSrc: "/image 1166.png", code: "YS9201" },
  { id: 6, title: "Cantilever Chair",oldPrice:'$65', price: "$42.00", imgSrc: "/24.png", code: "YS9201" },
  { id: 7, title: "Cantilever Chair",oldPrice:'$65', price: "$42.00", imgSrc: "/26.png", code: "YS9201" },
  { id: 8, title: "Cantilever Chair",oldPrice:'$65', price: "$42.00", imgSrc: "/27.png", code: "YS9201" },
  { id: 9, title: "Cantilever Chair",oldPrice:'$65', price: "$42.00", imgSrc: "/box for image.png", code: "YS9201" },
  { id: 10, title: "Cantilever Chair",oldPrice:'$65', price: "$42.00", imgSrc: "/21.png", code: "YS9201" },
];

const LatestProducts: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-indigo-900 font-medium text-center title-font text-3xl justify-center ml-80 mb-2 sm:mb-0">
              Latest Products
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {FeaturedProduct.map((product) => (
            <div key={product.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-65 bg-[#F7F7F7] overflow-hidden">
                <Image alt={product.title} src={product.imgSrc} height={300} width={250} />
              </div>
              <div className='flex space-x-10'>
              <h2 className="text-xl font-medium title-font text-violet-900 mt-5">{product.title} </h2>
              <p className="text-base leading-relaxed mt-5">
                {product.price} - <del> {product.oldPrice}</del>
              </p>
                          </div>
                          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
