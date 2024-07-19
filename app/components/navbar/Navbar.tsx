"use client";

import { useState } from "react";
import { LuSofa } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "../modal";
import useModalStore from "@/app/store/useModal";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hooks/useAuth";

const Navbar = () => {
  const { openModal } = useModalStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, handleLogout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();
  return (
    <div className="container w-full bg-transparent mx-auto py-4 px-5 md:px-0 flex justify-between items-center z-50">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => router.push("/#")}
      >
        <div className="text-lg sm:text-3xl mt-[.1rem] mr-2 sm:mt-1 text-purple-300">
          <LuSofa />
        </div>
        <div className="text-lg sm:text-3xl font-bold text-gradient">
          Room Rover
        </div>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-300 focus:outline-none"
        >
          {menuOpen ? (
            <FaTimes size={24} className="text-white-500" />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      </div>
      <div
        className={`md:flex items-center ${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent z-10 p-5 md:p-0`}
      >
        <button className="text-gray-300 text-lg hover:text-gray-500 mb-4 md:mb-0 md:mr-10">
          Pricing
        </button>
        {user ? (
          <div>
            <img
              src={user.photoUrl}
              alt="Profile"
              style={{ width: "32px", height: "32px", borderRadius: "50%" }}
            />
            <span>{user.email}</span>
            <span>{user.displayName}</span>
            <button
              className="text-white py-2 px-4 md:ml-10 font-semibold border border-gray-500 hover:bg-gray-700 rounded-xl shadow-2xl shadow-sky-300 mb-4 md:mb-0"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="text-white py-2 px-8 font-semibold border border-gray-500 hover:bg-gray-700 rounded-xl shadow-2xl shadow-sky-300 mb-4 md:mb-0"
            onClick={() => openModal()}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
