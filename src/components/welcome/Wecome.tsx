"use client";
import React, { useState } from "react";
import BackDrop from "../modal/BackDrop";
import { useRouter } from "next/navigation";

export default function Wecome() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter()
  return (
    <div className="relative z-40  p-5 rounded-lg">
      <p className="text-[#333] text-6xl py-2 font-semibold"> Welcome Nnamdi</p>
      <p className="text-[#333] text-lg text-center">
        You do not have any idea hub yet
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

      {showModal && (
        <BackDrop>
          <div className="w-[40%] bg-white p-8 rounded-lg border">
            <label htmlFor="" className="p-2 pb-4 text-lg text-[#333]">
              Enter Hub name
            </label>
            <input
              type="text"
              className="w-full p-4 border rounded-lg focus:outline-none"
            />
            <div className="flex justify-start gap-6 items-center">
              <button className="p-3 px-9 bg-[#333] text-white my-3 rounded-lg hover:scale-105 transition-all" onClick={()=>router.push('/hub')}>
                Create
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
