import React from "react";
import DropDown2 from "../Dropdown2";
import UserReview from "./UserReview";

export default function UserReviews() {
  return (
    <div className="flex flex-col gap-y-8 w-full">
      <div className="flex justify-between items-center">
        <div className="text-[18px] font-semibold">All Comments (2,1k)</div>
        <div className="flex items-center justify-between gap-x-3">
          <div className="text-[#959EAD] text-[14px]">Sort by:</div>
          <DropDown2
            className="bg-gray-200 text-[#637381] w-[140px] text-[16px] rounded"
            label="Newest"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-10">
        <UserReview />
        <UserReview />
        <UserReview />
      </div>
      <div className="flex justify-center gap-x-2 mt-5 items-center cursor-pointer text-[#FF4F52] text-[15px] font-semibold">
        <img src="/icons/load.svg" alt="" />
        <div>Load more reviews</div>
      </div>
    </div>
  );
}
