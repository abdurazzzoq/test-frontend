import Layout from "@/components/layout/layout";
import React from "react";
import {FiFilter} from 'react-icons/fi'
import {AiOutlinePlus, AiOutlineEdit} from 'react-icons/ai'
import {MdDeleteOutline} from 'react-icons/md'
import {GoChevronDown, GoChevronLeft, GoChevronRight} from 'react-icons/go'

const processDocs = () => {
  return (
    <Layout>
      <div className=" ">
        {/* 4 buttons */}

        <div className="flex items-center pl-[20px] gap-[16px]">
          <button className=" flex items-center py-[8px] px-[20px] outline-none border-[#4623E9] border-2 rounded-xl">
            All{" "}
            <span className="py-[2px] ml-[5px] px-[6px] bg-[#4623E9] text-white rounded-lg text-[12px]">
              20
            </span>
          </button>

          <button className="flex items-center py-[8px] px-[20px] outline-none  border-2 rounded-xl">
            Lorem ipsum{" "}
            <span className="py-[2px] ml-[5px] px-[6px] bg-[#F2F4F7] text-[gray]/80  rounded-lg text-[12px]">
              12
            </span>
          </button>
       
          <button className="flex items-center py-[8px] px-[20px] outline-none  border-2 rounded-xl">
            Lorem ipsum{" "}
            <span className="py-[2px] ml-[5px] px-[6px] bg-[#F2F4F7] text-[gray]/80  rounded-lg text-[12px]">
              12
            </span>
          </button>
          
          <button className="flex items-center py-[8px] px-[20px] outline-none  border-2 rounded-xl">
            Lorem ipsum{" "}
            <span className="py-[2px] ml-[5px] px-[6px] bg-[#F2F4F7] text-[gray]/80  rounded-lg text-[12px]">
              12
            </span>
          </button>
        </div>

        {/* table */}
        <div className="flex flex-col bg-white shadow-2xl p-[20px] mt-[24px] rounded-lg">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full py-2 ">
              <div className="overflow-hidden">

<div className="flex items-center justify-between">
  {/* left */}
  <div className="flex items-center gap-[20px]">
  <h3 className="font-bold text-[#1C1E23] text-[22px]">Active Students</h3>
  <div className="w-[0.5px] h-[33px] bg-[#667085]"></div>
  <p className="text-[#1C1E23] font-medium txt-[16px]">274 Users</p>
 
  <input type="text" className="border-2 rounded-3xl outline-none pl-[20px] py-[3px]" placeholder="Search..."/>
 
  </div>

{/* right */}

  <div className=" flex items-center gap-[16px]">

<button className="flex items-center gap-[8px] text-[#4623E9] font-medium text-[16px] rounded-lg outline-none py-[10px] px-[24px] border-[#4623E9] border-2">
  <FiFilter className="text-[#4623E9]"/>
  Filter
</button>

<button className="flex items-center gap-[8px] bg-[#4623E9]  text-white font-medium text-[16px] rounded-lg outline-none py-[10px] px-[26px] border-[#4623E9] border-2">
<AiOutlinePlus className="text-white"/>
Add 
</button>
  </div>
</div>

                <table className="min-w-full text-left text-sm font-medium">
                  <thead className="">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className=" flex items-center gap-[12px] whitespace-nowrap px-6 py-4 font-medium">
                        <input type="checkbox" />1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4 flex items-center justify-between">@mdo
                      <td className="flex items-center gap-[5px]">
                      <button className="flex items-center gap-[5px] rounded-xl text-white bg-[#4623E9] px-[14px] py-[6px]"><AiOutlineEdit />Edit</button> 
                      <button className="text-[#4623E9]"><MdDeleteOutline className="w-[20px] h-[20px]"/></button>
                      </td>
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" flex items-center gap-[12px] whitespace-nowrap px-6 py-4 font-medium">
                        <input type="checkbox" />2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4 flex items-center justify-between">@fat
                      <td className="flex items-center gap-[5px]">
                      <button className="flex items-center gap-[5px] rounded-xl text-white bg-[#4623E9] px-[14px] py-[6px]"><AiOutlineEdit />Edit</button> 
                      <button className="text-[#4623E9]"><MdDeleteOutline className="w-[20px] h-[20px]"/></button>
                      </td>
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" flex items-center gap-[12px] whitespace-nowrap px-6 py-4 font-medium">
                        <input type="checkbox" />3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4 flex items-center justify-between">@twitter
                      
                      <td className="flex items-center gap-[5px]">
                      <button className="flex items-center gap-[5px] rounded-xl text-white bg-[#4623E9] px-[14px] py-[6px]"><AiOutlineEdit />Edit</button> 
                      <button className="text-[#4623E9]"><MdDeleteOutline className="w-[20px] h-[20px]"/></button>
                      </td>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
<div className="h-[2px] bg-[gray] opacity-20"></div>

<div className="flex items-center justify-end gap-[12px] pt-[20px]">
  <h3>Number of pages</h3>
<button className="flex items-center  gap-[12px] py-[4px] px-[20px] border-2 rounded-lg">5 <GoChevronDown className="font-light"/></button>

<div className=" flex items-center">
<button className="border-[#4623E9] p-[5px] opacity-50 border-2 rounded-md"><GoChevronLeft className="text-[#4623E9]"/></button>

<button className="flex items-center gap-[12px] px-[20px] border-2 rounded-md py-[4px]">1 <GoChevronDown/></button>

<button className="border-[#4623E9]  p-[5px] border-2 rounded-md"><GoChevronRight className="text-[#4623E9]"/></button>
</div>
</div>

        </div>


      </div>
    </Layout>
  );
};

export default processDocs;
