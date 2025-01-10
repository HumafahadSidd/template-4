'use client'
import React from 'react'

import { ToastContainer, toast } from 'react-toastify';

export const AddToCartToastify = () => {
    const notify = () =>
    toast('🦄 Product Added succesfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    
        });
    return (
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  )
}
