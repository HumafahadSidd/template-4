import React from 'react'
import { notFound } from 'next/navigation';
export default function reviewId({
    params,
}:{
    params:{
        ProductId:string;
        reviewId:string;
    };
}) {
  if(parseInt(params.reviewId)>1000){
    notFound();
  }
  return (
    <div>
      review for{params.reviewId} for product{params.ProductId}
    </div>
  )
}
