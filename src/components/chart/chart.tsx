"use client";

import ChartData from "./chartData";

import { Chart as ChartJs, Legend, Tooltip, ArcElement } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsChevronDown, BsBell } from "react-icons/bs";

import { HiArrowUp, HiArrowDown } from "react-icons/hi";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import Navbar from "../navbar/navbar";

const Charts = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Poll",
        data: [3, 4, 5, 6],
        backgroundColor: ["pink", "purple", "red", "green"],
        borderColor: ["pink", "purple", "red", "green"],
      },
    ],
  };

  const options = {};

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart: any) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "lighter 20px inter";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "$19,760,00",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };


  return (
    <div className="">
      <div className=" ">
        
        <Navbar/>

        <section className="flex my-4 px-4 gap-3">
          <div className=" w-3/4 h-[338px] bg-[#F2F4F7] shadow-2xl rounded">
            <div className="flex items-center justify-between pt-6 pl-6 pb-6">
              <h3 className="font-semibold text-xl">Spending Statistics</h3>
              <div className="flex items-center">
                <BiChevronLeft className="shadow-lg rounded-sm opacity-[0.8]  bg-[#F2F4F7] mr-6 " />{" "}
                <h3 className="mr-6">2024</h3>
                <BiChevronRight className="shadow-lg rounded-sm opacity-[0.8] bg-[#F2F4F7] mr-6 " />
              </div>
            </div>

            <div className=" flex items-center justify-around ">
              <div className="flex flex-col space-y-5 mb-7">
                <p className="font-semibold text-[#667085]">15k$</p>
                <p className="font-semibold text-[#667085]">10k$</p>
                <p className="font-semibold text-[#667085]">5k$</p>
                <p className="font-semibold text-[#667085]">1k$</p>
                <p className="font-semibold text-[#667085]">500$</p>
              </div>
              <ChartData />
            </div>
          </div>

          <div className=" w-1/4 h-[320px] bg-[#F2F4F7] shadow-2xl rounded">
            <div className=" px-6  ">
              <div className="flex items-center justify-between">
                <p className="text-[#1C1E23] font-semibold text-[18px]">
                  Your Balance
                </p>
                <button className="rounded p-2 outline-none">
                  <PiDotsThreeOutlineLight className=" h-[24px] w-[24px]" />
                </button>
              </div>

              <p className="py-4 font-bold text-[32px]">
                $120,435.00{" "}
                <span className="text-[#D0D5DD] font-semibold text-[18px]">
                  (USD)
                </span>
              </p>
              <p className="text-[#D0D5DD] font-semibold text-[16px]">
                From Jan 01, 2022 to Jan 31, 2022
              </p>

              <div className=" flex items-center justify-between mt-[40px]">
                <button className="flex items-center gap-[15px] bg-[#4623E9] outline-none text-white py-[18px] pr-[20px] pl-[15px]  rounded-xl">
                  <img src="/top-up.svg" alt="topUp" />
                  Top Up
                </button>
                <button className="flex items-center gap-[15px] outline-none py-[17px] pr-[20px] pl-[10px]  rounded-xl border-[#4623E9] border-2 ">
                  <img src="/transfer.svg" alt="transfer" />
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*  */}
      <section className=" flex">
        <div className="w-3/4">
          <section className="my-4 px-4 gap-3">
            <div className="h-[340px] bg-[#F2F4F7] shadow-2xl rounded">
              <div className="flex items-center justify-between p-6">
                <h3 className=" font-semibold text-[22px]">
                  Transaction History
                </h3>

                <input
                  type="datetime-local"
                  id="meeting-time"
                  name="meeting-time"
                  className="px-4 py-2  rounded-lg border-[#C3D4E9] border-2 "
                />
              </div>

              {/*  */}
              <div className="">
                <center>
                  <div className=" flex justify-center text-center h-[1px] w-[750px] bg-[#90A3BF] opacity-20"></div>
                </center>
                <div className="flex items-center justify-around p-[10px]">
                  <p className="text-[#90A3BF]">Transactions</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[#90A3BF]">Data</p>
                    <BsChevronDown className="text-[#90A3BF]" />
                  </div>
                  <div className="flex items-center gap-2 ">
                    <p className="text-[#90A3BF]">Amount </p>
                    <BsChevronDown className="text-[#90A3BF]" />
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="text-[#90A3BF]">Status </p>
                    <BsChevronDown className="text-[#90A3BF]" />
                  </div>
                </div>

                <center>
                  <div className=" flex justify-center text-center h-[1px] w-[750px] bg-[#90A3BF] opacity-20"></div>
                </center>
              </div>

              {/*  */}
              <div className="px-[21px] py-[24px] ">
                <div className="pb-[20px] flex items-center justify-around">
                  <div className="flex items-center gap-[10px]">
                    <img src="/bank.svg" alt="bank" width={36} height={36} />
                    <h4 className="font-semibold text-[14px]">Bank Transfer</h4>
                  </div>
                  <p className="font-semibold">Jan 01,2022</p>
                  <p className="font-semibold">$2,000.00</p>

                  <div className="flex gap-[8px] items-center">
                    <img
                      src="/Completed.svg"
                      alt="completed"
                      width={16}
                      height={16}
                    />
                    <p className="font-semibold">Completed</p>
                  </div>
                </div>

                <div className="pb-[20px] flex items-center justify-around">
                  <div className="flex items-center gap-[10px]">
                    <img
                      src="/paypal.png"
                      alt="paypay"
                      width={36}
                      height={36}
                    />
                    <h4 className="font-semibold text-[14px]">
                      Paypal Account
                    </h4>
                  </div>
                  <p className="font-semibold">Jan 01,2022</p>
                  <p className="font-semibold">$2,000.00</p>

                  <div className="flex gap-[8px] items-center">
                    <img
                      src="/Pending.svg"
                      alt="completed"
                      width={16}
                      height={16}
                    />
                    <p className="font-semibold">Pending</p>
                  </div>
                </div>

                <div className="pb-[20px] flex items-center justify-around">
                  <div className="flex items-center gap-[10px]">
                    <img
                      src="/figma-logo.png"
                      alt="figma"
                      width={36}
                      height={36}
                    />
                    <h4 className="font-semibold text-[14px]">Bank Transfer</h4>
                  </div>
                  <p className="font-semibold">Jan 01,2022</p>
                  <p className="font-semibold">$2,000.00</p>

                  <div className="flex gap-[8px] items-center">
                    <img
                      src="/onhold.svg"
                      alt="completed"
                      width={16}
                      height={16}
                    />
                    <p className="font-semibold">On Hold</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  */}

          {/*  */}
          <div className=" m-4 gap-2 py-6  shadow rounded bg-[#F2F4F7] flex items-center justify-around">
            <div className=" px-2  ">
              <div className="flex justify-between">
                <p className="text-[#1C1E23] font-semibold text-[22px]">
                  Total Income
                </p>

                <button className="rounded p-2 bg-[#D0D5DD] outline-none">
                  <HiArrowUp className="text-[#14D934] h-[24px] w-[24px]" />
                </button>
              </div>
              <p className="py-4 font-bold text-[32px]">
                $50,530.00{" "}
                <span className="text-[#D0D5DD] font-semibold text-[18px]">
                  (USD)
                </span>
              </p>
              <p className="text-[#D0D5DD] font-semibold text-[16px]">
                <span className="text-[#14D934] text-[16px]"> 20% </span>{" "}
                increase compared to last week
              </p>
            </div>

            <div className=" bg-[#D0D5DD] w-[1px] h-[120px]"></div>

            <div className=" px-2  ">
              <div className="flex justify-between">
                <p className="text-[#1C1E23] font-semibold text-[22px]">
                  Total Expense
                </p>
                <button className="rounded p-2 bg-[#D0D5DD] outline-none">
                  <HiArrowDown className="text-[#FF4D4F] h-[24px] w-[24px]" />
                </button>
              </div>

              <p className="py-4 font-bold text-[32px]">
                $19,760.00{" "}
                <span className="text-[#D0D5DD] font-semibold text-[18px]">
                  (USD)
                </span>
              </p>
              <p className="text-[#D0D5DD] font-semibold text-[16px]">
                <span className="text-[#FF4D4F]  text-[16px]"> 10% </span>{" "}
                decrease compared to last week
              </p>
            </div>
          </div>
        </div>

        <div className=" w-1/4  relative space-y-8  md:mt-0 md:max-w-md  py-10 px-6 rounded shadow-2xl bg-[#F2F4F7]">
        <div className="flex items-center justify-between">
                <p className="text-[#1C1E23] font-semibold text-[18px]">
                Spend by category
                </p>
                <button className="rounded  outline-none">
                  <PiDotsThreeOutlineLight className=" h-[24px] w-[24px]" />
                </button>
              </div>

          <Doughnut
            data={data}
            options={options}
            plugins={[textCenter]}
          ></Doughnut>

