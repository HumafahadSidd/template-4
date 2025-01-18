// fetchProducts.ts
import axios from 'axios';

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

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<{ products: Product[] }>('https://next-ecommerce-template-4.vercel.app/api/product');
    return response.data.products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}
