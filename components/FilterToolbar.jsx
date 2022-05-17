import React from 'react'
import Dropdown from './Dropdown';
import DropDown2 from './Dropdown2';
import FilterDropdown from './Dropdowns/FilterDropdown';

export const FilterToolbar = () => {
    const navigationList = ['Home', 'All Categories', "Women's Clothing", "Dresses"];
  return (
    <div className='flex bg-[#F6F8FB] py-4 px-4 rounded justify-between items-center mt-10'>
        <div className='flex items-center gap-x-4'>
            {
                navigationList.map((item, key) => {
                    return(
                        <>
                            <div className='text-[14px] font-md'>{item}</div>
                            <div className='font-bold'>{`>`}</div>
                        </>
                    )
                })
            }
        </div>
        <div className='flex gap-x-8'>
            {/* <div className=''> */}
                <FilterDropdown label="Filter" totalSelected={4} />
                <FilterDropdown label="Best Match" />
            {/* </div> */}
        </div>
    </div>
  )
}
