import Image from "next/image";
import { bg, connections, herobg2 } from "../../public/assets";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="relative bg-[#e6e3e3] h-screen w-full">
      
      <Nav />

      <div className="px-5 py-2 w-[65%] relative z-20 mt-36">
        <p className="text-sm text-[#333]">The future of social autonomy</p>
        <h1 className="text-6xl font-semibold text-[#333] leading-[75px]">
          The <span className="bg-gradient-to-r from-[#2C66B8] to-[#8859EC] text-transparent bg-clip-text animate-gradient">next gen</span><br />
          Idea Hub, For friends and collegues to collaborate
        </h1>
        <p className="text-[#333] text-lg mt-6">Air your opinion with <span className="text-[#8859EC] font-bold">IDEA HUB</span> and let your others vote on it.</p>
      </div>

    </main>
  );
}
