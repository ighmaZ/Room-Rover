"use client";

import { useEffect } from "react";
import { useAuthStore } from "./store/useAuth";
import axios from "axios";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { login } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3001/auth/user", {
          // Note: Changed to 3001 as per your backend port
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          login(token, response.data);
        })
        .catch((error) => {
          console.error("Authentication error:", error);
        });
    }
  }, [login]);

  return <>{children}</>;
}
