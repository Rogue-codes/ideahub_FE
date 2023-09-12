import { campaignList } from "@/utils";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbArrowsSort } from "react-icons/tb";
export default function CampaignList() {
  return (
    <div className="w-[25%] py-8 pb-28 fixed left-0 top-[100px] h-screen overflow-scroll border">
      <div className="w-full px-3">
        <input
          type="text"
          className="w-full rounded-md focus:outline-none p-3 border border-[#333]"
          name=""
          id=""
          placeholder="search campigns"
        />
      </div>

      <div className="my-6 mx-3 flex justify-between items-center">
        <div className="flex justify-start gap-2 items-center">
          <AiOutlinePlus size={20} color='#333' />
          <p className="text-[#333]">Add campaign</p>
        </div>

        <TbArrowsSort size={20} color='#333'/>
      </div>
      {campaignList.map((campaign, _) => (
        <div key={_} className="flex justify-between items-center p-3 ">
          <div className="text-[#333]">
            <p>{campaign.campaign_name}</p>
            <p className="text-sm">
              {campaign.start_date.replace(/-/g, "/")} -{" "}
              {campaign.end_date.replace(/-/g, "/")}
            </p>
          </div>

          <button
            className={`${
              new Date() > new Date(campaign.end_date)
                ? "bg-red-200 text-red-500"
                : "bg-green-200 text-green-500"
            } p-2 text-sm rounded-lg`}
          >
            {new Date() > new Date(campaign.end_date) ? "Expired" : "Active"}
          </button>
        </div>
      ))}
    </div>
  );
}
