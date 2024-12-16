import Link from 'next/link'
import React from 'react'

export default function GridDefault() {
  return (
    <div>
       <div className='w-full h-[286px] bg-[#F6F5FF]'>
            
            <div className='ml-[200px] pt-16'>
              <h1 className='text-[#101750] font-bold text-3xl'>Shop Grid Default</h1>
              <div className='flex hover:text-pink-400 space-x-2 text-center'>
                <Link href="/">Home</Link>
                <Link href="/Shop">Shop</Link>
                <Link href="#">Grid Default</Link>
              </div>
            </div>
          </div>
    </div>
  )
}
