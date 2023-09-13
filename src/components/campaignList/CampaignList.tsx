/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { CampaignType } from "@/types";
import { campaignList } from "@/utils";
import ApiFetcher from "@/utils/Api/ApiFetcher";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbArrowsSort } from "react-icons/tb";

export default function CampaignList() {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<CampaignType[] | null>(null);

  // const gethub = async (id: string) => {
  //   try {
  //     const res = await ApiFetcher.get(`/campaign/${id}/all`);
  //     setCampaigns(res?.data?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const id = sessionStorage.getItem("hub-id");

    if (!id) {
      router.push("/welcome");
    } else {
      const parsedData = JSON.parse(id);
      const hubId = parsedData;

      const getHub = async (id: string) => {
        try {
          const res = await ApiFetcher.get(`/campaign/${id}/all`);
          setCampaigns(res?.data?.data);
        } catch (error) {
          console.log(error);
        }
      };

      getHub(hubId);
    }
  }, []);

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
          <AiOutlinePlus size={20} color="#333" />
          <p className="text-[#333]">Add campaign</p>
        </div>

        <TbArrowsSort size={20} color="#333" />
      </div>
      {campaigns && campaigns?.length < 0 ? (
        <div className="w-full p-8 flex justify-center items-center">
          <p>No campaign available</p>
        </div>
      ) : (
        campaigns?.map((campaign, _) => (
          <div key={_} className="flex justify-between items-center p-3 hover:bg-[#f0eeee] cursor-pointer">
            <div className="text-[#333]">
              <p className="text-sm">{campaign.campaign_name}</p>
              <p className="text-xs">
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
        ))
      )}
    </div>
  );
}
