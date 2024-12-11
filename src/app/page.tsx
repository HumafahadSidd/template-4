import DiscountItem from "@/components/DiscountOffer";
import HeroSection from "@/components/hero";
import FeaturedProducts from "@/components/ProductSection";
import LatestProducts from "@/components/ProductsLatest";
import Shopex from "@/components/shopex";
import TrendingProducts from "@/components/TrendingProducts";
import UniqueFeatures from "@/components/UniqueFeatures";



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
    </div>
    </div>
  );
}
