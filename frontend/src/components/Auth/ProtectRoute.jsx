import api from "@/lib/api/apiCleints";
import useAuthStore from "@/lib/store/authStore";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";

export const ProtectRoute = ({ children }) => {
  const { user, token, setAuth, clearAuth } = useAuthStore();

  const location = useLocation();

  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const response = await api.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data) {
        throw new Error("invalid token");
      }
      return response.data;
    },
    retry: 1,
  });

  if (!token) {
    return  <Navigate to={'/login'} state={{from: location}} replace />
  }
  // error case

  useEffect(() => {
    if (isError && data) {
      clearAuth();
    }
  }, [isError, error, data, clearAuth]);

  useEffect(() => {
    setAuth(data, token);
  }, [isSuccess, data, setAuth, token]);

  if (isLoading) {
    <div className="flex h-screen justify-center items-center">
      <Loader className="animate-spin" />
    </div>;
  }
  if (isError) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};
