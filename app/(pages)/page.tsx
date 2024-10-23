





import React, { Suspense } from 'react'
import { Product } from './types'
import ProductCard from './productList/_components/ProductCard/ProductCard';

async function page() {

  const data = await new Promise<Product[]>(async (resolve, reject) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        cache: "no-cache"
      });
      const json = await response.json();
      setTimeout(() => {
        resolve(json);
      }, 2000); // 2000 milliseconds = 2 seconds
    } catch (error) {
      reject(error);
    }
  });


  return (

    <Suspense fallback={<div>loading...</div>}>
      <div className='grid grid-cols-4 row-auto gap-3'>

        {
          data.map((v) => (
            <ProductCard key={v.id} {...v} />

          ))
        }
      </div>
    </Suspense>
  )
}

export default page