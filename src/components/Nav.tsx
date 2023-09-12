"use client";
import Image from "next/image";
import React from "react";
import { herobg } from "../../public/assets";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  return (
    <div className="w-full bg-[#333] h-20 z-40 relative">
      
      <div className="w-full px-4 relative z-50 h-full flex justify-between items-center">
        <h1 className="text-xl font-bold !text-white">IDEA_HUB</h1>
        <div className="flex justify-start gap-6 items-center">
          <p
            className="text-base font-medium text-white cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Sign in
          </p>
          <button
            className="px-8 text-base py-2 bg-[#8859EC] rounded-lg text-white"
            onClick={() => router.push("/register")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
