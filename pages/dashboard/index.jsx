/* eslint-disable react/no-unknown-property */
import React from "react";
import { AdminBody } from "../../components/admin-body";
import { InformationCard } from "../../components/information-card";
import { SideNav } from "../../components/side-nav";
import { MdAudiotrack } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdDoneOutline } from "react-icons/md";
import { Table } from "../../components/table";
import { Doughnut } from "react-chartjs-2";


export const chartColors = [
  "#336699",
  "#99CCFF",
  "#999933",
  "#666699",
  "#CC9933",
  "#006666",
  "#3399FF",
  "#993300",
  "#CCCC99",
  "#666666",
  "#FFCC66",
  "#6699CC",
  "#663366",
  "#9999CC",
  "#CCCCCC",
  "#669999",
  "#CCCC66",
  "#CC6600",
  "#9999FF",
  "#0066CC",
  "#99CCCC",
  "#999999",
  "#FFCC00",
  "#009999",
  "#99CC33",
  "#FF9900",
  "#999966",
  "#66CCCC",
  "#339966",
  "#CCCC33",
  "#003f5c",
  "#665191",
  "#a05195",
  "#d45087",
  "#2f4b7c",
  "#f95d6a",
  "#ff7c43",
  "#ffa600",
  "#EF6F6C",
  "#465775",
  "#56E39F",
  "#59C9A5",
  "#5B6C5D",
  "#0A2342",
  "#2CA58D",
  "#84BC9C",
  "#CBA328",
  "#F46197",
  "#DBCFB0",
  "#545775"
];

const options = {
  legend: {
    display: false,
    position: "right"
  },

};
const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [300, 50, 100, 50],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors
    }
  ]
};
function Index() {
  return (
    <AdminBody>
      <div className=" bg-slate-300 overflow-auto h-full">
        <div className="flex p-2 space-x-1 justify-between">
          <InformationCard number={502} title="Books" color={"#9876"}>
            <div className={`rounded-full p-5 bg-green-400`}>
              {/* <MdAudiotrack  className="text-white"></MdAudiotrack> */}
            </div>
          </InformationCard>

          <InformationCard number={4502} title="Subscribers" color={"#9876"}>
            <div className={`rounded-full p-5 bg-blue-800`}>
              <MdDoneOutline
                // fontSize={30}
                // className="text-white"
              ></MdDoneOutline>
            </div>
          </InformationCard>
          <InformationCard
            number={41502}
            currency=" PKR"
            title="Earning "
            color={"#9876"}
          >
            <div className={`rounded-full p-5 bg-purple-400`}>
              <BsCurrencyExchange
                // fontSize={30}
                // className="text-white"
              ></BsCurrencyExchange>
            </div>
          </InformationCard>
        </div>

        <div className="table-card flex justify-center items-start space-x-2">
          <div className="tables w-[60%]">
            <Table/>
          </div>
          <div className="dashboardcards h-full w-[50%] flex-wrap flex items-start ">
            {[1,3,2,2].map((el,index)=>(
               <div className="w-[48%]  mr-2 mb-2 p-2 py-6 rounded shadow-md space-y-2 bg-white">
                 <h2>Product Sold this month</h2>
                 {
                   index<2?<>{
                   [21,32,12,43,4].map((el)=>(
                    <div key={index} className="w-[90%] flex items-center space-x-2">
                      <p className="text-sm">Jan</p>
                      <div className="line w-[90%] h-4 rounded-r-xl  bg-green-400"></div>
                      <p className="text-sm">21,213</p>
                    </div>
                   ))
                   }</>:<>{
                     [1].map((E,i)=>(
                      <div key={i} className="flex flex-col justify-center items-center" >
                        <svg width="161" height="162" viewBox="0 0 161 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M160.713 81C160.713 125.236 124.781 161.096 80.4572 161.096C36.133 161.096 0.201172 125.236 0.201172 81C0.201172 36.7643 36.133 0.904205 80.4572 0.904205C124.781 0.904205 160.713 36.7643 160.713 81ZM17.8435 81C17.8435 115.512 45.8766 143.489 80.4572 143.489C115.038 143.489 143.071 115.512 143.071 81C143.071 46.4885 115.038 18.5113 80.4572 18.5113C45.8766 18.5113 17.8435 46.4885 17.8435 81Z" fill="#FFD66B"/>
                          <path d="M51.0088 145.885C48.9838 150.347 43.6958 152.367 39.4806 149.869C25.2282 141.424 13.8774 128.735 7.09665 113.482C0.31987 98.2376 -1.49065 81.3348 1.79181 65.1302C2.76624 60.3197 7.8219 57.7505 12.4965 59.2467C17.1787 60.7455 19.6887 65.7579 18.8673 70.605C16.8322 82.6149 18.3577 95.0285 23.36 106.281C28.3653 117.54 36.5703 127.004 46.8669 133.559C51.0091 136.195 53.038 141.414 51.0088 145.885Z" fill="#56CCF2"/>
                          <path d="M80.4569 9.87437C80.4569 4.92028 84.4853 0.852497 89.4086 1.40399C99.0035 2.47878 108.351 5.2757 116.991 9.68443C128.301 15.4554 138.077 23.8233 145.515 34.1001C152.953 44.3768 157.841 56.2688 159.776 68.7982C161.711 81.3276 160.639 94.1365 156.647 106.172C152.655 118.207 145.857 129.124 136.813 138.026C127.769 146.928 116.737 153.561 104.624 157.378C92.5107 161.196 79.6627 162.089 67.1361 159.985C57.5761 158.379 48.4118 155.062 40.0763 150.219C35.7839 147.725 34.9763 142.043 37.9423 138.063C40.9003 134.092 46.4909 133.332 50.8485 135.682C56.8473 138.917 63.3559 141.157 70.1198 142.293C79.8406 143.926 89.8108 143.233 99.2108 140.271C108.611 137.308 117.172 132.161 124.19 125.253C131.208 118.345 136.483 109.873 139.581 100.533C142.679 91.1941 143.511 81.2542 142.01 71.5313C140.508 61.8083 136.715 52.5799 130.943 44.605C125.171 36.6301 117.585 30.1365 108.808 25.6581C102.703 22.5428 96.1423 20.4646 89.3963 19.4881C84.4933 18.7784 80.4569 14.8285 80.4569 9.87437Z" fill="#4592FF"/>
                        </svg>
                        <div className=" flex justify-center items-center space-x-1">
                          <div className=""><span className="h-2 w-2 rounded-full bg-[#FFD66B] inline-block mr-1"></span>Total</div>
                          <div className=""><span className="h-2 w-2 rounded-full bg-[#56CCF2] inline-block mr-1"></span>Purchase</div>
                          <div className=""><span className="h-2 w-2 rounded-full bg-[#4592FF] inline-block mr-1"></span>Sold</div>

                        </div>
                      </div>
                     ))
                   }</>
                 }
               

               </div>
            ))}
          </div>
        </div>
      </div>
    </AdminBody>
  );
}

export default Index;
