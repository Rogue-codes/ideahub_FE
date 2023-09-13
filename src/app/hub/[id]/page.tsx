"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CampaignType, HubType } from "@/types";
import { useParams, useRouter } from "next/navigation";
import ApiFetcher from "@/utils/Api/ApiFetcher";
import DateSelect from "@/widgets/dateSelect";
import { collabo } from "../../../../public/assets";
import BackDrop from "@/components/modal/BackDrop";
import { formatDate } from "@/utils/date";
// import { useRouter } from "next/router";

export default function Hub() {
  const { id } = useParams();

  const [hub, setHub] = useState<HubType | null>(null);
  const [campaign, setCampaign] = useState<CampaignType[] | null>(null);

  const gethub = async () => {
    try {
      const res = await ApiFetcher.get(`/idea-hub/${id}`);
      setHub(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCampaigns = async () => {
    try {
      const res = await ApiFetcher.get(`/campaign/${id}/all`);
      setCampaign(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createMember = async () => {
    setLoading(true);
    try {
      const res = await ApiFetcher.post("/idea-hub/members/add", {
        id: id,
        name: formdata.name,
        email: formdata.email,
      });
      setLoading(false);
      console.log(res?.data?.data);
      setShowModal(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  const createCampaign = async () => {
    setLoading(true);
    try {
      const res = await ApiFetcher.post("/campaign/create", {
        idea_hub: id,
        campaign_name: formdata.campaign_name,
        campaign_description: formdata.campaign_description,
        start_date: formatDate(startDate) ,
        end_date: formatDate(endDate),
      });
      setLoading(false);
      console.log(res?.data?.data);
      setShowModal(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    gethub();
    getCampaigns();
  }, []);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    campaign_name: "",
    campaign_description: "",
  });
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);


  const [loading, setLoading] = useState<boolean>(false);

  const handleShowModal = (type: string) => {
    setModalType(type);
    setShowModal(true);
  };

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
          <div className="w-full flex justify-between items-center">
            <p className="text-lg text-[#333] font-medium mb-5">Members</p>

            <button
              className="border border-black p-2 rounded-lg hover:bg-[#333] hover:text-white transition-all hover:scale-105 -mt-4"
              onClick={() => handleShowModal("add member")}
            >
              Add member
            </button>
          </div>

          <div className="bg-[#fff] shadow-[rgba(0,0,0,0.02)0px_1px_3px_0px,rgba(27,31,35,0.15)0px_0px_0px_1px] p-3 rounded-lg text-[#333]">
            {!hub ? (
              <div className="w-full flex justify-center items-center p-5">
                <p>No members created yet..</p>
              </div>
            ) : (
              hub?.members.map((member, index) => (
                <div
                  className="border-b p-5 flex justify-between items-center"
                  key={index}
                >
                  <div className="flex justify-start items-center gap-3">
                    <p>1.</p>
                    <div className="w-10 h-10 border rounded-full flex justify-center items-center text-[#333]">
                      NO
                    </div>
                    <p>{member.name}</p>
                  </div>
                  <p>25 Ideas</p>
                </div>
              ))
            )}
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

        <button
          className="w-[20%] p-3 font-medium text-sm  text-[#000] hover:scale-105 transition-all border border-black hover:bg-[#333] hover:text-white rounded-lg"
          onClick={() => handleShowModal("add campaign")}
        >
          Add Campaign
        </button>
      </div>

      <div className="w-full mt-8 py-4 flex justify-between items-center">
        {!campaign?.length ? (
          <div className="w-full h-32 flex justify-center items-center">
            <p>No campaign available.</p>
          </div>
        ) : (
          campaign?.map((campaign, index) => (
            <Link href={`/campaign/${campaign._id}`} className="w-[23%]" key={index}>
              <div className="py-4 w-full border rounded-md">
                <div className="h-[60%] w-full ">
                  <Image
                    src={collabo}
                    className="w-full h-full rounded-tr-md rounded-tl-md object-cover"
                    alt=""
                  />
                </div>
                <p className="p-3 font-bold text-lg text-[#333]">
                  {campaign?.campaign_name}
                </p>
                <p className="truncated px-2 font-normal w-full text-sm text-[#333]">
                  {campaign?.campaign_description}
                </p>
                <div className="w-full p-3 text-[#333] flex justify-between items-center">
                  <p>{new Date(campaign?.end_date).getDate() - new Date().getDate()} days left</p>
                  <p>0 ideas</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {showModal && (
        <BackDrop>
          {modalType === "add member" ? (
            <div className="w-[40%] bg-white p-8 rounded-lg border">
              <label htmlFor="" className="p-2 pb-4 text-lg text-[#333]">
                Enter member name
              </label>
              <input
                type="text"
                value={formdata.name}
                onChange={(e) =>
                  setFormdata({ ...formdata, name: e.target.value })
                }
                className="w-full p-4 border rounded-lg focus:outline-none"
              />

              <label htmlFor="" className="p-2 pb-4 text-lg text-[#333]">
                Enter member email
              </label>
              <input
                type="text"
                value={formdata.email}
                onChange={(e) =>
                  setFormdata({ ...formdata, email: e.target.value })
                }
                className="w-full p-4 border rounded-lg focus:outline-none"
              />
              <div className="flex justify-start gap-6 items-center">
                <button
                  className="p-3 px-9 bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed text-white my-3 rounded-lg hover:scale-105 transition-all"
                  onClick={createMember}
                  disabled={!formdata}
                >
                  {loading ? "Loading..." : "Create"}
                </button>
                <button
                  className="p-3 px-9 bg-red-500 text-white my-3 rounded-lg hover:scale-105 transition-all"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="w-[40%] bg-white p-8 rounded-lg border">
              <label htmlFor="" className="p-2 pb-4 text-sm text-[#333]">
                Enter campaign name
              </label>
              <input
                type="text"
                value={formdata.campaign_name}
                onChange={(e) =>
                  setFormdata({ ...formdata, campaign_name: e.target.value })
                }
                className="w-full p-4 border rounded-lg focus:outline-none"
              />

              <label htmlFor="" className="p-2 pb-4 mt-5 text-sm text-[#333]">
                Enter campaign description
              </label>
              <textarea
                value={formdata.campaign_description}
                onChange={(e) =>
                  setFormdata({
                    ...formdata,
                    campaign_description: e.target.value,
                  })
                }
                className="w-full p-4 border rounded-lg focus:outline-none"
                rows={4}
              />

              <div className="w-full mt-5 p-3 flex justify-between items-center">
                <div className="w-[48%] p-3 rounded-lg border">
                  <DateSelect
                    placeholderText="start date"
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                    }}
                  />
                </div>

                <div className="w-[48%] p-3 rounded-lg border">
                  <DateSelect
                    placeholderText="end date"
                    selected={endDate}
                    onChange={(date) => {
                      setEndDate(date);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-start gap-6 items-center">
                <button
                  className="p-3 px-9 bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed text-white my-3 rounded-lg hover:scale-105 transition-all"
                  onClick={createCampaign}
                  disabled={!formdata}
                >
                  {loading ? "Loading..." : "Create"}
                </button>
                <button
                  className="p-3 px-9 bg-red-500 text-white my-3 rounded-lg hover:scale-105 transition-all"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </BackDrop>
      )}
    </div>
  );
}
