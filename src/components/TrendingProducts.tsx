import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  imgSrc: string;
}

interface Offer {
  id: number;
  description: string;
  linkText: string;
  imgSrc: string;
}

const trendingProducts: Product[] = [
  { id: 1, title: 'Cantilever chair', price: '$26.00', oldPrice: '$42.00', imgSrc: '/chair1.png' },
  { id: 2, title: 'Cantilever chair', price: '$26.00', oldPrice: '$42.00', imgSrc: '/chair2.png' },
  { id: 3, title: 'Cantilever chair', price: '$26.00', oldPrice: '$42.00', imgSrc: '/chair3.png' },
  { id: 4, title: 'Cantilever chair', price: '$26.00', oldPrice: '$42.00', imgSrc: '/chair4.png' },
];

const specialOffers: Offer[] = [
  { id: 1, description: '23% off in all products', linkText: 'Shop Now', imgSrc: '/offer1.png' },
  { id: 2, description: '23% off in all products', linkText: 'View Collection', imgSrc: '/offer2.png' },
];

const sideProducts: Product[] = [
  { id: 1, title: 'Executive Seat chair', price: '$32.00', imgSrc: '/sidechair1.png' },
  { id: 2, title: 'Executive Seat chair', price: '$32.00', imgSrc: '/sidechair2.png' },
  { id: 3, title: 'Executive Seat chair', price: '$32.00', imgSrc: '/sidechair3.png' },
];

const TrendingProducts: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-center text-indigo-900 mb-12">Trending Products</h1>

        {/* Trending Products Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trendingProducts.map((product) => (
            <div key={product.id} className="border rounded-md p-4">
              <Image src={product.imgSrc} alt={product.title} width={300} height={300} className="object-cover" />
              <h2 className="mt-4 text-lg font-medium text-gray-900">{product.title}</h2>
              <div className="flex items-center mt-2">
                <span className="text-indigo-600 font-bold mr-2">{product.price}</span>
                {product.oldPrice && <span className="line-through text-gray-500">{product.oldPrice}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers & Side Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Special Offers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
            {specialOffers.map((offer) => (
              <div key={offer.id} className="border rounded-md p-6 flex items-center">
                <Image src={offer.imgSrc} alt={offer.description} width={100} height={100} className="object-cover mr-4" />
                <div>
                  <p className="text-lg font-medium text-gray-900">{offer.description}</p>
                  <a href="#" className="text-indigo-600 underline mt-2 block">{offer.linkText}</a>
                </div>
              </div>
            ))}
          </div>

          {/* Side Products */}
          <div className="border rounded-md p-4">
            {sideProducts.map((product) => (
              <div key={product.id} className="flex items-center mb-4">
                <Image src={product.imgSrc} alt={product.title} width={80} height={80} className="object-cover mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                  <p className="text-sm font-bold text-indigo-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
