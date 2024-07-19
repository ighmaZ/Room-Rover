// app/hooks/useAuth.ts
"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth() {
  const [user, setUser] = useState<{
    email: string;
    photoUrl: string;
    displayName: string;
  } | null>(null);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.get("/api/profile").then((response) => {
        setUser(response.data);
      });
    } else {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storedToken}`;
        axios.get("/api/profile").then((response) => {
          setUser(response.data);
        });
      }
    }
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/google";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    delete axios.defaults.headers.common["Authorization"];
    window.location.href = "/";
  };

  return {
    user,
    handleLogin,
    handleLogout,
  };
}
