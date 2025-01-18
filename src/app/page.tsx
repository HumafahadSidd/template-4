import React from "react";
import DiscountItem from "@/components/DiscountItems";
import HeroSection from "@/components/hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import LatestProducts from "@/components/LatestProducts";
import Shopex from "@/components/shopex";
import SubscribeBanner from "@/components/SubscribeBanner";
import TopCategories from "@/components/TopCategories";
import TrendingProducts from "@/components/TrendingProducts";
import UniqueFeatures from "@/components/UniqueFeatures";

import { fetchProducts } from "@/components/fetchData";



export default async function Home() {
await fetchProducts()
  return (
    <div>
      
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
    </div>
  );
}
