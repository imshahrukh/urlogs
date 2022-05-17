import React from 'react'

export default function FilterDropdown({label, totalSelected}) {
    const list = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',];
  return (
    <div className='text-[#212B36]'>
        <div className="label flex items-center">
            <div className='text-[14px] font-md'>{label}</div>
            {
                totalSelected? 
            <div className='bg-[#4B5157] flex ml-1 justify-center items-center w-[20px] h-[20px] text-white text-[12px] rounded-full'>{totalSelected}</div>: null
            }
            <div className='rotate-90 font-bold ml-3'>{`>`}</div>
        </div>
        <div>
            {
                list.map((item, key) => {
                    return (
                        <>

                        </>
                    )
                })
            }
        </div>
    </div>
  )
}
