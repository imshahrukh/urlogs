import React from 'react'

export default function ProductPreview() {
    return (
        <div className='relative border py-4 border-gray-500 rounded'>
            <img src='/img/show.png' alt="" />
            <div className='flex justify-between mt-5 items-center px-10'>
                <div className=' bottom-5 left-5 bg-gray-100 flex gap-x-2 py-1 px-3 rounded-3xl'>
                    <img src="/icons/camera icon.svg" alt="" />
                    <div>1/08</div>
                </div>
                <div className='flex gap-x-2'>
                    <img className='cursor-pointer bottom-5 right-16' src="/icons/arrow left.svg" alt="" />
                    <img className='cursor-pointer bottom-5 right-5' src="/icons/arrow right.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
