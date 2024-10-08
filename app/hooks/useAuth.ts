"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const [user, setUser] = useState<{
    email: string;
    photoUrl: string;
    name: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      console.log("rendering");
      try {
        const token =
          new URLSearchParams(window.location.search).get("token") ||
          localStorage.getItem("token");

        if (token) {
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const response = await axios.get("/api/profile");
          setUser(response.data);

          if (new URLSearchParams(window.location.search).get("token")) {
            router.replace("/homePage");
          }
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = () => {
    router.push(
      "https://interior-ai-backend-s89i.vercel.app/api/auth/google/callback"
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    delete axios.defaults.headers.common["Authorization"];
    router.push("/");
  };

  return {
    user,
    handleLogin,
    handleLogout,
    loading,
  };
}
