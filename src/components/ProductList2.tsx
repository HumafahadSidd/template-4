// ProductList.tsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from './fetchData';
import Image from 'next/image';
interface Product {
  _id: string;
  name: string;
  price: string;
  discountPercentage: number;
  stockLevel: number;
  isFeaturedProduct: boolean;
  category: string;
  imageUrl: string;
  description: string;
}

const ProductList2: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const productsData = await fetchProducts();
      setProducts(productsData);
    }

    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <Image src={product.imageUrl} alt={product.name} />
          <p>Price: {product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Stock Level: {product.stockLevel}</p>
          <p>Category: {product.category}</p>
          <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList2;
