"use client";

import React from "react";
import UserHeader from "../userComponents/UserHeader";
import UserFooter from "../userComponents/UserFooter";
import { useRouter } from "next/navigation";

const PlayNowPage = () => {
  const router = useRouter();

  const handlePlayClick = () => {
    router.push("/user/play-now/participate");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <UserHeader />

      <div className="font-[sans-serif] text-[#333] min-h-screen mb-4">
        <div className="lg:max-w-5xl sm:max-w-2xl max-sm:max-w-sm mx-auto text-center ">
          <h2 className="text-center text-2xl font-extrabold border-b-2 border-[#333] inline-block mt-2">
            Campaigns
          </h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 max-md:justify-center mt-8">
            <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <div className="px-4 my-6">
                <h3 className="text-lg font-semibold">Campaign Name</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Campaign Details: Lucky Winner will get BDT 500/- Recharge
                </p>
                <button
                  type="button"
                  className="px-6 py-2 mt-4 w-full rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                  onClick={handlePlayClick}
                >
                  Play
                </button>
              </div>
            </div>
            <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <div className="px-4 my-6">
                <h3 className="text-lg font-semibold">Campaign Name</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Campaign Details: Lucky Winner will get BDT 500/- Recharge
                </p>
                <button
                  type="button"
                  className="px-6 py-2 mt-4 w-full rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                  onClick={handlePlayClick}
                >
                  Play
                </button>
              </div>
            </div>
            <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <div className="px-4 my-6">
                <h3 className="text-lg font-semibold">Campaign Name</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Campaign Details: Lucky Winner will get BDT 500/- Recharge
                </p>
                <button
                  type="button"
                  className="px-6 py-2 mt-4 w-full rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                  onClick={handlePlayClick}
                >
                  Play
                </button>
              </div>
            </div>
            <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <div className="px-4 my-6">
                <h3 className="text-lg font-semibold">Campaign Name</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Campaign Details: Lucky Winner will get BDT 500/- Recharge
                </p>
                <button
                  type="button"
                  className="px-6 py-2 mt-4 w-full rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                  onClick={handlePlayClick}
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserFooter />
    </div>
  );
};

export default PlayNowPage;
