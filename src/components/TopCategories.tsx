
import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: string;
  imgSrc: string;
}

const featuredProducts: Product[] = [
  { id: 1, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/19.png" },
  { id: 2, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/20.png" },
  { id: 3, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/21.png" },
  { id: 4, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/23.png" },
];

const TopCategories: React.FC = () => {
  return (
    <section className="body-font bg-gray-50 py-16">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-indigo-900">Top Categories</h1>
          <div className="w-16 h-1 mx-auto bg-indigo-500 mt-4 rounded"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Background with Hover Effect */}
              <div className="relative group w-40 h-40 rounded-full bg-indigo-100 flex items-center justify-center hover:animate-spin-slow">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  alt={product.title}
                  src={product.imgSrc}
                  height={80}
                  width={80}
                  className="relative z-10"
                />
              </div>

              {/* Title and Price */}
              <h2 className="mt-4 text-lg font-medium text-gray-800">
                {product.title}
              </h2>
              <p className="text-indigo-600 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
