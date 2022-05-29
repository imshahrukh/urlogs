import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TextFeild } from "./../components/TextFeild";

export const Modal = () => {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-1/4 my-6 mx-auto py-4 px-8 bg-white rounded relative">
              {/* header */}
              <div
                onClick={() => {
                  setShowModal(false);
                }}
                className="absolute -right-6 -top-2 text-xl hover:text-blue-500 hover:scale-150 cursor-pointer"
              >
                {<MdOutlineCancel />}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-3xl font-bold">Sign in</p>
                <button className="border-2 text-xl text-bold rounded border-blue-500 text-blue-500 px-4 py-2">
                  Seller Sign Up
                </button>
              </div>
              <div className="border-2 border-gray-100 rounded my-5 w-full"></div>
              <div>
                <div className="-mb-2">
                  <TextFeild lable="Email" placeHolder={"Enter Email"} />
                </div>
                <div className="mb-2">
                  <TextFeild lable="Password" placeHolder={"Enter Password"} />
                </div>
              </div>

              {/*body  */}
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label className=" font-semibold inline-block text-black">
                    Stay signed in
                  </label>
                </div>
                <a href="#!" className="text-gray-500 text-sm">
                  Forgot password?
                </a>
              </div>

              {/* form */}

              {/* footer */}
              <div className="text-center my-6 lg:text-left w-full">
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  type="button"
                  className="inline-block w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Sign In
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0 flex justify-center space-x-1">
                  <span className="inline-block">Dont have an account?</span>
                  <a
                    href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                  >
                    Register
                  </a>
                </p>
                <p className="text-sm mt-4 pt-1 mb-0 flex justify-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                </p>
                <p className="text-sm font-semibold -mt-1 pt-1 mb-0 flex justify-center space-x-1 ">
                  <a
                    href="#!"
                    className="text-blue-600 inline-block hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                  >
                    Term of User{" "}
                  </a>
                  <span className="inline-block">and</span>
                  <a
                    href="#!"
                    className="text-blue-600 inline-block hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                  >
                    {" "}
                    privacy policy
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
