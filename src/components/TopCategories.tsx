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
  { id: 1, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/Top catagories (1).png", code: "YS9201" },
  { id: 2, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/21.png", code: "YS9201" },
  { id: 3, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/Component 10.png", code: "YS9201" },
  { id: 4, title: "Mini LCW Chair", price: "$56.00", imgSrc: "/Component 12.png", code: "YS9201" },
  //{ id: 5, title: "Cantilever Chair", price: "$42.00", imgSrc: "/22.png", code: "YS9201" },
   // // Add more products
];

const TopCategories: React.FC = () => {
  return (
    <section className=" body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-indigo-900 font-medium  text-center title-font text-3xl justify-center ml-80 mb-2 sm:mb-0">Top Categories</h1>
            </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden hover:peer-visited:">
                <Image alt={product.title} src={product.imgSrc} height={300} width={250} />
              </div>
              {/* <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{product.title}</h2>
              <p className="text-base leading-relaxed mt-2">{product.price}</p>
              <Link href={"/"}className="text-indigo-500 inline-flex items-center mt-3">View Details
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link> */}
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}

export default TopCategories;
