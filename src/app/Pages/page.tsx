
import React from 'react'
import Image from 'next/image';
import Navbar from '@/components/Navbar.';
import GridDefault from '@/components/GridDefault';


export default function Pages() {
const imageRows = [
  {
    row: 1,
    images: [
      { src: "/p2/e.c1.png", alt: "sofa", height: 300, width: 270 },
      { src: "/p2/ec5.png", alt: "sofa", height: 300, width: 270 },
      { src: "/Ecommerce accesories (2).png", alt: "sofa", height: 300, width: 270 },
      { src: "/ec5.png", alt: "sofa", height: 300, width: 270 },
    ],
  },
  {
    row: 2,
    images: [
      { src: "/p2/Ecommerce Accesories (1).png", alt: "sofa", height: 300, width: 270 },
      { src: "/p2/Ecommerce accesories (2).png", alt: "sofa", height: 300, width: 270 },
      { src: "/p2/Ecommerce accesories (3).png", alt: "sofa", height: 300, width: 270 },
      { src: "/p2/Ecommerce accesories (4).png", alt: "sofa", height: 300, width: 270 },
    ],
  },
  {
    row: 3,
    images: [
      { src: "/p2/Ecommerce accesories (5).png", alt: "sofa", height: 300, width: 270 },
      { src: "/p2/Ecommerce accesories (4).png", alt: "sofa", height: 300, width: 270 },
      { src: "/Ecommerce accesories.png", alt: "sofa", height: 300, width: 270 },
      { src: "/Ecommerce accesories (2).png", alt: "sofa", height: 300, width: 270 },
    ],
  },
  {
    row: "banner",
    images: [
      { src: "/image 1174.png", alt: "subscribeBanner", height: 100, width: 800 },
    ],
  },
];

  return (
    <div>
    <div>
    <GridDefault />
          </div>
    <section className="mt-8 justify-center ml-[200px] ">
      <div className='m-6'>
      <Navbar />
      </div>
      {imageRows.map((row, index) => (
        <div key={index} className={`flex ${row.row === 'banner' ? 'justify-center' : 'space-x-4'}`}>
          {row.images.map((img, i) => (
            <div key={i} className={row.row === 'banner' ? 'mt-6 mb-2' :''}>
              <Image src={img.src} alt={img.alt} height={img.height} width={img.width} />
            </div>
          ))}
        </div>
        
        
      ))}
    </section>
    </div>
  );
}

