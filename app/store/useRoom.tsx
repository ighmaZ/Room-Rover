import { create } from "zustand";
import { Room } from "../../utils/types";

interface RoomStore {
  selectedRoom: Room;
  setSelectedRoom: (room: Room) => void;
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
}

export const useRoomStore = create<RoomStore>((set) => ({
  selectedRoom: "Bedroom",
  setSelectedRoom: (room) => set({ selectedRoom: room }),
  selectedTheme: "",
  setSelectedTheme: (theme) => set({ selectedTheme: theme }),
}));
