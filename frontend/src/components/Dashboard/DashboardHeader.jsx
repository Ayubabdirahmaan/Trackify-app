import useAuthStore from "@/lib/store/authStore";
import { Banknote, LucideLogOut } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const DashboardHeader = () => {
  const { user, clearAuth } = useAuthStore();

  const navigate = useNavigate();
  const queryCleint = useQueryClient();

  const handleLogout = () => {
    if (confirm("are you sure you want to logout ")) {
      clearAuth();
      queryCleint.clear();
      navigate("/login", { replace: true });
    }
  };
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-primary">
            <Banknote className="h-4 w-4 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-semibold text-foreground">
            Finance Tracker{" "}
          </h1>
        </div>
        <div className="flex items-center ga-4 ">
          <span className="text-sm text-muted-foreground gap-3 mr-3">
            Welcome
          </span>
          <span className="font-medium text-foreground space-x-4 mr-3">
            <span>{user?.name || 'User'}</span>
          </span>
          <Button
            className={"rounded-full"}
            variant="outline"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
