import Image from "next/image";
import commaNumber from "comma-number";

export const InformationCard = ({
  color,
  title,
  number,
  children,
  currency = "",
}) => {
  return (
    <div className=" flex items-center  h-40 shadow-md space-x-2 bg-white rounded">
      
      <div className="">
        <div className="flex justify-between items-center px-4">
          <div className="font-bold flex justify-center items-center">
            {children}

            <div className="ml-4">
              <h2 className="text-sm">Total Income</h2>
              {commaNumber(number)}
              {!!currency?.length ? (
                <div>
                  <span className="block ml-1 text-gray-500 text-sm b-16">
                  {currency}
                </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          
          <h6 className="text-1 text-green-500 text-sm">{title}</h6>
        </div>
        <div>
        <svg width="343" height="97" viewBox="0 0 343 97" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.925 53.3551C28.2632 61.6376 8.90887 60.2572 0.939453 58.5317V96.4835L342.486 92.7253V0.648338C326.547 18.0604 312.885 14.2957 296.946 11.9427C262.792 9.58969 249.13 29.3548 226.36 35.4725C203.59 41.5903 186.513 38.2961 169.436 27.4724C152.358 16.6486 135.281 19.4722 121.619 34.5313C107.957 49.5905 95.434 46.2963 84.0491 44.8845C72.6642 43.4727 59.0023 43.002 41.925 53.3551Z" fill="url(#paint0_linear_110_5597)"/>
          <defs>
          <linearGradient id="paint0_linear_110_5597" x1="171.713" y1="96.4835" x2="171.244" y2="0.648333" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0"/>
          <stop offset="0.983831" stop-color="#B7CFFE" stop-opacity="0.7"/>
          </linearGradient>
          </defs>
        </svg>
        </div>
      </div>
    </div>
  );
};
