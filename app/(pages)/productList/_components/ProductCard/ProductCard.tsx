import React from 'react'
import Image from 'next/image'
import { Product } from '@/app/(pages)/types'

function ProductCard(props: Product) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image
        src={props.image}
        alt={props.id.toString()}
        width={500}
        height={500}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">
          {props.category}
        </h2>
        <p className="text-gray-700 text-base">
          {props.description}        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-900 font-semibold">{`Price: ${props.price.toLocaleString(
          "en-IN", { style: "currency", currency: "INR" }
        )}`}</p>
        <p className="text-gray-600">{`Category: ${props.category}`}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★ {props.rating.rate}</span>
          <span className="ml-2 text-gray-600">{`(${props.rating.count} reviews)`}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard