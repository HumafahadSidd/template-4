

// Define your Product type
export interface Product {
    title: string;
    originalPrice: number;
    ratings(ratings: unknown): unknown;
   
    _id: string;
    name: string; //name in schema
    _type: "product";
    image?: {
      asset: {
        
        _ref: string;
        __type: "image";
      }
    };
    price: number;
    description?: string;
    slug: {
      _type: "slug";
      current: string;
    };
    stock?: number;  // Optional property
  }
  