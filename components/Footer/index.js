import Dropdown from '../Dropdown'
import { categories, fourthMenue, businessServices, help } from '../../util/Footer'
export default function Footer() {
    const headingClasses = 'text-[18px] font-semibold'
    const contentClasses = 'text-[14px]'
    return (
        <div className="bg-[#F6F8FB] container-div relative z-[1000]">
            <div className='pt-52 pb-20'>
                <div className="grid grid-cols-5 gap-x-10">
                    <div className="flex flex-col gap-y-5">
                        <div><img src="/icons/Logo.svg" /></div>
                        <div className="text-[18px]">Sign Up For Newsletters</div>
                        <div className="text-[14px]">Get E-mail updates about our latest shop and <span className="text-[#4592FF]">special offers.</span> </div>
                        <div className="bg-white text=[20px] flex justify-between overflow-hidden text-sm rounded">
                            <input id="price5" className="w-3/4 pl-3" placeholder="Enter your email" />
                            <div className="bg-black text-white text-center py-3 px-1 w-[80px]">Sign Up</div>
                        </div>
                        <Dropdown textColor="text-black" />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h1 className={`${headingClasses}`}>Product Categories</h1>
                        <div className={`flex flex-col gap-y-2 ${contentClasses}`}>
                            {
                                categories.map(cat => {
                                    return (
                                        <div>{cat}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h1 className={`${headingClasses}`}>Fourth Menu</h1>
                        <div className={`flex flex-col gap-y-2 ${contentClasses}`}>
                            {
                                fourthMenue.map(menu => {
                                    return (
                                        <div>{menu}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h1 className={`${headingClasses}`}>Business Services</h1>
                        <div className={`flex flex-col gap-y-2 ${contentClasses}`}>
                            {
                                businessServices.map(item => {
                                    return (
                                        <div>{item}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h1 className={`${headingClasses}`}>Let Us Help You</h1>
                        <div className={`flex flex-col gap-y-2 ${contentClasses}`}>
                            {
                                help.map(cat => {
                                    return (
                                        <div>{cat}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded mt-10 px-4 py-4 w-full flex items-center justify-between'>
                    <div className='text-[14px] text-[#5A7184]'>CP © Copyright 2022, Inc. All rights reserved</div>
                    <div className='flex items-center justify-between gap-x-6'>
                        <img src='/icons/footer Icons/Facebook.svg' />
                        <img src='/icons/footer Icons/Twitter.svg' />
                        <img src='/icons/footer Icons/LinkedIN.svg' />
                        <img src='/icons/footer Icons/Instagram.svg' />
                        <img src='/icons/footer Icons/Github.svg' />
                    </div>
                </div>
            </div>

        </div>
    )
}