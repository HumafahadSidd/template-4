import React from 'react'

const Product = ({params}:{params:{product:string}}) =>{  
    console.log(params.product)
  return (
    <div>
        <h2>product detail</h2>
      {params.product}
      
    </div>
  )
}

export default Product
