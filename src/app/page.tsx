import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { BiotechIcon, EventNoteIcon, HubIcon, WorkspacePremiumIcon } from "@/utils/Icons";

export default function Home() {
  return (
    <>
      <div className="relative flex items-center justify-between min-h-[calc(100vh-12%)] w-full bg-[#020617] grid-pattern overflow-hidden px-20">
        <Spotlight
          className="-top-40 left-0 md:left-10 md:-top-20"
          fill="#4a4ac0"
        />
        <div className="w-1/2">
          <div className="w-full">
            <h2 className="text-5xl font-bold leading-tight my-2">Your one stop solution for</h2>
            <h2 className="text-[#467BFF] text-5xl font-bold">project management</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="330" height="91" fill="none" className="-mt-8 w-11/12 md:-mt-4 md:w-3/5">
              <path stroke="#467BFF" strokeLinecap="round" strokeWidth="6.83" d="M24.73 72.829c92.366-28.309 213.505-43.554 301.076-20.515"></path>
              <path stroke="#467BFF" strokeLinecap="round" strokeWidth="6.83" d="M4.188 65.588c93.631-23.79 215.367-33.138 301.717-5.874"></path>
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 my-5">
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
              <p className="text-[#94A3B8]">Expert advice a one click away for jobs, mock interviews</p>
            </div>
          </div>
          <div className="py-5">
            <button className="durarion-200 transition-all bg-[#467BFF] text-sm font-semibold text-white px-6 py-3 rounded-full">Join Now</button>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 px-5">
            {/* First Box in First Column */}
            <div className="bg-[#E9FCF1] p-6 rounded-lg shadow-lg flex justify-center items-center">
              <div className="mt-2">
                <h2 className="text-lg font-bold text-gray-900">Community</h2>
                <p className="mt-2 text-s text-gray-700">Connect with <br /> 1 Lakh+ peers</p>
              </div>
              <img src="/images/small-card-3.svg" alt="Community Illustration" className="w-[80px] h-auto" />
            </div>

            {/* Second Box in First Column */}
            <div className="bg-[#FFF5E5] row-span-2 p-6 rounded-lg shadow-lg">
              <div className="mt-4">
                <h2 className="text-lg font-bold text-gray-900">Mentors</h2>
                <p className="mt-2 text-sm text-gray-700">300+ Mentors, 5000+ <br /> Queries Resolved</p>
              </div>
              <img src="/images/Mentors-cuate.svg" alt="Mentors Illustration" className="w-full h-auto my-5" />
            </div>

            {/* Spanned Box in Second Column */}
            <div className="px-6 py-2 bg-[#FFCCF7] rounded-lg shadow-lg flex items-center justify-center">
              <div className="mt-2">
                <h2 className="text-lg font-bold text-gray-900">Ask <br /> Anything</h2>
                <p className="mt-2 text-sm text-gray-700">& we find you a <br /> mentor!</p>
              </div>
              <img src="/images/rafiki.svg" alt="Ask Anything Illustration" className="w-[80px] h-auto my-5" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-5 py-4">
            {/* First Box in First Column */}
            <div className="bg-[#FFE5E6] p-6 row-span-2 rounded-lg shadow-lg">
              <div className="my-4">
                <h2 className="text-lg font-bold text-gray-900">Roadmaps</h2>
                <p className="mt-2 text-sm text-gray-700">Solve skill based roadmaps</p>
              </div>
              <img src="/images/big-card-2.svg" alt="Community Illustration" className="w-full h-auto" />
            </div>

            {/* Second Box in First Column */}
            <div className="bg-[#E5EDFF] py-2 px-6 rounded-lg shadow-lg flex items-center justify-center">
              <div className="mt-4">
                <h2 className="text-lg font-bold text-gray-900">Problems</h2>
                <p className="mt-2 text-sm text-gray-700">Daily Problem <br /> Challenges</p>
              </div>
              <img src="/images/big-card-1.svg" alt="Mentors Illustration" className="w-[84px] h-auto" />
            </div>

            {/* Spanned Box in Second Column */}
            <div className="px-6 py-4 bg-[#94A3B8] rounded-lg shadow-lg flex items-center justify-center">
              <div className="mt-2">
                <h2 className="text-lg font-bold text-gray-900">Feed</h2>
                <p className="mt-2 text-sm text-gray-700">Skill based <br /> posts!</p>
              </div>
              <img src="/images/cuate.svg" alt="Ask Anything Illustration" className="w-[80px] h-auto mx-2" />
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