{/* statistics */}
<div className="">

<div className="flex items-center justify-between">
  <div className="flex items-center gap-[12px]">

  <div className="w-[12px] h-[12px] p-[2px] rounded-[70%] bg-[#EB7CA6]"></div>
  <h4 className='text-[#98A2B3]'>Employees Salary</h4>
  </div>
  <p className="font-semibold">$8.000.00</p>
</div>


<div className="flex items-center justify-between mt-[23px] ">
  <div className="flex items-center gap-[12px]">

  <div className="w-[12px] h-[12px] p-[2px] rounded-[70%] bg-[#FFACC8]"></div>
  <h4 className='text-[#98A2B3]'>Material Supplies</h4>
  </div>
  <p className="font-semibold">$2.130.00</p>
</div>



<div className="flex items-center justify-between mt-[23px]">
  <div className="flex items-center gap-[12px]">

  <div className="w-[12px] h-[12px] p-[2px] rounded-[70%] bg-[#CC6FF8]"></div>
  <h4 className='text-[#98A2B3]'>Company tax</h4>
  </div>
  <p className="font-semibold">$1.510.00</p>
</div>


<div className="flex items-center justify-between mt-[23px]">
  <div className="flex items-center gap-[12px]">

  <div className="w-[12px] h-[12px] p-[2px] rounded-[70%] bg-[#7C5CFC]"></div>
  <h4 className='text-[#98A2B3]'>Maintenance system</h4>
  </div>
  <p className="font-semibold">$2.245.00</p>
</div>


<div className="flex items-center justify-between mt-[23px]">
  <div className="flex items-center gap-[12px]">

  <div className="w-[12px] h-[12px] p-[2px] rounded-[70%] bg-[#5CAFFC]"></div>
  <h4 className='text-[#98A2B3]'>Development System</h4>
  </div>
  <p className="font-semibold">$4.385.00</p>
</div>


<div className="flex items-center justify-between mt-[23px]">
  <div className="flex items-center gap-[12px]">

  <div className="w-[12px] h-[12px] p-[2px] rounded-[70%] bg-[#A1A9FE]"></div>
  <h4 className='text-[#98A2B3]'>Production Tools </h4>
  </div>
  <p className="font-semibold">$1.000.00</p>
</div>

</div>

        </div>

      </section>
    </div>
  );
};

export default Charts;
