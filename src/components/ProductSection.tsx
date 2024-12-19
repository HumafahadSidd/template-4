
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
              //{ id: 5, title: "Cantilever Chair", price: "$42.00", imgSrc: "/22.png", code: "YS9201" },
              // Add more products
            ];
            
            const ProductCard: React.FC<Product> = ({ id, title, price, imgSrc, code }) => (
              <div className="flex flex-col items-center justify-center mt-6 mb-2" key={id}>
                <div className="flex flex-col items-center justify-center bg-[#F6F7FB]">
                  <Image src={imgSrc} alt={title} width={270} height={361} />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              );
            };
            
            export default FeaturedProducts;

