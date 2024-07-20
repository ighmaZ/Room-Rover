"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

export default function useAuth() {
  const [user, setUser] = useState<{
    email: string;
    photoUrl: string;
    name: string;
  } | null>(null);

  const router = useRouter();
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get("/api/profile")
        .then((response) => {
          setUser(response.data);
          window.history.replaceState({}, "", "/"); // Clean URL by removing the token
          router.push("/homePage"); // Redirect to homepage
        })
        .catch(() => {
          // Handle error (optional)
          window.history.replaceState({}, "", "/"); // Clean URL in case of error
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
    router.push("http://localhost:3001/api/auth/google");
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
