"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuth";

export default function AuthCallback() {
  const router = useRouter();
  const { login } = useAuthStore();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      // Here you would typically validate the token and fetch user info
      // For simplicity, we'll just store the token and redirect
      login(token, {
        /* user info */
      });
      router.push("/homePage");
    }
  }, []);

  return <div>Authenticating...</div>;
}
