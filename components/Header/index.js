import Logo from '../../assets/Logo.svg'
import Dropdown from '../Dropdown'
import DropDown2 from '../Dropdown2'
import SearchBar from '../SearchBar'
export default function Header() {
    return (
        <div className="bg-header fixed w-full top-0 z-[3000] header">
            <div className="flex justify-between">
                <div className="flex gap-x-4">
                    <img src="/icons/Facebook.svg" alt="fb-icon" />
                    <img src="/icons/Twitter.svg" alt="fb-icon" />
                    <img src="/icons/Youtube.svg" alt="fb-icon" />
                    <img src="/icons/Instagram.svg" alt="fb-icon" />
                </div>
                <div className="flex gap-x-4 items-center text-white">
                    <div>Order tracking</div>
                    <div>Help</div>
                    <div className='z-[1000]'>
                        <Dropdown />
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-cente">
                <div>
                    <img src="/icons/Logo.svg" alt="logo" /> 
                </div>
                <div>
                    <SearchBar />
                </div>
                <div className="flex gap-x-4">
                    <div className="relative">
                        <img src="/icons/cart.svg" />
                        <span className="absolute right-[-7px] top-[-5px] text-white bg-[#DE3618] w-[25px] h-[25spx] rounded-full text-center">3</span>
                    </div>
                    <div>
                        <img src="/icons/heart transparrent.svg" />
                    </div>
                    <div>  
                        <img src="/icons/account.svg" />
                    </div>
                    <div className="flex flex-col text-white z-[500]">
                        <div className="px-3">Jhon Emma</div>
                        <DropDown2 textColor="text-white" label="My Account" />
                    </div>
                </div>
            </div>
        </div>
    )
}