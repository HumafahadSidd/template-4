import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  imageSrc: string;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', price: '$29.99', description: 'This is a great product.', imageSrc: '/29.png' },
  { id: 2, name: 'Product 2', price: '$39.99', description: 'This is another great product.', imageSrc: '/2blog.png' },
  { id: 3, name: 'Product 3', price: '$49.99', description: 'This is yet another great product.', imageSrc: '/3blog.png' },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) =>
  
  <div className="border p-4 rounded-lg shadow-lg  items-center">
    <Image src={product.imageSrc} alt={product.name} width={200} height={200} className="rounded-lg mb-4" />
    <h2 className="text-lg font-semibold">{product.name}</h2>
    <p className="text-gray-600">{product.price}</p>
    <p className="text-gray-700">{product.description}</p>
  </div>
  
;

const ProductList: React.FC = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-6">Product List</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
