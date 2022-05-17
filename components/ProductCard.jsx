import Link from "next/link";
import React from "react";

export const ProductCard = () => {
  return (
    <Link href="/product/124">
      <div className="rounded-lg shadow-lg cursor-pointer shadow-gray-300 bg-white p-4 flex flex-col gap-y-4">
        <div className="flex justify-between">
          <div>
            <button className="text-white rounded py-1 px-2 bg-[#FF4F52]">
              Best Seller
            </button>
          </div>
          <div className="flex gap-x-3">
            <img src="/icons/flag.svg" alt="" />
            <img src="/icons/heart.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/img/headphone.png" alt="" />
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[20px] h-[20px]" src="/img/user.png" alt="" />
          <span className="text-[#959EAD]">Savannah Nguyen</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[16px] font-semibold">Premium Headphone</span>
          <img src="/icons/mark.svg" alt="" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#5C6AC4]">$11.70</span>
          <img src="/icons/Rating.png" alt="" />
        </div>
      </div>
    </Link>
  );
};
