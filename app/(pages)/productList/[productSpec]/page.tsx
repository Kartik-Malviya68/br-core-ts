import React from 'react'

function page({params} : {params: {productSpec: string}}) {
    
  return (
    <div>{params.productSpec}</div>
  )
}

export default page