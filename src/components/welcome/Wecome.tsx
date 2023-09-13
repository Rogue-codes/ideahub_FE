/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import BackDrop from "../modal/BackDrop";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context";
import ApiFetcher from "@/utils/Api/ApiFetcher";
import { TbError404Off } from "react-icons/tb";
import { HubType } from "@/types";
import Link from "next/link";
import { Key } from "iconsax-react";

export default function Wecome() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { ideaHub_user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [hubName, setHubName] = useState<string>("");
  const [hubs, setHubs] = useState([]);

  const selectHub = (id:string) => {
    sessionStorage.setItem("hub-id",JSON.stringify(id))
  }

  const { getHub, hub } = useAuth();
  const createHub = async () => {
    setLoading(true);
    try {
      const res = await ApiFetcher.post(`/idea-hub/create`, {
        name: hubName,
      });
      setLoading(false);
      setShowModal(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getHubs = async () => {
    setLoading(true);
    try {
      const res = await ApiFetcher.get(`/idea-hub/all`);
      setLoading(false);
      setShowModal(false);
      getHub(res?.data?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getHubs();
  }, []);

  return (
    <div className="relative z-40  p-5 rounded-lg">
      <p className="text-[#333] text-6xl py-2 font-semibold">
        {" "}
        Welcome {ideaHub_user?.last_name}
      </p>
      <p className="text-[#333] text-lg text-center">
        {!hub
          ? "You don't have any idea hub yet"
          : `You have ${hub.length} available `}
      </p>

      <div>
        <div
          className="w-[100px] my-6 mx-auto h-[100px] flex cursor-pointer justify-center items-center border border-[#333] hover:scale-105 transition-all rounded-lg "
          onClick={() => setShowModal(true)}
        >
          <p className="text-7xl text-[#333]">+</p>
        </div>
        <p className="text-center text-[#333]">Click here to create one</p>
      </div>

      <div className="w-full fixed left-0 top-[70%] p-4 pl-16 flex justify-center gap-4 items-center overflow-x-scroll">
        {hub?.map((hub, index) => (
          <Link href={`/hub/${hub._id}`} key={index} className="w-[15%]" onClick={()=>selectHub(hub._id)}>
          <div
            className="cursor-pointer w-full  px-8 bg-white py-8 border-2 shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px_rgba(60,64,67,0.15)0px_1px_3px_1px;] hover:scale-110 transition-all"
          >
            <p className="text-sm text-center">{hub.name}</p>
            <p className="text-xs text-center mt-5 text-[#333]">{hub.members.length} members</p>
          </div>
          </Link>
        ))}
      </div>

      {showModal && (
        <BackDrop>
          <div className="w-[40%] bg-white p-8 rounded-lg border">
            <label htmlFor="" className="p-2 pb-4 text-lg text-[#333]">
              Enter Hub name
            </label>
            <input
              type="text"
              value={hubName}
              onChange={(e) => setHubName(e.target.value)}
              className="w-full p-4 border rounded-lg focus:outline-none"
            />
            <div className="flex justify-start gap-6 items-center">
              <button
                className="p-3 px-9 bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed text-white my-3 rounded-lg hover:scale-105 transition-all"
                onClick={createHub}
                disabled={!hubName}
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
        </BackDrop>
      )}
    </div>
  );
}
