'use client'

export default function Header() {
  return (
    <div className="h-[10%] w-full bg-[#020617] flex items-center justify-center" >
        <div className="text-[#467BFF] flex items-center justify-center">
            <img src="./images/logo.png" alt="logo" className="h-[32px]" />
            <span className=" mx-2 font-bold text-xl">WorkLy</span>
        </div>
    </div>
);
}
