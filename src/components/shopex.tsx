
import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';

interface Box {
  id: number;
  title: string;
  imgSrc: string;
  content: string;
}

const FeaturedProduct:Box[] = [
  { id: 1, title: "24/7 Support",imgSrc: "/van.png", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."  },
  { id: 2, title: "24/7 Support",imgSrc: "/win.png", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."  },
  { id: 3, title: "24/7 Support",imgSrc: "/win.png", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."  },
  { id: 4, title: "24/7 Support",imgSrc: "/Group (1).png", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."  },
 
];

const Shopex: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-3/5 text-indigo-900 font-medium text-center title-font text-3xl justify-center ml-80 mb-2 sm:mb-0">
             What Shopex Offer!
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {FeaturedProduct.map((product) => (
            <div key={product.id} className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-md h-30 overflow-hidden">
                <Image alt={product.title} src={product.imgSrc} height={100} width={100} />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{product.title}</h2>
              <p className="text-base leading-relaxed mt-2">
                {product.content} 
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shopex;
