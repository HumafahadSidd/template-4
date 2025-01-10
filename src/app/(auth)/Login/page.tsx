import LoginForm from '@/components/LoginForm';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
export default function MyAccount() {
  return (
    <div>
      <section className="h-[1400px]">
        {/* Header Section */}
        <div className="w-full h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center">
          <h1 className="text-[#101750] font-bold text-3xl mb-4">My Account</h1>
          <div className="flex space-x-4 text-center">
            <Link href="/" className="hover:text-pink-400">
              Home
            </Link>
            <Link href="/Shop" className="hover:text-pink-400">
              Shop
            </Link>
            <Link href="#" className="hover:text-pink-400">
              My Account
            </Link>
          </div>
                 </div>

        {/* Login Form Section */}
        <div className="flex justify-center mt-10">
          <LoginForm />
        </div>
        <div className='pl-[300px]'>
        <Image src={"/image 1174.png"} height={500} width={800} alt={"image icons"}/>
</div>
      </section>
    </div>
  );
}
