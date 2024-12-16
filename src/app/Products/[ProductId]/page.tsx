import React from 'react'

export default function ProductDetails({
    params,
}:{
   params:{ ProductId:string};
 }) {
  return (
    <div>
      details about product {params.ProductId} 

    </div>
  )
}
