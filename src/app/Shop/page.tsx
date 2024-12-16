// import React from 'react'
// import Image from 'next/image'

// import Navbar from '@/components/Navbar.'
// import GridDefault from '@/components/GridDefault'
// export default function Shop() {
//   return (
//     <div>
//       <div>
//         <GridDefault />
//         <Navbar />
//         <div className='border shadow-sm ml-6 mt-4'>
          
//           <div>
//             <Image src={"/p3/Rectangle 32.png"} alt={"design1"} height={200} width={300} />
//           </div>
//           <div className='mt-4 ml-5 '>
//             <div className='flex gap-2'>
//               <h1 className='text-[#111C85] text-2xl font-semibold' >Accumsan tincidunt</h1>
//               <div className='mt-2'>
                
//                 <Image src={"/p3/Ellipse 24.png"} alt={"design1"} height={20} width={20} />
//               </div>
//               <div className='mt-2'>
//                 <Image src={"/p3/Ellipse 25.png"} alt={"design1"} height={20} width={20} />
//                 </div>
//               <div className='mt-2'>
//                  <Image src={"/p3/Ellipse 26.png"} alt={"design1"} height={20} width={20} />
//               </div>
//             </div>
//             <div className='flex gap-2'>
//               <p className='text-2xl text-gray-500 hover:text-pink-500'>$26.00</p>
//               <p className='text-2xl text-gray-500 hover:text-pink-500'>$52.00</p>
//               <div className='flex gap-2'>
//               <div className='mt-2'>
//                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
//               </div>
//               <div className='mt-2'>
//                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
//               </div>
//               <div className='mt-2'>
//                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
//               </div>
//               <div className='mt-2'>
//                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
//               </div>
//               <div className='mt-2'>
//                  <Image src={"/p3/vector.png"} alt={"design1"} height={20} width={20} />
//               </div>
//               </div>
//           <div>                
//           <div className='flex flex-col'>              
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            
//               <div className='flex'>
//             <div className=''>
//                  <Image src={"/p3/uil_heart-alt.png"} alt={"design1"} height={20} width={20} />
//               </div>
//               <div className=''>
//                  <Image src={"/p3/uil_search-plus (1).png"} alt={"design1"} height={20} width={20} />
//               </div>
//               <div className=''>
//                  <Image src={"/p3/fluent_cart-24-regular.png"} alt={"design1"} height={20} width={20} />
//               </div>
//               </div>
//             </div>
//             </div>
//             {/* <div>
//               <p>price</p>
//               <button>add to cart</button>
//             </div> */}
//           </div>
//         </div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
// <div>

// </div>



