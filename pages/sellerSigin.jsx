import {
  AiFillCheckCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ProductCard } from "../components/ProductCard";
const Shopping = () => {
  return (
    <>
      <div className="flex flex-row mt-6 ">
        <div className=" flex flex-col justify-center w-[100%] space-x-0 md:flex-col md:w-[100%] md:space-x-20">
          <div className=" h-[420px] w-full bg-[#F6F8FB] flex justify-center items-center  flex-col">
            <div className="w-[93%] ">
              <h1 className="w-[33%] text-[36px] font-bold ">
                Choose between an individual or professional seller account
              </h1>
              <p className="w-[32%] text-[16px] text-gray-400 mt-4">
                When it comes to Amazon’s seller plans, you have two options:
                professional and individual.
              </p>
            </div>
          </div>
          <div className="cart-card flex flex-col justify-center  px-0 w-[100%] md:w-[85%] md:px-2">
            <div>
              <div className="h-[370px] mt-6  w-full bg-white space-y-4">
                <h1 className="text-[36px] font-bold">Overview</h1>
                <div className="w-[50%] border-2 border-gray-400 border-opacity-10"></div>
                <p className="text-xl font-semibold">
                  This plan might be right for you if....
                </p>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((el) => (
                    <>
                      <p>
                        <span className="inline-block rounded-full h-1 w-1 bg-[#637381] mr-3"></span>
                        <span className="text-[#637381]">
                          You sell more than 40 units a month
                        </span>
                      </p>
                    </>
                  ))}
                </div>
              </div>
            </div>

            {/* new sectoon */}
            <div className="space-y-4 w-full">
              <h1 className="text-[36px] font-bold">Selling plans</h1>
              <div className="w-full border-2 border-gray-400 border-opacity-10"></div>
              <div className="flex space-x-40 justify-end">
                {[1, 2].map((e, k) => (
                  <div key={k} className="card-1 space-y-2">
                    <h3 className="text-[20px] font-semibold">Individual</h3>
                    <h1 className="text-[#4592FF] font-bold text-4xl">
                      $0.76{" "}
                      <span className="inline-block text-gray-400 -ml-3 text-[16px]">
                        /Item sold
                      </span>
                    </h1>
                    <h3 className="text-[20px] font-semibold">
                      +Additional selling fees
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* new Section Select Plaim */}
            <div className="flex justify-between mt-16">
              <h1 className="text-[36px] font-bold">Select your plan</h1>
              <div className="flex space-x-16 w-[50%] justify-center">
                <div className="bg-blue-500 text-white flex justify-center items-center px-5 rounded-full space-x-3">
                  <span className="inline-block rounded-full border-4 border-white h-10 w-10"></span>
                  <h3 className="text-white text-lg">Individual</h3>
                </div>
                <div className="bg-white-500 border-gray-600 border-2 flex justify-center items-center px-5 rounded-full  space-x-3">
                  <span className="inline-block rounded-full border-4 border-gray-600 h-10 w-10"></span>
                  <h3 className="text-gray-700 text-lg">Individual</h3>
                </div>
              </div>
            </div>

            {/* login sect */}
            <div className="space-x-3 flex justify-center items-center mt-16">
              <h2 className="text-blue-500 text-[26px] font-semibold">
                Personal Information
              </h2>
              <div className="w-[80%] mt-2 border-2 border-gray-200 border-opacity-15"></div>
            </div>

            <div className=" mt-2">
              <div className="flex w-full space-x-3 px-2">
                {[1, 2, 4].map((E, k) => (
                  <div key={k} className="w-1/3">
                    <label htmlFor="" className="text-[#5A7184] text-lg">
                      First Name
                    </label>
                    <div className="h-10 flex rounded bg-slate-200">
                      <input
                        className="px-6 bg-slate-200 text-gray-700 rounded outline-none"
                        placeholder="Voucher Code"
                      ></input>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex w-full space-x-3 px-2">
                {[1, 2, 4].map((E, k) => (
                  <div key={k} className="w-1/3">
                    <label htmlFor="" className="text-[#5A7184] text-lg">
                      First Name
                    </label>
                    <div className="h-10 flex rounded bg-slate-200">
                      <input
                        className="px-6 bg-slate-200 text-gray-700 rounded outline-none"
                        placeholder="Voucher Code"
                      ></input>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex w-full space-x-3 px-2">
                {[1, 4].map((E, k) => (
                  <div key={k} className="w-1/3">
                    <label htmlFor="" className="text-[#5A7184] text-lg">
                      First Name
                    </label>
                    <div className="h-10 flex rounded bg-slate-200">
                      <input
                        className="px-6 bg-slate-200 text-gray-700 rounded outline-none"
                        placeholder="Voucher Code"
                      ></input>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bus */}
            <div className="space-x-3 flex justify-center items-center mt-16">
              <h2 className="text-blue-500 text-[26px] font-semibold">
                Business Address
              </h2>
              <div className="w-[80%] mt-2 border-2 border-gray-200 border-opacity-15"></div>
            </div>

            <div className=" mt-2">
              <div className="flex w-full space-x-3 px-2">
                {[1, 2, 4].map((E, k) => (
                  <div key={k} className="w-1/3">
                    <label htmlFor="" className="text-[#5A7184] text-lg">
                      First Name
                    </label>
                    <div className="h-10 flex rounded bg-slate-200">
                      <input
                        className="px-6 bg-slate-200 text-gray-700 rounded outline-none"
                        placeholder="Voucher Code"
                      ></input>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex w-full space-x-3 px-2">
                {[1, 2, 4].map((E, k) => (
                  <div key={k} className="w-1/3">
                    <label htmlFor="" className="text-[#5A7184] text-lg">
                      First Name
                    </label>
                    <div className="h-10 flex rounded bg-slate-200">
                      <input
                        className="px-6 bg-slate-200 text-gray-700 rounded outline-none"
                        placeholder="Voucher Code"
                      ></input>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex w-full space-x-3 px-2">
                {[1, 4].map((E, k) => (
                  <div key={k} className="w-1/3">
                    <label htmlFor="" className="text-[#5A7184] text-lg">
                      First Name
                    </label>
                    <div className="h-10 flex rounded bg-slate-200">
                      <input
                        className="px-6 bg-slate-200 text-gray-700 rounded outline-none"
                        placeholder="Voucher Code"
                      ></input>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*  */}

          {/* login section */}
        </div>
      </div>
    </>
  );
};

export default Shopping;
