/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect, useState } from 'react';
import DiscountItem from "@/components/DiscountItems";
import HeroSection from "@/components/hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import LatestProducts from "@/components/LatestProducts";
import Shopex from "@/components/shopex";
import SubscribeBanner from "@/components/SubscribeBanner";
import TopCategories from "@/components/TopCategories";
import TrendingProducts from "@/components/TrendingProducts";
import UniqueFeatures from "@/components/UniqueFeatures";
import { sanityFetch } from "@/sanity/lib/fetch";


interface Product {
    _id: string;
    name: string;
    image: {
        asset: {
            _id: string;
            url: string;
        };
    };
    price: string;
    description: string;
    discountPercentage?: number;
    isFeaturedProduct?: boolean;
    stockLevel: number;
    category: string;
}

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchData() {
            const query = `*[_type == "product"]{
                _id,
                name,
                image {
                    asset->{
                        _id,
                        url
                    }
                },
                price,
                description,
                discountPercentage,
                isFeaturedProduct,
                stockLevel,
                category
            }`;
            const productData = await sanityFetch({ query });
            setProducts(productData);
        }
        fetchData();
    }, []);

    return (
        <div>
            <HeroSection />
            <FeaturedProducts />
            <LatestProducts />
            <Shopex />
            <UniqueFeatures />
            <TrendingProducts />
            <DiscountItem />
            <TopCategories />
            <SubscribeBanner />

           
        </div>
    );
};

export default Home;
