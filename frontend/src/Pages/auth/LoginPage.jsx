import React from "react";
import logoTracker from "../auth/logoTracker.svg";
import { Link } from "react-router-dom";
import { LoginForm } from "@/components/Auth/LoginForm";

export const LoginPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* header section */}
        <div className="flex items-center mt-10">
          <img src={logoTracker} className="w-10 h-10" alt="" />
          <Link to={"/"} className="text-primary text-2xl font-semibold">
            Trackify-app
          </Link>
        </div>
      </div>
      {/* login section */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-background ">
        <div className="z-10 w-full max-w-md px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">Welcome Back</h2>
            <p>we're glad see you again</p>
          </div>
            <LoginForm />
        </div>
      
      </div>
    </>
  );
};
