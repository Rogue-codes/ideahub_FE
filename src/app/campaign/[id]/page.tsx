/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { collabo } from "../../../../public/assets";
import { FcIdea } from "react-icons/fc";
import { SlLike } from "react-icons/sl";
import { useParams } from "next/navigation";
import { CampaignType } from "@/types";
import ApiFetcher from "@/utils/Api/ApiFetcher";

export default function Campaign() {
  const { id } = useParams();

  const [campaign, setCampaign] = useState<CampaignType | null>(null);

  const getCampaign = async () => {
    try {
      const res = await ApiFetcher.get(`/campaign/${id}`);
      setCampaign(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getCampaign()
  },[])
  
  return (
    <main className="relative h-screen mt-[100px] w-full px-5">
      <div className="w-full  h-[100px] flex justify-between items-center">
        <p className="text-[#333] font-semibold text-xl">back</p>
        <div className="w-[50%] flex justify-start gap-5 items-center">
          <button
            disabled
            className="w-[50%] p-3 font-medium text-sm  text-[#fff] bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
          >
            Submit an idea
          </button>
          <button className="w-[20%] p-3 font-medium text-sm  text-[#fff] bg-[#333] rounded-lg">
            Edit
          </button>
        </div>
      </div>

      <div className="w-full pb-8 border-b flex justify-between items-center">
        <div className="text-[#333] font-semibold text-xl w-[45%]">
          <p className="py-3 font-bold text-xl">{campaign?.campaign_name}</p>
          <p className="py-3 font-bold text-xl">
            {" "}
            {campaign?.end_date
              ? new Date().getDate() > new Date(campaign.end_date).getDate()
                ? "Expired"
                : "Active"
              : "End date not available"}
          </p>
          <p className="text-sm font-normal">
            {campaign?.campaign_description}
          </p>
          <h2 className="py-3 font-bold text-xl">Duration</h2>
          <p className="text-sm font-normal">
            {campaign?.start_date} - {campaign?.end_date}
          </p>
        </div>
        <div className="w-[50%] h-[200px] rounded-lg">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src={collabo}
            alt=""
          />
        </div>
      </div>

      <div className="w-full py-8">
        <div className=" pb-2">
          <p className="text-lg font-semibold">1 Idea</p>
        </div>

        <div className="w-full flex justify-between items-center p-2 border-t border-b cursor-pointer hover:bg-[#f3ececba]">
          <div className="flex justify-start gap-3 items-center">
            <div className="w-10 h-10 border rounded-lg flex justify-center items-center">
              <FcIdea size={20} />
            </div>
            <div>
              <p>Introducing AI</p>
              <p>nnamdi osuji</p>
            </div>
          </div>

          <button className="p-2 px-4 bg-white text-[#333] border flex justify-center items-center gap-3">
            0 <SlLike />
          </button>
        </div>
      </div>
    </main>
  );
}
