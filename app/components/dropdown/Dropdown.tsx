import { Room } from "@/utils/types";
import { useState } from "react";
import { rooms } from "@/utils/constants";
import { FaChevronDown } from "react-icons/fa";
import { useRoom } from "@/app/store/useRoom";

const DropDown: React.FC = () => {
  const selectedRoom = useRoom((state) => state.selectedRoom);
  const setSelectedRoom = useRoom((state) => state.setSelectedRoom);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoom(e.target.value as Room);
  };
  return (
    <div className="my-5 relative inline-block w-full max-w-xs sm:max-w-sm">
      <select
        value={selectedRoom}
        onChange={handleChange}
        className="block appearance-none w-full text-center  bg-gray-600 border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {rooms.map((room, index) => (
          <option key={index} value={room}>
            {room}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white font">
        <FaChevronDown className="fill-current text-sm " />
      </div>
    </div>
  );
};

export default DropDown;
