import React from "react";
import DiscountItem from "@/components/DiscountOffer";
import HeroSection from "@/components/hero";
import FeaturedProducts from "@/components/ProductSection";
import LatestProducts from "@/components/ProductsLatest";
import Shopex from "@/components/shopex";
import SubscribeBanner from "@/components/SubscribeBanner";
import TopCategories from "@/components/TopCategories";
import TrendingProducts from "@/components/TrendingProducts";
import UniqueFeatures from "@/components/UniqueFeatures";

import LatestBlog from "@/components/latestblog";



export default function Home() {
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
    <LatestBlog />

    </div>
    </div>
  );
}
