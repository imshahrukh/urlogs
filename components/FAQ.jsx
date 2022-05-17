import React, { useState } from "react";

export default function FAQ({ list, faqClasses }) {
  const [show, setShow] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleShow = (id) => {
    var newShow = [...show];
    newShow[id] = !show[id];
    setShow(newShow);
  };

  return (
    <div className="overflow-y-hidden">
      <div className="flex justify-center items-center flex-col">
        <div className=" flex flex-col xl:flex-row justify-start items-start w-full xl:space-x-52">
          <div className="xl:mt-0 w-full w-full flex flex-col justify-start items-start ">
            <div className="w-full flex justify-start items-start flex-col space-y-8">
              {/* <h2 className="w-full text-lg md:text-xl lg:text-2xl font-semibold leading-4 md:leading-5 lg:leading-6 text-gray-800">
                Shippings &amp; Returns
              </h2> */}
              <div className={`w-full gap-x-20 grid lg:grid-cols-2 ${faqClasses}`}>
                {list.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="border-b border-gray-200 w-full py-6 flex justify-between items-start space-x-4"
                    >
                      <div
                        className={`flex justify-start items-start flex-col space-y-4`}
                      >
                        <div>
                          <h3
                            className={`text-lg lg:text-xl leading-7 lg:leading-5 text-gray-800 ${
                              show[key] ? "hidden" : ""
                            }`}
                          >
                            {item.question}
                          </h3>
                          <h3
                            className={`flex justify-start items-start flex-col text-primary space-y-4 ${
                              show[key] ? "" : "hidden"
                            }`}
                          >
                            {item.question}
                          </h3>
                        </div>
                        <p
                          className={`${
                            show[key] ? "" : "hidden"
                          } text-base leading-normal text-gray-600`}
                        >
                          {item.answer}
                        </p>
                      </div>
                      <button
                        onClick={() => handleShow(key)}
                        className="mt-1.5 focus:outline-none lg:mt-0.5 flex flex-shrink-0"
                      >
                        <img
                          className={` ${show[key] ? "hidden" : ""}`}
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/marketing_faq_7_svg_1.svg"
                          alt="plus"
                        />
                        <div
                          className={`${
                            show[key] ? "" : "hidden"
                          } text-primary`}
                        >
                          X
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
