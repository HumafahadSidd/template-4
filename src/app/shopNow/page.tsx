import React from 'react'
import Link from 'next/link'
export default function ShopNow() {
  return (
    <div>
      <Link href="/shopNow/cart">Cart</Link>
      <Link href="/shopNow/cart/ordercompleted">Order Completed</Link>
    </div>
  )
}

