import React from 'react'

export default function Slug({params} :{params:
  {slug:string[]},
  searchParams:{name:string}}
) {
  console.log(params)
  if (params.slug[0]?.length == 1){
    return (
      
<div>
{params.slug[0]} page

</div>
    );

}
if(params.slug.length == 2){
    
  return (
    <div>
      <h1>{params?.slug[1]}</h1>
    </div>
  );
}
}