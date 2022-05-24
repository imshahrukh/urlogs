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
        <div className=" flex flex-col  justify-center w-[100%] space-x-0 md:flex-row md:w-[90%] md:space-x-10">
          <div className="cart-card flex flex-col justify-center  px-0 w-[100%] md:w-[90%] md:px-2">
            <div className="  rounded-xl border-2 border-gray-100 border-opacity-15 shadow-md p-3 ">
              <h2 className="font-bold text-2xl py-1">Shopping & payment</h2>
              <p className="text-gray-500 mb-5">
                This is your cart based on your item you want to buy..
              </p>
              <div className="space-y-3">
                <div className="card-1 py-2 flex items-center h-[100px] space-x-3 ">
                  <img
                    src="/img/headphone.png"
                    className="h-full rounded-full"
                    alt=""
                  />
                  <div className="flex justify-between items-center w-full ">
                    <div className="">
                      <h2 className="text-xl mb-1 font-semibold">
                        Ralph Edwards
                      </h2>
                      <p className="text-sm text-gray-400 font-semibold">
                        5690 Matilda Green Suite 627, New York, 12345
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-gray-200 rounded text-gray-500 mr-6">
                      Edit Info
                    </button>
                  </div>
                </div>
                {/*  */}
                <div className="w-full border-2 border-gray-100 border-opacity-15 shadow-md "></div>
                <div className="card-1 py-2 flex items-center justify-between px-6 h-[100px] space-x-3 ">
                  <div className="w-[45%]  ml-12">
                    <h2 className="text-xl mb-1 font-semibold">
                      Ralph Edwards
                    </h2>
                    <p className="text-sm text-gray-400 font-semibold">
                      5690 Matilda Green Suite 627, New York, 12345
                    </p>
                  </div>

                  <button className="px-4 py-2  text-gray-500 font-semibold">
                    Free Shipping
                  </button>
                  <button className="px-4 py-2 bg-gray-400 rounded text-gray-800">
                    Edit Info
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl border-2 shadow-md p-4 mt-5 border-gray-100">
              <div className="flex justify-between items-center my-4">
                {/*  */}
                <h1 className="font-semibold text-xl">Payment method</h1>
                <h1 className="text-gray-600 font-semibold cursor-pointer">
                  Change Method
                </h1>
              </div>

              <div className="space-y-5 border-2 border-gray-400  border-opacity-10 rounded px-1">
                <div className="card-1 py-2 flex items-center h-[100px] space-x-3 ">
                  <img
                    src="/img/headphone.png"
                    className="h-full rounded-full"
                    alt=""
                  />
                  <div className="flex justify-between items-center w-full ">
                    <div className="">
                      <h2 className="text-xl mb-1 font-semibold">
                        Credit Card
                      </h2>
                      <p className="text-sm text-gray-400 font-semibold">
                        **** 7282 - Expired 8/2022
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-gray-200 rounded text-gray-500 mr-6">
                      Edit Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* {[1].map((El, key) => (
              <section
                key={key}
                className="section h-[120px] shadow-lg flex px-6 justify-between items-center mt-2 "
              >
                <AiFillCheckCircle className="text-green-600 text-3xl" />
                <img src="/img/headphone.png" className="h-[80%]" alt="" />

                <div className="prod-info space-y-1">
                  <div className="flex justify-center items-center space-x-4">
                    <h4 className="text-xl font-bold">Macbook Pro 2018</h4>
                    <div className=" bg-gray-500 bg-opacity-20 h-4 w-0.5"></div>
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt=""
                      />
                      <div className="space-y-1 font-medium dark:text-white">
                        <div className="text-[#637381]">Jese Leos</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-7 items-center">
                    <div className="text-green-600 font-bold text-xl">
                      $2,411.09
                    </div>
                    <div className=" bg-gray-500 bg-opacity-10 h-4 w-0.5"></div>

                    <div className="text-[#637381]">Save for later</div>
                  </div>
                </div>

                <div className="btns flex items-center space-x-4">
                  <AiOutlinePlus className="text-gray-500 text-2xl cursor-pointer" />
                  <div className=" bg-gray-500 bg-opacity-10 h-8 w-0.5"></div>
                  <h3 className="text-md font-bold">3</h3>
                  <div className=" bg-gray-500 bg-opacity-10 h-8 w-0.5"></div>

                  <AiOutlineMinus className="text-gray-500 text-2xl cursor-pointer" />
                </div>
                <RiDeleteBin6Fill className="text-red-500 text-2xl cursor-pointer" />
              </section>
            ))} */}

            <div className="mt-5">
              <h2 className="font-bold text-3xl">Review Items and shipping</h2>
              <div className="mt-10 mb-52 border-2 border-gray-400 border-opacity-25 rounded-lg bg-gray-100 bg-opacity-15 px-2 py-2">
                {[1, 3, 4].map((El, key) => (
                  <section
                    key={key}
                    className="section h-[120px] shadow-lg flex px-6 justify-between items-center mt-2 bg-white"
                  >
                    <AiFillCheckCircle className="text-green-600 text-3xl" />
                    <img src="/img/headphone.png" className="h-[80%]" alt="" />

                    <div className="prod-info space-y-1">
                      <div className="flex justify-center items-center space-x-4">
                        <h4 className="text-xl font-bold">Macbook Pro 2018</h4>
                        <div className=" bg-gray-500 bg-opacity-20 h-4 w-0.5"></div>
                        <div className="flex items-center space-x-4">
                          <img
                            className="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt=""
                          />
                          <div className="space-y-1 font-medium dark:text-white">
                            <div className="text-[#637381]">Jese Leos</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-7 items-center">
                        <div className="text-green-600 font-bold text-xl">
                          $2,411.09
                        </div>
                        <div className=" bg-gray-500 bg-opacity-10 h-4 w-0.5"></div>

                        <div className="text-[#637381]">Save for later</div>
                      </div>
                    </div>

                    <div className="btns flex items-center space-x-4">
                      <AiOutlinePlus className="text-gray-500 text-2xl cursor-pointer" />
                      <div className=" bg-gray-500 bg-opacity-10 h-8 w-0.5"></div>
                      <h3 className="text-md font-bold">3</h3>
                      <div className=" bg-gray-500 bg-opacity-10 h-8 w-0.5"></div>

                      <AiOutlineMinus className="text-gray-500 text-2xl cursor-pointer" />
                    </div>
                    <RiDeleteBin6Fill className="text-red-500 text-2xl cursor-pointer" />
                  </section>
                ))}
              </div>
            </div>
          </div>

          {/*  */}
        </div>
        <div className=" border-2 h-[0%] shadow-md w-[100%] mx-6 flex justify-center py-12 md:w-[35%] ">
          <div className="w-[100%] md:w-[80%]">
            <div className="rounded p-2 space-y-2">
              <div className="p-2 border-2 rounded border-gray-300 border-opacity-20">
                <div className="text-md font-semibold">Have a voucher?</div>
                <div className="w-full h-10 flex rounded bg-slate-200">
                  <input
                    className="w-[73%] px-2 bg-slate-200 text-gray-700 rounded outline-none"
                    placeholder="Voucher Code"
                  ></input>
                  <button className="bg-gray-600 rounded px-4 py-2 flex justify-center items-center text-white text-md w-[30%]">
                    Apply
                  </button>
                </div>
              </div>

              {/*  */}
              <div className="border-2 rounded  p-2 space-y-2 border-gray-300 border-opacity-20">
                <div className="text-md font-semibold ">Order Summary</div>

                <div className="flex justify-between items-center">
                  <div className="text-gray-400 text-md">Price</div>
                  <div className="text-md">5,407.00</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-400 text-md">Discount 10%</div>
                  <div className="text-md text-red-600">-5,407.00</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-400 text-md">Total Price</div>
                  <div className="text-md">4,86600z</div>
                </div>
                <div className="h-0.5 bg-gray-300 opacity-25"></div>
                <div className="text-gray-400 text-md text-bold">
                  Write a Note
                </div>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  className="w-full px-2 bg-slate-200 text-gray-700 rounded outline-none"
                ></textarea>

                <button
                  type="button"
                  className="inline-block w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Procced to Checkout
                </button>

                <button
                  type="button"
                  className="inline-block w-full px-7 py-3 bg-gray-300 text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Back to shopping cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping;
