"use client";

// components/Header.js
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md"; // Importing icons from React Icons
import {
  FaUserAlt,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaSignOutAlt,
} from "react-icons/fa"; // Additional icons for profile details
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const AdminHeader = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // Dummy user data
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    birthday: "Jan 1, 1990",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
    puzzlesCompleted: 120,
    puzzlesInProgress: 5,
  };

  const handleLogout = async () => {
    // Prompt the user to confirm they want to logout
    if (!confirm("Are you sure you want to log out?")) {
      return;
    }

    // Remove the cookies or any other authentication tokens
    deleteCookie("token");
    deleteCookie("usertype");

    // Assuming `setSidebarOpen` updates a state that controls the sidebar
    setSidebarOpen(false);

    // Redirect to the login page or homepage
    const router = useRouter();
    router.push("/login");
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-800 to-purple-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">
            <Link href="/"> Puzzle-Panda </Link>
          </h1>
          <button onClick={() => setSidebarOpen(true)} className="text-white">
            <MdMenu className="h-6 w-6" /> {/* Menu icon */}
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="bg-black opacity-50 flex-grow"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="w-64 bg-white p-5 shadow-xl flex flex-col">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-bold text-xl">Profile</span>
              <button onClick={() => setSidebarOpen(false)}>
                <MdClose className="h-6 w-6" /> {/* Close icon */}
              </button>
            </div>
            {/* User profile section */}
            <div className="flex-grow">
              <div className="text-center mt-4">
                <Image
                  width={500}
                  height={300}
                  src={userData.imageUrl}
                  alt="User"
                  className="rounded-full h-24 w-24 mx-auto"
                />
                <h3 className="mt-2 font-bold">{userData.name}</h3>
                <p className="text-gray-600">{userData.email}</p>
                <div className="mt-4 text-left">
                  <p className="flex items-center">
                    <FaPhone className="mr-2" /> {userData.phone}
                  </p>
                  <p className="flex items-center">
                    <FaEnvelope className="mr-2" /> {userData.email}
                  </p>
                  <p className="flex items-center">
                    <FaBirthdayCake className="mr-2" /> {userData.birthday}
                  </p>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg shadow">
                  <h4 className="font-bold text-white">Puzzle Stats</h4>
                  <p className="text-white">
                    Completed: {userData.puzzlesCompleted}
                  </p>
                  <p className="text-white">
                    In Progress: {userData.puzzlesInProgress}
                  </p>
                </div>
              </div>
            </div>
            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="mt-4 p-2 bg-red-600 text-white flex justify-center items-center rounded hover:bg-red-700 transition duration-300 w-full"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default AdminHeader;
