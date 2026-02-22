import api from "@/lib/api/apiCleints";
import useAuthStore from "@/lib/store/authStore";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const AdminProtectRoute = ({ children }) => {
  const { token, user, clearAuth, setAuth } = useAuthStore();
  const location = useLocation();

  const { data, error, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const response = await api.get("/admin/dashboard");

      if (!response.data) {
        throw new Error("Invalid token");
      }
      return response.data;
    },
    retry: 1,
  });

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  useEffect(() => {
    if (isError && data) {
      clearAuth();
    }
  }, [isError, error, data, clearAuth]);

  useEffect(() => {
    setAuth(data, token);
  }, [isSuccess, data, setAuth, token]);

  if (isLoading) {
  return (
    <div className="flex h-screen justify-center items-center">
      <Loader className="animate-spin" />
    </div>
  );
}

if (isError) {
  return <Navigate to="/login" state={{ from: location }} replace />;
}

if (user?.role != "user") {
  return <Navigate to='/login' state={{ from: location }} replace />;
}
console.log("userInfo", user);

return children;

};

