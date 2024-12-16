
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  price: string;
  imgSrc: string;
  code: string;
  content:string;
}

const FeaturedPost: Post[] = [
  { id: 1, title: "Trending Designs", price: "$56.00", imgSrc: "/Frame 3.png", code: "YS9201",content:"loren ipssum di gekwjfbmdkfherfhjdbvjhfedvdc" },
  { id: 2, title: "Trending Designs", price: "$56.00", imgSrc: "/Frame 4 (3).png", code: "YS9221" ,content:"loren ipssum di gekwjfbmdkfherfhjdbvjhfedvdc"},
  { id: 3, title: "Trending Designs", price: "$56.00", imgSrc: "/Frame 4 (3).png", code: "YS9203" ,content:"loren ipssum di gekwjfbmdkfherfhjdbvjhfedvdc"},
  // { id: 4, title: "Trending Designs", price: "$56.00", imgSrc: "/16.png", code: "YS9204" },
];

const LatestPost: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-indigo-900 font-medium text-center title-font text-3xl justify-center ml-80 mb-2 sm:mb-0">
              Latest Blog
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {FeaturedPost.map((product) => (
            <div key={product.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image alt={product.title} src={product.imgSrc} height={300} width={250} />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{product.title}</h2>
              <p className="text-base leading-relaxed mt-2">
                {product.code} - {product.price}
              </p>
              <Link href="/" className="text-indigo-500 inline-flex items-center mt-3">
                Read Online
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
