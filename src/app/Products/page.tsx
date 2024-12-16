// import React from 'react'
// import image from "next/image"
// import Link from "next/link"
// export default function Products() {
//   return (
//     <div>
  
  
//   {/* <!-- Breadcrumb --> */}
//   <div className="container mx-auto px-5 mt-5">
//     <p className="text-gray-500 text-sm">
//       <Link href={"/"}> Home</Link>
//        <Link href={"/Pages"}> Pages</Link>
//        <Link href={"/Products"}> Products </Link>
//     Product Details</p>
//   </div>

//   {/* <!-- Product Details Section --> */}
//   <section className="container mx-auto px-5 mt-10">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//       {/* <!-- Product Images --> */}
//       <div className="grid grid-cols-2 gap-4">
//         <Image  src={"/p4/Rectangle 32.png"} width={300} height={250} alt={"Main Product Image"} />
//         <div className="grid grid-rows-4 gap-2">
//           <Image  src={"/p4/Rectangle "} height={300}  width={300}  alt={"Sub Image"} />
//           <Image  src={"https://dummyimage.com/100x100"}  height={300}  width={300}   alt={"Sub Image"} />
//           <Image  src={"https://dummyimage.com/100x100"} height={300}  width={300}   alt={"Sub Image"} />
//           <Image  src={"https://dummyimage.com/100x100"} height={300}  width={300}   alt={"Sub"} />
//         </div>
//       </div>

//       {/* <!-- Product Info --> */}
//       <div>
//         <h2 className="text-3xl font-semibold text-gray-800">Plywood Arm Chair</h2>
//         <p className="text-xl font-medium text-pink-500 mt-2">$500.00 <span className="line-through text-gray-400 ml-2">$600.00</span></p>
//         <p className="text-gray-600 mt-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa vel arcu consectetur ultrices phasellus.
//         </p>
//         <p className="mt-4"><strong>Category:</strong> Furniture</p>
//         <p><strong>Tags:</strong> Home, Office</p>
//         <div className="mt-6">
//           <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">Add to Cart</button>
//           <button className="ml-4 border border-gray-300 px-6 py-2 rounded hover:bg-gray-100">♡</button>
//         </div>
//       </div>
//     </div>
//   </section>

//   {/* <!-- Tabs Section --> */}
//   <section className="container mx-auto px-5 mt-10">
//     <div className="border-b">
//       <nav className="-mb-px flex">
//         <a href="#" className="text-pink-500 border-pink-500 border-b-2 px-4 py-2 inline-block">Description</a>
//         <a href="#" className="text-gray-500 px-4 py-2 inline-block">Additional Info</a>
//         <a href="#" className="text-gray-500 px-4 py-2 inline-block">Reviews</a>
//         <a href="#" className="text-gray-500 px-4 py-2 inline-block">Video</a>
//       </nav>
//     </div>
//     <div className="mt-6 text-gray-600">
//       <h3 className="text-xl font-semibold">Various Tempus</h3>
//       <p className="mt-2">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.
//       </p>
//       <h3 className="text-xl font-semibold mt-6">More Details</h3>
//       <p className="mt-2">
//         Fusce sed arcu commodo, ultricies erat non, finibus nisi. Aenean nec aliquet arcu. Curabitur et tortor vitae nisl bibendum pellentesque.
//       </p>
//     </div>
//   </section>

//   {/* <!-- Related Products --> */}
//   <section className="container mx-auto px-5 mt-10">
//     <h3 className="text-2xl font-semibold text-gray-800">Related Products</h3>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//       {/* <!-- Product Card --> */}
//       <div className="border p-4 rounded-lg shadow-md">
//         <Image  src={"https://dummyimage.com/200x250"} alt={"Product Image"} />
//         <h4 className="mt-4 font-medium text-gray-800">Home Fashion</h4>
//         <p className="text-pink-500 mt-1">$250.00</p>
//       </div>
//       <div className="border p-4 rounded-lg shadow-md">
//         <Image  src={"https://dummyimage.com/200x250"} alt={"Product Image"} />
//         <h4 className="mt-4 font-medium text-gray-800">Women Fashion</h4>
//         <p className="text-pink-500 mt-1">$300.00</p>
//       </div>
//       <div className="border p-4 rounded-lg shadow-md">
//         <Image  src={"https://dummyimage.com/200x250}" alt={"Product Image"} height={300} width={300} />
//         <h4 className="mt-4 font-medium text-gray-800">Luxury Fashion</h4>
//         <p className="text-pink-500 mt-1">$200.00</p>
//       </div>
//       <div className="border p-4 rounded-lg shadow-md">
//         <Image  src={"https://dummyimage.com/200x250}" alt={"Product Image"} height={300} width={300} />
//         <h4 className="mt-4 font-medium text-gray-800">Digital Clock</h4>
//         <p className="text-pink-500 mt-1">$150.00</p>
//       </div>
      
//     </div>
//   </section>

  
//     </div>
//     </div>
//   )
// }
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const ProductDetail = () => {
  return (
    <div className='GridProdDetail '>
      <h2>Product Detail</h2>
      <p>
        <Link href="/">Home</Link>
        <Link href="/Pages">Pages</Link>
        <Link href="/Product Details">Product Details</Link>
       </p>
       <div className='Rectangle132'>
        <Image src="/p4/Rectangle 32.png" alt="Product Image" width={300} height={250} />
        <Image src="/p4/Rectangle 32.png" alt="Product Image" width={300} height={250} />
<Image src="/p4/Rectangle 32.png" alt="Product Image" width={300} height={250} />

       </div>
    </div>
  )
}

export default ProductDetail
