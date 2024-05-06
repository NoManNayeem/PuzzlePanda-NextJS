"use client";

// pages/userpage.js
import { useState } from "react";
import UserHeader from "./userComponents/UserHeader";
import UserFooter from "./userComponents/UserFooter";
import { FaCirclePlay } from "react-icons/fa6";

import Image from "next/image";


const UserPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [campaignData, setCampaignData] = useState({
    winner: "John Doe",
    firstRunnerUp: "Jane Smith",
    secondRunnerUp: "Alex Johnson",
    campaignEnds: "2022-05-15",
  });

  // Dummy data for table
  const tableData = [
    {
      name: "Nayeem Islam",
      startDate: "2022-07-15",
      endDate: "2022-05-27",
    },
    {
      name: "John Doe",
      startDate: "2022-05-15",
      endDate: "2022-05-15",
    },
    // Add more dummy data here if needed
  ];

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <UserHeader />
      {/* Hero */}
      <div className="flex-grow container mx-auto p-4">
        <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <Image width={500}
      height={300} 
            src="https://placehold.co/600x400"
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="sm:text-4xl text-2xl font-bold mb-6">
              Train your Brain!
            </h2>
            <p className="text-lg text-center text-gray-200">
              Embark on unforgettable journeys. Test your knowledge with 50K
              others!
            </p>
            <a
              href="/user/play-now"
              className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
            >
              Play Now
            </a>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4 mb-6">
          <table className="min-w-full bg-white font-[sans-serif]">
            <thead className="bg-gray-800 whitespace-nowrap">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">
                  Name
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">
                  Start Date
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">
                  End Date
                </th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap divide-y divide-gray-200">
              {tableData.map((item, index) => (
                <tr key={index} className="hover:bg-sky-100">
                  <td className="px-4 md:px-6 py-4 text-sm">{item.name}</td>
                  <td className="px-4 md:px-6 py-4 text-sm">
                    {item.startDate}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm">{item.endDate}</td>
                  <td className="px-4 md:px-6 py-4">
                    <button
                      className="mr-4"
                      title="Edit"
                      onClick={handleModalOpen}
                    >
                      <FaCirclePlay size={32} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UserFooter />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
            <div className="flex items-center pb-3 border-b text-black">
              <h3 className="text-xl font-bold flex-1">Test Campaign</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
                viewBox="0 0 320.591 320.591"
                onClick={handleModalClose}
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
            <div className="my-6">
              <p className="text-sm">
                Winner: {campaignData.winner}
                <br />
                First Runner Up: {campaignData.firstRunnerUp}
                <br />
                Second Runner Up: {campaignData.secondRunnerUp}
                <br />
                Campaign Ends: {campaignData.campaignEnds}
              </p>
            </div>
            <div className="border-t flex justify-end pt-6 space-x-4">
              <button
                type="button"
                className="px-6 py-2 rounded-md text-black text-sm border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-6 py-2 rounded-md text-white text-sm border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
