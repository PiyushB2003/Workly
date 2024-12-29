import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { BiotechIcon, EventNoteIcon, HubIcon, WorkspacePremiumIcon } from "@/utils/Icons";

export default function Home() {
  return (
    <div className="relative flex items-center h-[calc(100vh-12%)] w-full bg-[#020617] grid-pattern overflow-hidden px-20">

      <Spotlight
        className="-top-40 left-0 md:left-10 md:-top-20"
        fill="#4a4ac0"
      />
      <div className="w-1/2">
        <div className="w-full">
          <h2 className="text-5xl font-bold leading-tight my-2">Your one stop solution for</h2>
          <h2 className="text-[#467BFF] text-5xl font-bold">project management</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="330" height="91" fill="none" className="-mt-8 w-11/12 md:-mt-4 md:w-1/2">
            <path stroke="#467BFF" stroke-linecap="round" stroke-width="6.83" d="M24.73 72.829c92.366-28.309 213.505-43.554 301.076-20.515"></path>
            <path stroke="#467BFF" stroke-linecap="round" stroke-width="6.83" d="M4.188 65.588c93.631-23.79 215.367-33.138 301.717-5.874"></path>
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-4 my-5">
          <div className="flex items-center space-x-4">
            <div className="p-[0.75rem] h-12 w-12 flex items-center justify-center bg-[#E5EDFF] rounded-full text-[#467BFF]">
              <WorkspacePremiumIcon />
            </div>
            <p className="text-[#94A3B8]">Connect with peers for jobs, <br /> projects and much more</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-[0.75rem] h-12 w-12 flex items-center justify-center bg-[#E2E8F0] rounded-full text-[#0F6D39]">
              <BiotechIcon />
            </div>
            <p className="text-[#94A3B8]">Build connections that help you <br /> grow!</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-[0.75rem] h-12 w-12 flex items-center justify-center bg-[#FFF5E5] rounded-full text-[#FFAF3A]">
              <HubIcon />
            </div>
            <p className="text-[#94A3B8]">Network with peers for projects, <br /> interview preparation</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-[0.75rem] h-12 w-12 flex items-center justify-center bg-[#E2E8F0] rounded-full text-[#334155]">
              <EventNoteIcon />
            </div>
            <p className="text-[#94A3B8]">Expert advice a one click away for <br /> jobs, mock interviews</p>
          </div>
        </div>
        <div>
          <button className="durarion-200 transition-all bg-[#467BFF] text-sm font-semibold text-white px-6 py-3 rounded-full">Join Now</button>
        </div>
      </div>
      <div>

      </div>
    </div>


  );
}
