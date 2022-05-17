import React from "react";
import FAQ from "../FAQ";
import UserReviews from "./UserReviews";
import { faqData } from "../../util/FAQs";
function Rating() {
  return (
    <>
      <div className="flex justify-center items-center py-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-14 lg:gap-24 2xl:gap-44 w-full items-start ">
          <div className="w-full xl:w-auto flex flex-col justify-start ">
            <p className="text-[36px] font-semibold leading-9 pb-4">Reviews</p>
            <p className="text-[#5A7184] text-[14px]">
              for Sony Alpha Mirrorless 4K Video Camera (Body Only)
            </p>
            <div className="w-full xl:w-auto flex flex-row gap-2 items-center justify-start">
              <svg
                className="cursor-pointer text-[#EEC200]"
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <p className="text-lg leading-relaxed">
                <span className="text-[56px] ml-6">4.5</span>
                <span className="text-[35px] ml-2">/5.0</span>
              </p>
            </div>
            <div className="bg-gray-100 pt-4 pl-4 pb-2 mt-4">
              <h1 className="text-[14px] font-[500]">Recommended</h1>
              <p className="text-[#5A7184] font-[400]">
                (88%) Buyer recommended this product
              </p>
            </div>
            <div className="w-full xl:w-auto flex flex-col gap-8 mt-16">
              <div className="w-full xl:w-auto  flex flex-row items-center">
                <p className="text-base leading-none text-gray-600 pr-2">5.0</p>
                <svg
                  className="cursor-pointer text-[#EEC200]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
                <div className="cursor-pointer  w-full xl:w-72 h-2 pl-6">
                  <div className="flex items-center justify-start flex-1 h-full w-full bg-gray-200">
                    <div className="w-40 h-full bg-[#EEC200]" />
                  </div>
                </div>
                <p className="text-base leading-none text-gray-600 pl-6">
                  1.5k
                </p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-base leading-none text-gray-600 pr-2">4.0</p>
                <svg
                  className="cursor-pointer text-[#EEC200]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
                <div className="cursor-pointer w-full xl:w-72 h-2 pl-6">
                  <div className="flex items-center justify-start flex-1 h-full w-full bg-gray-200">
                    <div className="w-24 h-full bg-[#EEC200]" />
                  </div>
                </div>
                <p className="text-base leading-none text-gray-600 pl-6">
                  1.5K
                </p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-base leading-none text-gray-600 pr-2">3.0</p>
                <svg
                  className="cursor-pointer text-[#EEC200]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
                <div className="cursor-pointer w-full xl:w-72 h-2 pl-6">
                  <div className="flex items-center justify-start flex-1 h-full w-full bg-gray-200">
                    <div className="w-20 h-full bg-[#EEC200]" />
                  </div>
                </div>
                <p className="text-base leading-none text-gray-600 pl-6">
                  1.5K
                </p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-base leading-none text-gray-600 pr-2">2.0</p>
                <svg
                  className="cursor-pointer text-[#EEC200]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
                <div className="cursor-pointer w-full xl:w-72 h-2 pl-6">
                  <div className="flex items-center justify-start flex-1 h-full w-full bg-gray-200">
                    <div className="w-10 h-full bg-[#EEC200]" />
                  </div>
                </div>
                <p className="text-base leading-none text-gray-600 pl-6">
                  1.5K
                </p>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-base leading-none text-gray-600 pr-2">1.0</p>
                <svg
                  className="cursor-pointer text-[#EEC200]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
                <div className="cursor-pointer w-full xl:w-72 h-2 pl-6">
                  <div className="flex items-center justify-start flex-1 h-full w-full bg-gray-200">
                    <div className="w-5 h-full bg-[#EEC200]" />
                  </div>
                </div>
                <p className="text-base leading-none text-gray-600 pl-6">
                  1.5K
                </p>
              </div>
            </div>
          </div>
          <UserReviews />
        </div>
      </div>
    </>
  );
}

export default Rating;
