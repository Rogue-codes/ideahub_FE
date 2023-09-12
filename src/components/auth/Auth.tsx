'use client'
import { useRouter } from "next/navigation";
import React from "react";

interface AuthProps {
  type: string;
}
export default function Auth({ type }: AuthProps) {
    const router = useRouter()

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push('/welcome')
    }
  return (
    <div className="relative z-40 w-[40%] p-5 rounded-lg border-2 bg-white">
      <form action="" className="p-3" onSubmit={handleClick}>
        {
          (type === "register" && (
            <div className="w-full flex justify-between items-center">
              <div className="w-[48%]">
                <input
                  type="text"
                  className="w-full p-4 bg-transparent text-[#333] border  rounded-lg focus:outline-none"
                  placeholder="first name"
                />
              </div>

              <div className="w-[48%]">
                <input
                  type="text"
                  className="w-full p-4 bg-transparent text-[#333] border  rounded-lg focus:outline-none"
                  placeholder="last name"
                />
              </div>
            </div>
          ))
        }

        <div className="w-full">
          <input
            type="text"
            className="w-full my-8 p-4 bg-transparent text-[#333] border  rounded-lg focus:outline-none"
            placeholder="email address"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            className="w-full my-4 p-4 bg-transparent text-[#333] border rounded-lg focus:outline-none"
            placeholder="password "
          />
        </div>

        {type === "register" && (
          <div className="w-full">
            <input
              type="text"
              className="w-full my-8 p-4 bg-transparent text-[#333]  border rounded-lg focus:outline-none"
              placeholder="confirm password"
            />
          </div>
        )}

        <button className="w-full p-4 font-medium text-lg  text-[#fff] bg-[#333] rounded-lg">
          {type ==="register" ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
}
