import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";

import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export const LoginForm = () => {
  const [formValues, setFoarmValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = () => {};

  const navigate = useNavigate();
  return (
    <Card className={"rounded-md w-full border-border "}>
      <CardHeader className={"space-y-1 pb-4"}>
        <CardTitle className={"text-xl text-center"}>signin</CardTitle>
        <CardDescription className={"text-center"}>
          <p>Enter your credentails to access your accont</p>
        </CardDescription>
        <form>
          <CardContent>
            <div className="space-y-2 pt-0">
              <div className="text-sm font-medium text-left">Email</div>
              <Input
                type={"email"}
                name="email"
                placeholder="eamil@gmail.com"
                required
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="spac-y-2 pt-0">
              <div className="text-sm font-medium text-left">pasword</div>
              <Input
                type={"password"}
                name="password"
                placeholder="**********"
                required
                value={formValues.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="py-4">
              <Button type="submit" className="rounded-md">
                login account
              </Button>
            </div>
          </CardContent>
          <div>
            <CardFooter className={"flex justify-center pt-0"}>
              <div className="text-center text-sm">
                Don't have an account ?
                <a onClick={() => navigate("/register")}>Sign up</a>
              </div>
            </CardFooter>
          </div>
        </form>
      </CardHeader>
    </Card>
  );
};
