import create from "zustand";

interface User {
  imageUrl?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string, user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (token, user) => {
    localStorage.setItem("token", token);
    set({ isAuthenticated: true, user });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ isAuthenticated: false, user: null });
  },
}));
