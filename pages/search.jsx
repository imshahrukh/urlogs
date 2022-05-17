import React from 'react'
import { FilterToolbar } from '../components/FilterToolbar'
import { ProductCard } from '../components/ProductCard'

export default function search() {
  return (
    <div className=''>
      <div className="wrapper container-div">
        <FilterToolbar />
        <div className='my-20 grid xl:grid-cols-4 lg:grid-cols-2 gap-4'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className='flex justify-between items-center'>
          <div className='text-[36px] font-semibold'>Related Products</div>
          <div className='flex items-center gap-x-3 py-1 px-3 rounded border border-[#4592FF]'>
            <img src="/icons/filter.svg" alt="" />
            <div className='text-[16px] text-[#4592FF] font-md'>Filter</div>
          </div>
        </div>
        <div className='my-20 grid xl:grid-cols-4 lg:grid-cols-2 gap-4'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
