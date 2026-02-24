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

import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api/apiCleints";
import useAuthStore from "@/lib/store/authStore";
import { MessageErrorUttils } from "@/utils/errorUtils";

export const LoginForm = () => {
  const [formValues, setFoarmValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { setAuth } = useAuthStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoarmValues({
      ...formValues,
      [name]: value,
    });
  };
  const loginMutaution = useMutation({
    mutationFn: async (Credential) => {
      const response = await api.post("/users/login", Credential);
      console.log(response.data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.token) {
        const user = data.user;
        const token = data.token;
        setAuth(user, token);
        navigate("/dashboard");
      }
    },
    onError: (error) => {
      console.log("this user not login", error);
      setError(MessageErrorUttils(error));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!formValues.email || !formValues.password) {
      console.log("all fields are required");
      return;
    }
    loginMutaution.mutate({
      email: formValues.email,
      password: formValues.password,
    });
  };

  return (
    <Card className={"rounded-md w-full border-border "}>
      <CardHeader className={"space-y-1 pb-4"}>
        <CardTitle className={"text-xl text-center"}>signin</CardTitle>
        <CardDescription className={"text-center"}>
          <p>Enter your credentails to access your accont</p>
        </CardDescription>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-2 pt-0">
              {error && (
                <p className="text-center bg-secondary text-sm p-2 text-destructive">
                  {error}
                </p>
              )}
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
              <div className="text-sm font-medium text-left">Password</div>
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
              <Button type="submit" className="text-center w-full">
                login account
              </Button>
            </div>
          </CardContent>
          <div>
            <CardFooter className={"flex justify-center pt-0"}>
              <div className="text-center text-sm">
                Don't have an account ?
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  {" "}
                  Sign up
                </a>
              </div>
            </CardFooter>
          </div>
        </form>
      </CardHeader>
    </Card>
  );
};
