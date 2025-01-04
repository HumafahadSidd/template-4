// import React from 'react';
// import Image from 'next/image';

// interface Product {
//   id: number;
//   title: string;
//   price: string;
//   imgSrc: string;
//   code: string;
// }

// const featuredProducts: Product[] = [
//   { id: 1, title: "Cantilever Chair", price: "$42.00", imgSrc: "/21.png", code: "YS9201" },
//   { id: 2, title: "Cantilever Chair", price: "$42.00", imgSrc: "/20.png", code: "YS9201" },
//   { id: 3, title: "Cantilever Chair", price: "$42.00", imgSrc: "/19.png", code: "YS9201" },
//   { id: 4, title: "Cantilever Chair", price: "$42.00", imgSrc: "/Component 12.png", code: "YS9201" },
// ];

// const ProductCard: React.FC<Product> = ({ id, title, price, imgSrc, code }) => (
//   <div className="flex flex-col items-center justify-center mt-6 mb-2" key={id}>
//     <div className="flex flex-col items-center justify-center bg-[#F6F7FB] hover:shadow-lg p-4 rounded-lg transition-all hover:scale-105">
//       <Image src={imgSrc} alt={title} width={270} height={361} className="object-contain transition-all" />
//       <div className="flex flex-col items-center justify-center">
//         <h3 className="text-lg font-bold">{title}</h3>
//         <div className="mt-2">
//           <Image src="/Group 141.png" alt="Divider" height={4} width={52} />
//         </div>
//         <p className="text-sm mt-2">{code}</p>
//         <p className="text-sm mt-2">{price}</p>
//       </div>
//     </div>
//   </div>
// );

// const FeaturedProducts: React.FC = () => {
//   return (
//     <div className="py-12 px-4 sm:px-6 lg:px-8">
//       {/* Main Heading */}
//       <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Featured Products</h2>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {featuredProducts.map((product) => (
//           <ProductCard key={product.id} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;
import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: string;
  imgSrc: string;
  code: string;
}

const featuredProducts: Product[] = [
  { id: 1, title: "Cantilever Chair", price: "$42.00", imgSrc: "/21.png", code: "YS9201" },
  { id: 2, title: "Cantilever Chair", price: "$42.00", imgSrc: "/20.png", code: "YS9201" },
  { id: 3, title: "Cantilever Chair", price: "$42.00", imgSrc: "/19.png", code: "YS9201" },
  { id: 4, title: "Cantilever Chair", price: "$42.00", imgSrc: "/Component 12.png", code: "YS9201" },
];

const ProductCard: React.FC<Product> = ({ id, title, price, imgSrc, code }) => (
  <div className="flex flex-col items-center justify-center mt-6 mb-2" key={id}>
    <div className="flex flex-col items-center justify-center bg-[#F6F7FB] hover:shadow-lg p-4 rounded-lg transition-all hover:scale-105">
      <Image src={imgSrc} alt={title} width={270} height={361} className="object-contain transition-all" />
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="mt-2">
          <Image src="/Group 141.png" alt="Divider" height={4} width={52} />
        </div>
        <p className="text-sm mt-2">{code}</p>
        <p className="text-sm mt-2">{price}</p>
      </div>
    </div>
  </div>
);

const FeaturedProducts: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <h2 className="text-3xl font-semibold text-center  mb-8 text-[#1A0B5B]">Featured Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center mt-8">
        <span className="w-3 h-3 bg-pink-500 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
      </div>
    
    </div>
  );
};

export default FeaturedProducts;
