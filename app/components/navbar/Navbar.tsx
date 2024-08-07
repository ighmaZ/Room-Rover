"use client";

import { useState, useRef, useEffect } from "react";
import { LuSofa } from "react-icons/lu";
import { FaBars, FaCreditCard, FaSignOutAlt, FaTimes } from "react-icons/fa";
import Modal from "../modal";
import useModalStore from "@/app/store/useModal";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hooks/useAuth";
import LoadingSpinner from "../loadingSpinner";

const Navbar = () => {
  const { openModal } = useModalStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, handleLogout, loading } = useAuth();
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTooltip = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setTooltipOpen((prevState) => !prevState);
  };

  const router = useRouter();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative container w-full bg-transparent mx-auto py-4 px-5 md:px-0 flex justify-between items-center z-50">
      {(tooltipOpen || menuOpen) && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-transparent z-10"
          onClick={() => setTooltipOpen(false)}
        />
      )}
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
        } flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent z-20 p-5 md:p-0`}
      >
        {user ? (
          <div className="md:flex">
            <div>
              <button
                onClick={() => router.push("/pricing")}
                className="text-gray-300 text-lg hover:text-gray-500 mb-4 md:mb-0 md:mr-10 mt-1"
              >
                Pricing
              </button>
            </div>
            <div className="relative">
              <button onClick={toggleTooltip} className="focus:outline-none">
                <img
                  src={user.photoUrl}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              {tooltipOpen && (
                <div
                  ref={tooltipRef}
                  className="absolute right-0 mt-2 w-48 bg-gray-700 text-white shadow-lg rounded-lg py-2 z-30"
                >
                  <div className="px-4 py-2">
                    <span className="block font-semibold ">{user.name}</span>
                    <span className="block text-sm">{user.email}</span>
                  </div>
                  <hr className="border-gray-200" />
                  <button
                    onClick={() => {
                      router.push("/pricing");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center transition duration-300 ease-in-out"
                  >
                    <FaCreditCard className="mr-2 text-blue-700" />
                    Purchase Credit
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-500 flex items-center transition duration-300 ease-in-out"
                  >
                    <FaSignOutAlt className="mr-2 text-red-600" />
                    Logout
                  </button>
                </div>
              )}
            </div>
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
