"use client";

import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import LoadingSpinner from "./loadingSpinner";
import { useRouter } from "next/navigation";
import Modal from "./modal";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/");
      }
    }, [user, loading, router]);

    if (loading || !user) {
      return <LoadingSpinner />;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
