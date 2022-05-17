import { RoundedProduct } from '../components/RoundedProduct'
import { ProductCard } from '../components/ProductCard'
export default function Home() {
  return (
    <div className="bg-image">
      <div className="body-padding relative">
        <div className="items-center flex flex-col gap-y-4">
          {/* <img className="" src="/img/be-eclipse.png" /> */}
          <p className="text-[#212B36] text-[70px]">We love to see you smile</p>
          <p className="text-[#637381] w-[70%] text-center text-[26px]">Women’s pearl basic knit sweater with a round neck. Available in several colours. Free shipping to stores.</p>
          <button className="bg-primary text-white w-max py-2 px-6 rounded">Shop Now</button>
        </div>
        <div className="grid grid-cols-4 gap-x-10">
          <RoundedProduct />
          <RoundedProduct />
          <RoundedProduct />
          <RoundedProduct />
        </div>
        <div className="mt-20 mb-52 grid xl:grid-cols-4 lg:grid-cols-2 gap-4">
          <ProductCard /> 
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className='absolute left-[50%] fixed-center w-[70%] bottom-[-340px] z-[2000] grid lg:grid-cols-2 mt-20 justify-between items-center rounded-md bg-[#212B36]'>
          <div className='pl-20 flex flex-col gap-y-4'>
            <h1 className='text-[36px] font-semibold text-[#fff] leading-[1.2]'>Over 50% more screen area than Series 3.</h1>
            <p className="text-[#939699] text-[18px]">Color-pop accents recall '25s style</p>
            <button className='bg-primary text-[#fff] w-max text-[18px] font-md py-1 px-3 rounded'>Shop Now</button>
          </div>
          <div>
            <img src='img/watch.png' />
          </div>
        </div>
      </div>
    </div>
  )
}
