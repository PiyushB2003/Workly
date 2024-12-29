"use client";
import Link from "next/link";

import { LightModeOutlinedIcon, PersonAddIcon } from "@/utils/Icons";

export default function Header() {
    return (
        <div className="h-[12%] sticky top-0 z-50 w-full bg-[#020617] flex items-center justify-between px-20">
            <div className="text-[#467BFF] flex items-center justify-center cursor-pointer">
                <img src="./images/logo.png" alt="logo" className="h-[28px]" />
                <span className=" mx-2 font-bold text-xl">WorkLy</span>
            </div>
            <div>
                <ul className="flex items-center justify-center font-semibold">
                    <li className="mx-4">
                        <Link href="/" className="hover:text-zinc-400 duration-200 transition-all">Home</Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/dashboard" className="hover:text-zinc-400 duration-200 transition-all">Dashboard</Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/why-workly" className="hover:text-zinc-400 duration-200 transition-all">Why WorkLy</Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/contact" className="hover:text-zinc-400 duration-200 transition-all">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center">
                <span className="mx-[6px] cursor-pointer"><LightModeOutlinedIcon className="text-[#94A3B8] scale-110" /></span>
                <button className="durarion-200 transition-all flex items-center justify-center bg-[#f5f9ff] hover:bg-zinc-200 text-[#1E293B] text-sm font-semibold px-4 py-2 rounded-full mx-[6px]"><span className="mr-[2px]"><PersonAddIcon className=" scale-[0.8]" /></span> <span className="ml-[2px]">Register</span></button>
                <button className="durarion-200 transition-all bg-[#467BFF] hover:bg-[#3863D2] text-sm font-semibold text-white px-4 py-2 rounded-full mx-[6px]">Login</button>
            </div>
        </div>
    );
}
