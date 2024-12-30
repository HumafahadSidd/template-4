// import React from 'react'
// import Image from 'next/image';

// export default function Cart() {
//   return (
//     <div className='flex flex-wrap mt-[50px] mb-[100px]'>
//       <div className='grid lg:grid-cols-3 grid-cols-1 w-full lg:w-[40%] h-auto lg:h-[800px]'>
//         {/* image with specs div */}
//         <div className='flex justify-between flex-wrap p-2'>
//           <div className='flex-shrink-0'>
//             <Image src={"/27.png"} alt={"pic"} height={90} width={90} />
//           </div>
//           <div className='flex-grow'>
//             <h1 className='text-lg lg:text-xl'>chair</h1>
//             <p className='text-sm lg:text-base'>color: brown-red</p>
//             <p className='text-sm lg:text-base'>size: M</p>
//           </div>
//         </div>
//         {/* end image with specs div */}
//         <div className='p-2'>
//           <h3 className='ml-7 text-sm lg:text-base text-semibold'>Price</h3>
//           <p className='text-sm lg:text-base'>$32.00</p>
//         </div>
//         <div className='p-2'>
//           <h2 className='text-sm lg:text-base'>Quantity</h2>
//         </div>
//         <div className='p-2'>
//           <h2 className='text-sm lg:text-base'>Total</h2>
//         </div>
//       </div>
//       <div className='w-full lg:w-[40%] h-auto lg:h-[800px] mt-4 lg:mt-0'>
//         {/* Add any additional content or styling for this section */}
//       </div>
//     </div>
//   )
// }
import React from 'react';
import Image from 'next/image';

const Cart: React.FC = () => {
  return (
    <div className="flex w-full border-opacity-50 p-4 h-screen ">
      <div className="card bg-gray-100 text-black rounded-box grid h-20 place-items-start mb-4 ">
<div>
<div className='flex gap-10'>
  <div>
    <Image src={"/35.png"} alt={"chair"} height={90} width={90} /> </div>
<div>
  <p>headimg</p>
  <p>Size:</p>
  
</div>
<div>
  
  <p>Quantity:</p>
  </div>
  <div>
  
  <p>Price:</p>
  </div>
  <div>
  
  <p>Total:</p>
  </div>
  </div>
{/* 2 */}
<div>
<div className='flex gap-10'>
  <div>
    <Image src={"/35.png"} alt={"chair"} height={90} width={90} /> </div>
<div>
  <p>headimg</p>
  <p>Size:</p>
  
</div>
<div>
  
  <p>Quantity:</p>
  </div>
  <div>
  
  <p>Price:</p>
  </div>
  <div>
  
  <p>Total:</p>
  </div>
  </div>
{/* 3 */}
<div>
<div className='flex gap-10'>
  <div>
    <Image src={"/35.png"} alt={"chair"} height={90} width={90} /> </div>
<div>
  <p>headimg</p>
  <p>Size:</p>
  
</div>
<div>
  <h1>Quantity:</h1>
  <p>Quantity:</p>
  </div>
  <div>
  <h1>Price:</h1>
  <p>Price:</p>
  </div>
  <div>
  <h1>Total:</h1>
  <p>Total:</p>
  </div>
  </div>


  <p></p>
</div>
</div>
      </div>
      </div>
      <div>
        <div className="card bg-gray-100 text-black rounded-box grid h-20 place-items-start mb-4 ">
      </div>
      </div>
      
    
  );
}

export default Cart;
