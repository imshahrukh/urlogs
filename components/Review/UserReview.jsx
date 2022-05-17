import React, {useState} from "react";

export default function UserReview() {
  const description = `Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon 
    Konica Minolta camera technologies, including the Minolta AF SLR lens mount Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon 
    Konica Minolta camera technologies, including the Minolta AF SLR lens mount`;
    const [more, setMore] = useState(false);
  return (
    <div className="border border-bottom-[#F4F6F8] border-x-0 border-t-0 pb-10">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-5">
          <img width={48} height={48} src="/img/user.png" alt="" />
          <div className="text-[14px] flex flex-col justify-between">
            <p className="text-[#161D25] font-semibold">Daisy Murphy</p>
            <p className="text-[#959EAD] font-[400]">July, 23 2020</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-x-1">
            <img width={20} src="/icons/one star.svg" alt="" />
            <img width={20} src="/icons/one star.svg" alt="" />
            <img width={20} src="/icons/one star.svg" alt="" />
            <img width={20} src="/icons/one star.svg" alt="" />
            <img width={20} src="/icons/one star.svg" alt="" />
            <img width={20} src="/icons/one star.svg" alt="" />
          </div>
          <div className="text-[#959EAD]">
            83% of users found this review helpful
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <img src="/icons/like active.svg" alt="" />
          <img src="/icons/dislike.svg" alt="" />
        </div>
      </div>
      <p className="text-[16px] font-[400] my-5 text-[#5A7184]">
        {more? description: description.substring(0, 148) + '...'}{" "}
        <span onClick={() => setMore(!more)} className="text-primary cursor-pointer font-semibold">
          {more? 'Show less': 'Read more'}
        </span>
      </p>
      <div className="flex gap-x-6 mt-4">
        <img src="/img/Sample show 1.png" alt="" />
        <img src="/img/Sample show 2.png" alt="" />
        <img src="/img/Sample show 3.png" alt="" />
      </div>
    </div>
  );
}
