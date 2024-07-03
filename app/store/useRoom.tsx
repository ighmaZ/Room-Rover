import { create } from "zustand";
import { Room } from "../../utils/types";

interface RoomStore {
  selectedRoom: Room;
  setSelectedRoom: (room: Room) => void;
}

export const useRoom = create<RoomStore>((set) => ({
  selectedRoom: "Bedroom",
  setSelectedRoom: (room) => set({ selectedRoom: room }),
}));
