import React, { useState } from "react";
const DropDown2 = ({ className, textColor, label }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={`relative cursor-pointer ${className}`}>
            <div className="flex items-center justify-between" onClick={() => setShow(!show)}>
                <p className={`pl-3 py-3 ${textColor} text-sm leading-3 tracking-normal font-normal border-r-transparent border-b-transparent border-t-transparent`}>{label}</p>
                <div className="cursor-pointer text-white ml-2 mr-5">
                    {show ? (
                        <div className={`${textColor} rotate-90`}>{`<`}</div>
                    ) : (
                        <div className={`${textColor} rotate-90`}>{`>`}</div>
                    )}
                </div>
            </div>
            {show && (
                <ul className="visible transition duration-300 opacity-100 ease-out bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute">
                    <li className={`cursor-pointer ${textColor} dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal`}>Interface Settings</li>
                    <li className={`cursor-pointer ${textColor} dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal`}>Notifications</li>
                    <li className={`cursor-pointer ${textColor} dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal`}>Account Data</li>
                    <li className={`cursor-pointer ${textColor} dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal`}>Sign Out</li>
                </ul>
            )}
        </div>
    );
};
export default DropDown2;