//     </div>
//     </div>
//   )
// }
import GridDefault from '@/components/GridDefault'
import Navbar from '@/components/Navbar.'
import React from 'react'
import Image from 'next/image'
export default function Shop() {
  return (
    <div>
<Navbar />
<GridDefault />
<div className='ml-[250px] '>
<div className='border  shadow-sm mt-4 ml-6 h-[400px] pt-4 justify-between'>
<div>
  <Image src={"/p3/Rectangle 32.png"} alt={"des1"} height={300} width={300} />
</div>

<div className='flex gap-2'>
  <h2 className='text-[#111C85] font-semibold text-2xl mt-2'>Accumsan tincidunt</h2>
  {/* <div className='flex'> */}

  <div className='mt-4'>    
   <Image src={"/p3/Ellipse 24.png"} alt={"design1"} height={20} width={20} />
 </div>
   <div className='mt-4'>
     <Image src={"/p3/Ellipse 25.png"} alt={"design1"} height={20} width={20} />
      </div>
    <div className='mt-4'>
    <Image src={"/p3/Ellipse 26.png"} alt={"design1"} height={20} width={20} />
    </div>
        </div>
              
 
 <div className='flex gap-2'>
 <p>$26.00</p> 
 <p className='text-pink-400'><del>$52.00</del></p>
 
<div className='flex gap-2 hover:text-gray-400'>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                 <Image src={"/p3/vector.png"} alt={"design1"} height={20} width={20} />
               </div>
           </div>
           </div>
 <div className='text-left w-[600px] h-[50px]'>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Magna in est adipiscing in phasellus non in justo..</p>
 </div>
    <div className='mt-2 flex gap-2'>            
    
            <div className=''>
                  <Image src={"/p3/uil_heart-alt.png"} alt={"design1"} height={20} width={20} />
            </div>
               <div className=''>
                  <Image src={"/p3/uil_search-plus (1).png"} alt={"design1"} height={20} width={20} />
              </div>
               <div className=''>
                  <Image src={"/p3/fluent_cart-24-regular.png"} alt={"design1"} height={20} width={20} />
               </div>
  </div>

 </div>
 <div className='border shadow-sm mt-4 ml-6 h-[400px] pt-4 justify-between'>
<div>
  <Image src={"/p3/Rectangle 32.png"} alt={"des1"} height={300} width={300} />
</div>
<div className='flex gap-2'>
  <h2 className='text-[#111C85] font-semibold text-2xl mt-2'>Accumsan tincidunt</h2>
  {/* <div className='flex'> */}

  <div className='mt-4'>    
   <Image src={"/p3/Ellipse 24.png"} alt={"design1"} height={20} width={20} />
 </div>
   <div className='mt-4'>
     <Image src={"/p3/Ellipse 25.png"} alt={"design1"} height={20} width={20} />
      </div>
    <div className='mt-4'>
    <Image src={"/p3/Ellipse 26.png"} alt={"design1"} height={20} width={20} />
    </div>
        </div>
              
 
 <div className='flex gap-2'>
 <p>$26.00</p> 
 <p className='text-pink-400'><del>$52.00</del></p>
 
<div className='flex gap-2 hover:text-gray-400'>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                 <Image src={"/p3/vector.png"} alt={"design1"} height={20} width={20} />
               </div>
           </div>
           </div>
 <div className='text-left w-[600px] h-[50px]'>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Magna in est adipiscing in phasellus non in justo..</p>
 </div>
    <div className='mt-2 flex gap-2'>            
    
            <div className=''>
                  <Image src={"/p3/uil_heart-alt.png"} alt={"design1"} height={20} width={20} />
            </div>
               <div className=''>
                  <Image src={"/p3/uil_search-plus (1).png"} alt={"design1"} height={20} width={20} />
              </div>
               <div className=''>
                  <Image src={"/p3/fluent_cart-24-regular.png"} alt={"design1"} height={20} width={20} />
               </div>
  </div>

 </div>
 <div className='border shadow-sm mt-4 ml-6 h-[400px] pt-4 justify-between'>
<div>
  <Image src={"/p3/Rectangle 32.png"} alt={"des1"} height={300} width={300} />
</div>
<div className='flex gap-2'>
  <h2 className='text-[#111C85] font-semibold text-2xl mt-2'>Accumsan tincidunt</h2>
  {/* <div className='flex'> */}

  <div className='mt-4'>    
   <Image src={"/p3/Ellipse 24.png"} alt={"design1"} height={20} width={20} />
 </div>
   <div className='mt-4'>
     <Image src={"/p3/Ellipse 25.png"} alt={"design1"} height={20} width={20} />
      </div>
    <div className='mt-4'>
    <Image src={"/p3/Ellipse 26.png"} alt={"design1"} height={20} width={20} />
    </div>
        </div>
              
 
 <div className='flex gap-2'>
 <p>$26.00</p> 
 <p className='text-pink-400'><del>$52.00</del></p>
 
<div className='flex gap-2 hover:text-gray-400'>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                 <Image src={"/p3/vector.png"} alt={"design1"} height={20} width={20} />
               </div>
           </div>
           </div>
 <div className='text-left w-[600px] h-[50px]'>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Magna in est adipiscing in phasellus non in justo..</p>
 </div>
    <div className='mt-2 flex gap-2'>            
    
            <div className=''>
                  <Image src={"/p3/uil_heart-alt.png"} alt={"design1"} height={20} width={20} />
            </div>
               <div className=''>
                  <Image src={"/p3/uil_search-plus (1).png"} alt={"design1"} height={20} width={20} />
              </div>
               <div className=''>
                  <Image src={"/p3/fluent_cart-24-regular.png"} alt={"design1"} height={20} width={20} />
               </div>
  </div>

 </div>
 <div className='border shadow-sm mt-4 ml-6 h-[400px] pt-4 justify-between'>
<div>
  <Image src={"/p3/Rectangle 32.png"} alt={"des1"} height={300} width={300} />
</div>
<div className='flex gap-2'>
  <h2 className='text-[#111C85] font-semibold text-2xl mt-2'>Accumsan tincidunt</h2>
  {/* <div className='flex'> */}

  <div className='mt-4'>    
   <Image src={"/p3/Ellipse 24.png"} alt={"design1"} height={20} width={20} />
 </div>
   <div className='mt-4'>
     <Image src={"/p3/Ellipse 25.png"} alt={"design1"} height={20} width={20} />
      </div>
    <div className='mt-4'>
    <Image src={"/p3/Ellipse 26.png"} alt={"design1"} height={20} width={20} />
    </div>
        </div>
              
 
 <div className='flex gap-2'>
 <p>$26.00</p> 
 <p className='text-pink-400'><del>$52.00</del></p>
 
<div className='flex gap-2 hover:text-gray-400'>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                 <Image src={"/p3/vector.png"} alt={"design1"} height={20} width={20} />
               </div>
           </div>
           </div>
 <div className='text-left w-[600px] h-[50px]'>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Magna in est adipiscing in phasellus non in justo..</p>
 </div>
    <div className='mt-2 flex gap-2'>            
    
            <div className=''>
                  <Image src={"/p3/uil_heart-alt.png"} alt={"design1"} height={20} width={20} />
            </div>
               <div className=''>
                  <Image src={"/p3/uil_search-plus (1).png"} alt={"design1"} height={20} width={20} />
              </div>
               <div className=''>
                  <Image src={"/p3/fluent_cart-24-regular.png"} alt={"design1"} height={20} width={20} />
               </div>
  </div>

 </div>
 <div className='border shadow-sm mt-4 ml-6 h-[400px] pt-4 justify-between'>
<div>
  <Image src={"/p3/Rectangle 32.png"} alt={"des1"} height={300} width={300} />
</div>
<div className='flex gap-2'>
  <h2 className='text-[#111C85] font-semibold text-2xl mt-2'>Accumsan tincidunt</h2>
  {/* <div className='flex'> */}

  <div className='mt-4'>    
   <Image src={"/p3/Ellipse 24.png"} alt={"design1"} height={20} width={20} />
 </div>
   <div className='mt-4'>
     <Image src={"/p3/Ellipse 25.png"} alt={"design1"} height={20} width={20} />
      </div>
    <div className='mt-4'>
    <Image src={"/p3/Ellipse 26.png"} alt={"design1"} height={20} width={20} />
    </div>
        </div>
              
 
 <div className='flex gap-2'>
 <p>$26.00</p> 
 <p className='text-pink-400'><del>$52.00</del></p>
 
<div className='flex gap-2 hover:text-gray-400'>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                 <Image src={"/p3/vector.png"} alt={"design1"} height={20} width={20} />
               </div>
           </div>
           </div>
 <div className='text-left w-[600px] h-[50px]'>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Magna in est adipiscing in phasellus non in justo..</p>
 </div>
    <div className='mt-2 flex gap-2'>            
    
            <div className=''>
                  <Image src={"/p3/uil_heart-alt.png"} alt={"design1"} height={20} width={20} />
            </div>
               <div className=''>
                  <Image src={"/p3/uil_search-plus (1).png"} alt={"design1"} height={20} width={20} />
              </div>
               <div className=''>
                  <Image src={"/p3/fluent_cart-24-regular.png"} alt={"design1"} height={20} width={20} />
               </div>
  </div>

 </div>
 <div className='border shadow-sm mt-4 ml-6 h-[400px] pt-4 justify-between'>
<div>
  <Image src={"/p3/Rectangle 32.png"} alt={"des1"} height={300} width={300} />
</div>
<div className='flex gap-2'>
  <h2 className='text-[#111C85] font-semibold text-2xl mt-2'>Accumsan tincidunt</h2>
  {/* <div className='flex'> */}

  <div className='mt-4'>    
   <Image src={"/p3/Ellipse 24.png"} alt={"design1"} height={20} width={20} />
 </div>
   <div className='mt-4'>
     <Image src={"/p3/Ellipse 25.png"} alt={"design1"} height={20} width={20} />
      </div>
    <div className='mt-4'>
    <Image src={"/p3/Ellipse 26.png"} alt={"design1"} height={20} width={20} />
    </div>
        </div>
              
 
 <div className='flex gap-2'>
 <p>$26.00</p> 
 <p className='text-pink-400'><del>$52.00</del></p>
 
<div className='flex gap-2 hover:text-gray-400'>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                 <Image src={"/p3/vector.png"} alt={"design1"} height={20} width={20} />
               </div>
           </div>
           </div>
 <div className='text-left w-[600px] h-[50px]'>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Magna in est adipiscing in phasellus non in justo..</p>
 </div>
    <div className='mt-2 flex gap-2'>            
    
            <div className=''>
                  <Image src={"/p3/uil_heart-alt.png"} alt={"design1"} height={20} width={20} />
            </div>
               <div className=''>
                  <Image src={"/p3/uil_search-plus (1).png"} alt={"design1"} height={20} width={20} />
              </div>
               <div className=''>
                  <Image src={"/p3/fluent_cart-24-regular.png"} alt={"design1"} height={20} width={20} />
               </div>
  </div>

 </div>
 <div className='border shadow-sm mt-4 ml-6 h-[400px] pt-4 justify-between'>
<div>
  <Image src={"/p3/Rectangle 32.png"} alt={"des1"} height={300} width={300} />
</div>
<div className='flex gap-2'>
  <h2 className='text-[#111C85] font-semibold text-2xl mt-2'>Accumsan tincidunt</h2>
  {/* <div className='flex'> */}

  <div className='mt-4'>    
   <Image src={"/p3/Ellipse 24.png"} alt={"design1"} height={20} width={20} />
 </div>
   <div className='mt-4'>
     <Image src={"/p3/Ellipse 25.png"} alt={"design1"} height={20} width={20} />
      </div>
    <div className='mt-4'>
    <Image src={"/p3/Ellipse 26.png"} alt={"design1"} height={20} width={20} />
    </div>
        </div>
              
 
 <div className='flex gap-2'>
 <p>$26.00</p> 
 <p className='text-pink-400'><del>$52.00</del></p>
 
<div className='flex gap-2 hover:text-gray-400'>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                 <Image src={"/p3/vector.png"} alt={"design1"} height={20} width={20} />
               </div>
           </div>
           </div>
 <div className='text-left w-[600px] h-[50px]'>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Magna in est adipiscing in phasellus non in justo..</p>
 </div>
    <div className='mt-2 flex gap-2'>            
    
            <div className=''>
                  <Image src={"/p3/uil_heart-alt.png"} alt={"design1"} height={20} width={20} />
            </div>
               <div className=''>
                  <Image src={"/p3/uil_search-plus (1).png"} alt={"design1"} height={20} width={20} />
              </div>
               <div className=''>
                  <Image src={"/p3/fluent_cart-24-regular.png"} alt={"design1"} height={20} width={20} />
               </div>
  </div>

 </div>
 <div className='border shadow-sm mt-4 ml-6 h-[400px] pt-4 justify-between'>
<div>
  <Image src={"/p3/Rectangle 32.png"} alt={"des1"} height={300} width={300} />
</div>
<div className='flex gap-2'>
  <h2 className='text-[#111C85] font-semibold text-2xl mt-2'>Accumsan tincidunt</h2>
  {/* <div className='flex'> */}

  <div className='mt-4'>    
   <Image src={"/p3/Ellipse 24.png"} alt={"design1"} height={20} width={20} />
 </div>
   <div className='mt-4'>
     <Image src={"/p3/Ellipse 25.png"} alt={"design1"} height={20} width={20} />
      </div>
    <div className='mt-4'>
    <Image src={"/p3/Ellipse 26.png"} alt={"design1"} height={20} width={20} />
    </div>
        </div>
              
 
 <div className='flex gap-2'>
 <p>$26.00</p> 
 <p className='text-pink-400'><del>$52.00</del></p>
 
<div className='flex gap-2 hover:text-gray-400'>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                 <Image src={"/p3/vector.png"} alt={"design1"} height={20} width={20} />
               </div>
           </div>
           </div>
 <div className='text-left w-[600px] h-[50px]'>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Magna in est adipiscing in phasellus non in justo..</p>
 </div>
    <div className='mt-2 flex gap-2'>            
    
            <div className=''>
                  <Image src={"/p3/uil_heart-alt.png"} alt={"design1"} height={20} width={20} />
            </div>
               <div className=''>
                  <Image src={"/p3/uil_search-plus (1).png"} alt={"design1"} height={20} width={20} />
              </div>
               <div className=''>
                  <Image src={"/p3/fluent_cart-24-regular.png"} alt={"design1"} height={20} width={20} />
               </div>
  </div>

 </div>
 <div className='border shadow-sm mt-4 ml-6 h-[400px] pt-4 justify-between'>
<div>
  <Image src={"/p3/Rectangle 32.png"} alt={"des1"} height={300} width={300} />
</div>
<div className='flex gap-2'>
  <h2 className='text-[#111C85] font-semibold text-2xl mt-2'>Accumsan tincidunt</h2>
  {/* <div className='flex'> */}

  <div className='mt-4'>    
   <Image src={"/p3/Ellipse 24.png"} alt={"design1"} height={20} width={20} />
 </div>
   <div className='mt-4'>
     <Image src={"/p3/Ellipse 25.png"} alt={"design1"} height={20} width={20} />
      </div>
    <div className='mt-4'>
    <Image src={"/p3/Ellipse 26.png"} alt={"design1"} height={20} width={20} />
    </div>
        </div>
              
 
 <div className='flex gap-2'>
 <p>$26.00</p> 
 <p className='text-pink-400'><del>$52.00</del></p>
 
<div className='flex gap-2 hover:text-gray-400'>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                  <Image src={"/p3/ant-design_star-filled.png"} alt={"design1"} height={20} width={20} />
               </div>
               <div className='mt-2'>
                 <Image src={"/p3/vector.png"} alt={"design1"} height={20} width={20} />
               </div>
           </div>
           </div>
 <div className='text-left w-[600px] h-[50px]'>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Magna in est adipiscing in phasellus non in justo..</p>
 </div>
    <div className='mt-2 flex gap-2'>            
    
            <div className=''>
                  <Image src={"/p3/uil_heart-alt.png"} alt={"design1"} height={20} width={20} />
            </div>
               <div className=''>
                  <Image src={"/p3/uil_search-plus (1).png"} alt={"design1"} height={20} width={20} />
              </div>
               <div className=''>
                  <Image src={"/p3/fluent_cart-24-regular.png"} alt={"design1"} height={20} width={20} />
               </div>
  </div>

 </div>

 
{/* </div> */}


</div>
    </div>
  )
}
