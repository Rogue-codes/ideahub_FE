import Image from "next/image";
import React from "react";
import { collabo } from "../../../public/assets";
import Link from "next/link";

export default function Hub() {
  return (
    <div className="relative z-40 w-full h-full py-4 px-8 ">
      <div className="w-full h-[80px] fixed left-0 top-0 px-8 bg-[#333]  flex justify-between items-center">
        <p className="text-xl text-[#fff] font-semibold">Home</p>
        <div className="w-10 h-10 border rounded-full flex justify-center items-center text-[#fff]">
          NO
        </div>
      </div>

      <div className="flex justify-between !mt-28 items-start w-full">
        <div className=" w-[48%]">
          <p className="text-lg text-[#333] font-medium mb-5">
            Weekly top contributors{" "}
          </p>
          <div className="bg-[#fff] shadow-[rgba(0,0,0,0.02)0px_1px_3px_0px,rgba(27,31,35,0.15)0px_0px_0px_1px] p-3 rounded-lg text-[#333]">
            <div className="border-b p-5 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <p>1.</p>
                <div className="w-10 h-10 border rounded-full flex justify-center items-center text-[#333]">
                  NO
                </div>
                <p>Nnamdi osuji</p>
              </div>
              <p>25 Ideas</p>
            </div>{" "}
            <div className="border-b p-5 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <p>2.</p>
                <div className="w-10 h-10 border rounded-full flex justify-center items-center text-[#333]">
                  MO
                </div>
                <p>Mathew ofomi</p>
              </div>
              <p>18 Ideas</p>
            </div>{" "}
            <div className="border-b p-5 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <p>3.</p>
                <div className="w-10 h-10 border rounded-full flex justify-center items-center text-[#333]">
                  UO
                </div>
                <p>Ubong Okon</p>
              </div>
              <p>15 Ideas</p>
            </div>{" "}
          </div>
        </div>

        <div className=" w-[48%]">
          <p className="text-lg text-[#333] font-medium mb-5">
            Weekly top ideas{" "}
          </p>

          <div className="bg-[#fff] shadow-[rgba(0,0,0,0.02)0px_1px_3px_0px,rgba(27,31,35,0.15)0px_0px_0px_1px] p-3  rounded-lg">
            <div className="border-b p-5 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <p>1.</p>
                <div className="w-10 h-10 border rounded-full flex justify-center items-center text-[#333]">
                  NO
                </div>
                <p>Be attentive to customer complaints</p>
              </div>
              <p>25 Votes</p>
            </div>

            <div className="border-b p-5 flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <p>1.</p>
                <div className="w-10 h-10 border rounded-full flex justify-center items-center text-[#333]">
                  MO
                </div>
                <p>Remote Work</p>
              </div>
              <p>15 Votes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between mt-12 items-center">
        <div className="w-[75%] flex justify-start gap-5">
          <input
            type="text"
            className="w-[55%] bg-transparent focus:outline-none border rounded-lg p-3 "
            placeholder="search campaigns"
          />
          <div className="w-[23%] bg-transparent border text-[#333] rounded-lg p-3 ">
            <p>Active</p>
          </div>
        </div>

        <button className="w-[20%] p-3 font-medium text-sm  text-[#fff] bg-[#333] rounded-lg">
          Add Campaign
        </button>
      </div>

      <div className="w-full mt-8 py-4 flex justify-between items-center">
        <Link href="/campaign" className='w-[23%]'>
          <div className="h-[350px] w-full border rounded-md">
            <div className="h-[60%] w-full ">
              <Image
                src={collabo}
                className="w-full h-full rounded-tr-md rounded-tl-md object-cover"
                alt=""
              />
            </div>
            <p className="p-3 font-bold text-lg text-[#333]">
              Marketing Strategy
            </p>
            <p className="px-3 font-normal text-sm text-[#333]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="w-full p-3 text-[#333] flex justify-between items-center">
              <p>10 days left</p>
              <p>0 ideas</p>
            </div>
          </div>
        </Link>

        <Link href="/campaign" className='w-[23%]'>
          <div className="h-[350px] w-full border rounded-md">
            <div className="h-[60%] w-full ">
              <Image
                src={collabo}
                className="w-full h-full rounded-tr-md rounded-tl-md object-cover"
                alt=""
              />
            </div>
            <p className="p-3 font-bold text-lg text-[#333]">
              Marketing Strategy
            </p>
            <p className="px-3 font-normal text-sm text-[#333]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="w-full p-3 text-[#333] flex justify-between items-center">
              <p>10 days left</p>
              <p>0 ideas</p>
            </div>
          </div>
        </Link>

        <Link href="/campaign" className='w-[23%]'>
          <div className="h-[350px] w-full border rounded-md">
            <div className="h-[60%] w-full ">
              <Image
                src={collabo}
                className="w-full h-full rounded-tr-md rounded-tl-md object-cover"
                alt=""
              />
            </div>
            <p className="p-3 font-bold text-lg text-[#333]">
              Marketing Strategy
            </p>
            <p className="px-3 font-normal text-sm text-[#333]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="w-full p-3 text-[#333] flex justify-between items-center">
              <p>10 days left</p>
              <p>0 ideas</p>
            </div>
          </div>
        </Link>

        <Link href="/campaign" className='w-[23%]'>
          <div className="h-[350px] w-full border rounded-md">
            <div className="h-[60%] w-full ">
              <Image
                src={collabo}
                className="w-full h-full rounded-tr-md rounded-tl-md object-cover"
                alt=""
              />
            </div>
            <p className="p-3 font-bold text-lg text-[#333]">
              Marketing Strategy
            </p>
            <p className="px-3 font-normal text-sm text-[#333]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="w-full p-3 text-[#333] flex justify-between items-center">
              <p>10 days left</p>
              <p>0 ideas</p>
            </div>
          </div>
        </Link>


      </div>
    </div>
  );
}
