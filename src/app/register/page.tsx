import Auth from "@/components/auth/Auth";
import Image from "next/image";
import React from "react";
import { bg } from "../../../public/assets";

export default function page() {
  return (
    <main className="relative h-screen w-full flex justify-center items-center bg-[#e6e3e3]">
      <Auth type='register' />
    </main>
  );
}
