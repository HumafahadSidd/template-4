import React from 'react'
import Image from 'next/image'
const ShopLeft = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap">
      {/* // <!-- Sidebar Section --> */}
      <div className="w-full lg:w-1/4 px-4">
        {/* <!-- Product Brand --> */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Product Brand</h2>
          <ul className="text-gray-700 space-y-2">
            <li><input type="checkbox" >Custom Furniture</input> </li>
            <li><input type="checkbox">  Fusion Decor</input></li>
            <li><input type="checkbox" > Unique Furniture</input></li>
            <li><input type="checkbox"> Dream Furniture </input></li>
            <li><input type="checkbox">  Young Repurposed</input></li>
          </ul>
        </div>

        {/* // <!-- Discount Offer --> */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Discount Offer</h2>
          <ul className="text-gray-700 space-y-2">
            <li><input type="checkbox" className="mr-2"> 20% Cashback</input></li>
            <li><input type="checkbox"className="mr-2"> 5% Cashback</input></li>
            <li><input type="checkbox" className="mr-2"> 25% Discount</input></li>
          </ul>
        </div>

        {/* // <!-- Categories --> */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Prestashop</li>
            <li>Magento</li>
            <li>Bigcommerce</li>
            <li>osCommerce</li>
            <li>Artcart</li>
            <li>Jewellery</li>
          </ul>
        </div>

        {/* // <!-- Price Filter --> */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Price Filter</h2>
          <ul className="text-gray-700 space-y-2">
            <li><input type="checkbox" className="mr-2">$100 - $150</input></li>
            <li><input type="checkbox" className="mr-2">$150 - $200</input></li>
            <li><input type="checkbox" className="mr-2">$200 - $250</input></li>
          </ul>
        </div>

        {/* // <!-- Filter By Color --> / */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Filter By Color</h2>
          <div className="flex space-x-3">
            <span className="w-5 h-5 rounded-full bg-blue-500"></span>
            <span className="w-5 h-5 rounded-full bg-orange-500"></span>
            <span className="w-5 h-5 rounded-full bg-green-500"></span>
            <span className="w-5 h-5 rounded-full bg-purple-500"></span>
          </div>
        </div>
      </div>

      {/* <!-- Product Grid Section --> */}
      <div className="w-full lg:w-3/4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* <!-- Product Card --> */}
          <div className="p-4 border rounded-lg shadow-md">
            <Image src={"https://dummyimage.com/420x260"}  alt={"product"} height={300} width={300}/>
            <div className="mt-4">
              <h3 className="text-gray-500 text-sm mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 text-lg font-medium">Dictum Morbi</h2>
              <p className="mt-1 text-gray-700">$96.00 <span className="text-red-500 line-through">$120.00</span></p>
              <div className="flex mt-2 space-x-2 text-yellow-500">
                ★★★★☆ 
                {/* <!-- Example rating --> */}
              </div>
            </div>
          </div>

          {/* <!-- Repeat for other products --> */}
          <div className="p-4 border rounded-lg shadow-md">
            <Image src={"https://dummyimage.com/421x261"} alt={"product"} height={300} width={300}/>
            <div className="mt-4">
              <h3 className="text-gray-500 text-sm mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 text-lg font-medium">Sodales Sit</h2>
              <p className="mt-1 text-gray-700">$80.00 <span className="text-red-500 line-through">$100.00</span></p>
              <div className="flex mt-2 space-x-2 text-yellow-500">
                ★★★★☆
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg shadow-md">
            <Image src={"https://dummyimage.com/422x262"} alt={"product"} height={300} width={300} />
            <div className="mt-4">
              <h3 className="text-gray-500 text-sm mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 text-lg font-medium">Mauris Quis</h2>
              <p className="mt-1 text-gray-700">$120.00</p>
              <div className="flex mt-2 space-x-2 text-yellow-500">
                ★★★★★
              </div>
            </div>
          </div>

          {/* <!-- Add more products as needed --> */}
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ShopLeft
