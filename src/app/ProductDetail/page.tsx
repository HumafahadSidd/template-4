import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { AddToCartToastify } from '@/components/AddToCartToastify';


const ProductDetails: React.FC = () => {
  return (
    <div className="container mx-auto px-5 mt-5 ">
     
     <div className='bg-[#F6F5FF] h-[286px] pl-[150px] pt-[111px] w-full'>
        <h1 className='text-3xl text-indigo-800'>Product Details</h1>
        <div>
          {/* Breadcrumb */}
      <p className="text-gray-500 text-sm">
        <Link href="/">Home</Link> &gt; 
        <Link href="/Pages">Pages</Link> &gt; 
        <Link href="/Products">Product Details</Link> &gt;
      </p>

                  </div>
      </div>
 
      {/* Product Details Section */}
      <section className="flex mt-10">
        {/* Product Images */}
        
        <div className="flex flex-col space-y-4 mr-8">
          <Image src="/p5/Rectangle 134.png" alt="Tote Bag" width={150}height={155} />
          <Image src="/p5/Rectangle 136.png" alt="Lamp" width={150} height={155} />
          <Image src="/p5/Rectangle 137.png" alt="Wallet" width={150} height={155} />
        </div>
     {/* Main Product Info */}
<div className="flex flex-row space-x-4">        
  <Image src="/p5/Rectangle 138.png" alt="Handbag" width={375} height={487}  />
  <div className="flex flex-col space-y-4">
    <h1 className="text-2xl font-bold">Plywood Arm Chair</h1>

    <div className="flex items-center space-x-2 my-4">
      <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
      <span>(21)</span>
    </div>

    <div className="my-4">
      <span className="line-through mr-4">$32.00</span>
      <span className="text-red-500">$19.00</span>
    </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

   <div className='px-3 py-2 pl-8'>
    
    {/* <AddToCartToastify /> */}
   <Link href={ "/ShoppingCart"}><button className="text-black py-2 px-4 rounded border bg-red-300"> Add To Cart</button></Link>
   </div>

<div className="mt-8 space-y-10">
  <p><strong>Categories:</strong> Furniture, Chairs</p>
  <p><strong>Tags:</strong> Armchair, Wooden</p>
  <p><strong>Share:</strong> Social Media Links</p>
</div>
</div>
</div>

  
       
        
      </section>

      {/* Tabs Section */}
      <section className="mt-10">
        <div className="border-b">
          <nav className="-mb-px flex">
           <Link href="#" className="text-pink-500 border-pink-500 border-b-2 px-4 py-2 inline-block">Description</Link>
           <Link href="#" className="text-gray-500 px-4 py-2 inline-block">Additional Info</Link>
           <Link href="#" className="text-gray-500 px-4 py-2 inline-block">Reviews</Link>
           <Link href="#" className="text-gray-500 px-4 py-2 inline-block">Video</Link>
          </nav>
        </div>

        <div className="mt-6 text-gray-600">
          <h3 className="text-xl font-semibold">Various Tempus</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.
          </p>

          <h3 className="text-xl font-semibold mt-6">More Details</h3>
          <p className="mt-2">
            Fusce sed arcu commodo, ultricies erat non, finibus nisi. Aenean nec aliquet arcu. Curabitur et tortor vitae nisl bibendum pellentesque.
          </p>
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold text-indigo-800">Related Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Related Product Card */}
          <div className="border p-4 rounded-lg shadow-md">
            <Image src="/p5/Rectangle 128.png" alt={'bag'} width={270} height={340} />
            <h4 className="mt-4 font-medium text-gray-800">Home Fashion</h4>
            <p className="text-pink-500 mt-1">$250.00</p>
          </div>
          <div className="border p-4 rounded-lg shadow-md">
            <Image src="/p5/Rectangle 133.png" alt="Product Image" width={270} height={340} />
            <h4 className="mt-4 font-medium text-gray-800">Women Fashion</h4>
            <p className="text-pink-500 mt-1">$300.00</p>
          </div>
          <div className="border p-4 rounded-lg shadow-md">
            <Image src="/p5/Rectangle 130.png" alt="Product Image" width={270} height={340} />
            <h4 className="mt-4 font-medium text-gray-800">Luxury Fashion</h4>
            <p className="text-pink-500 mt-1">$200.00</p>
          </div>
          <div className="border p-4 rounded-lg shadow-md">
            <Image src="/p5/Rectangle 131.png" alt="Product Image" width={270} height={340} />
            <h4 className="mt-4 font-medium text-gray-800">Digital Clock</h4>
            <p className="text-pink-500 mt-1">$150.00</p>
          
          </div>
          
        </div>
        <div className='mt-5 ml-4'>
            <Image src="/image 1174.png" alt="Product Image" width={1200} height={300} />
          </div>
      </section>
    </div>
  );
};

export default ProductDetails;
