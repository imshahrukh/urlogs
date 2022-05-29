import { Modal } from "./../components/Modal";
import { TextFeild } from "./../components/TextFeild";

import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <section className="relative h-[1000px] w-[90%] flex justify-center items-center">
        <div className="px-6 text-gray-800 h-[800px]">
          <div className="flex xl:justify-center justify-center items-center flex-wrap h-full ">
            <div className="grow-0   shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 h-[800px]">
              <img
                src="https://thumbs.dreamstime.com/z/indian-couple-shopping-holding-shopping-bags-over-green-background-indian-couple-shopping-holding-shopping-bags-isolated-over-144540968.jpg"
                className="w-full h-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:pl-6 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 shadow-lg px-4 h-full ">
              <form className="">
                {/* <!-- Email input --> */}
                <h1 className="text-3xl font-bold my-6 mx-10">
                  Create new account
                </h1>
                <div className="flex justify-between space-x-2 ">
                  <TextFeild lable="Name" placeHolder={"Enter Name"} />
                  <TextFeild lable="Name" placeHolder={"Enter Name"} />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <TextFeild lable="Name" placeHolder={"Enter Name"} />
                </div>

                <div className="flex justify-between space-x-2">
                  <TextFeild lable="Name" placeHolder={"Enter Name"} />
                  <TextFeild lable="Name" placeHolder={"Enter Name"} />
                </div>

                <div className="flex justify-between space-x-2">
                  <TextFeild lable="Name" placeHolder={"Enter Name"} />
                  <TextFeild lable="Name" placeHolder={"Enter Name"} />
                </div>

                <div className="flex justify-between space-x-2">
                  <TextFeild lable="Name" placeHolder={"Enter Name"} />
                  <TextFeild lable="Name" placeHolder={"Enter Name"} />
                </div>
                {/* 
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label className="form-check-label inline-block text-gray-800">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-gray-800">
                    Forgot password?
                  </a>
                </div> */}
                {show ? <Modal></Modal> : <></>}

                <div className="text-center my-6 lg:text-left w-full">
                  <button
                    onClick={() => {
                      setShow(!show);
                    }}
                    type="button"
                    className="inline-block w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Create Account
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
