import React from "react";
import logoTracker from "../assets/logoTracker.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const LadingPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* header section */}
      <header className=" flex justify-between items-center m-3">
        {/* logo */}
        <div className="flex items-center">
          <div>
            <img src={logoTracker} className="w-20 h-20" alt="" />
          </div>
          <div className="text-2xl font-semibold text-primary cursor-pointer ">
            Trackify-app
          </div>
        </div>
        {/* singIn */}
        <div>
          <Link
            to="/login"
            className="bg-primary text-secondary p-3 w-10 h-10 rounded mt-2"
          >
            Sign In
          </Link>
        </div>
      </header>
      {/* hero section */}
      <div className="flex flex-col justify-center text-center mt-15">
        <div className="mb-5">
          {/* hero title */}
          <h2 className="text-3xl font-semibold text-primary">
            Smart Financial Tracking for Better Money Decisions Every Day
          </h2>
          {/* description */}
        </div>
        <div>
          {" "}
          <p className="text-lg">
            Track expenses, analyze trends, and stay in control of your
            financial life.
          </p>
        </div>
        <div className="flex justify-center gap-3 mt-10">
          <div className="">
            <Button className="rounded-full">Get Started Free</Button>
          </div>
          <div>
            <Button className="rounded-full bg-destructive">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
