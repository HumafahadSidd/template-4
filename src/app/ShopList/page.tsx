"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar.";
import Link from "next/link";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/product";

export default function ShopList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error("Error fetching products:", err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-[#F6F5FF] h-[286px] pl-[618px] pt-[111px] w-full">
        <h1 className="text-3xl text-indigo-800">Shop List</h1>
        <ul className="flex gap-3">
          <Link href="/">
            <li className="hover:text-pink-500">Home</li>
          </Link>
          <Link href="/Pages">
            <li className="hover:text-pink-500">Pages</li>
          </Link>
          <Link href="/ShopGridDefault">
            <li className="hover:text-pink-500">Shop Grid Default</li>
          </Link>
        </ul>
      </div>

      {/* Navbar */}
      <div className="m-8">
        <Navbar />
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-center">{error}</div>}

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition duration-300"
          >
            {/* Product Image */}
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
            )}

            {/* Product Title */}
            <h2 className="text-[#111C85] font-semibold text-xl mt-4">
              {product.name || "No Title"}
            </h2>

            {/* Ratings */}
            <div className="flex gap-1 mt-2">
              {[...Array(product.ratings)].map((_, index) => (
                <Image
                  key={index}
                  src="/p3/ant-design_star-filled.png"
                  alt="star"
                  height={20}
                  width={20}
                />
              ))}
              {typeof product.ratings === "number" &&
                (product.ratings as unknown as number) < 5 &&
                [...Array(5 - (Number(product.ratings) || 0))].map(
                  (_, index) => (
                    <Image
                      key={`empty-${index}`}
                      src="/p3/vector.png"
                      alt="empty star"
                      height={20}
                      width={20}
                    />
                  )
                )}
            </div>

            {/* Prices */}
            <div className="flex gap-2 mt-3 text-lg">
              <p className="text-green-500 font-bold">{product.name}</p>
              <p className="text-green-500 font-bold">{product.price}</p>
              <p className="text-gray-400 line-through">
                {product.originalPrice}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-3 text-sm">
              {product.description || "No description available."}
            </p>

            {/* Action Icons */}
            <div className="flex gap-4 mt-4">
              <Image
                src="/p3/uil_heart-alt.png"
                alt="heart"
                height={24}
                width={24}
              />
              <Image
                src="/p3/uil_search-plus (1).png"
                alt="search"
                height={24}
                width={24}
              />
              <Image
                src="/p3/fluent_cart-24-regular.png"
                alt="cart"
                height={24}
                width={24}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
