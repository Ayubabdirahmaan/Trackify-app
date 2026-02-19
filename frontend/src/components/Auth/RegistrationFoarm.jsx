import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const RegistrationFoarm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState();

  const createUserAccount = useMutation({
    mutationFn: async (userData) => {
      const respose = await axios.post(
        "http://localhost:2000/api/users/register",
        userData,
      );
      console.log(respose.data);
      return respose.data;
    },
    onSuccess: (data) => {
      console.log("successfully", data);
    },
    onError: (error) => {
        // toast.error(error)
      console.log("this user not create", error);
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setError(null);
    if (!formValues.name || !formValues.email || !formValues.password) {
      console.log("all fields are required");
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      console.log("passowds not mutch");
    }

    createUserAccount.mutate({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
    });
  };

  return (
    <Card className={"w-full border-border"}>
      <CardHeader className={"space-y-3"}>
        <CardTitle className={"text-center text-xl"}>
          Create an account
        </CardTitle>
        <CardDescription className={"text-center"}>
          {" "}
          Enter your details to register
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleAdd}>
        <CardContent>
          <div className="spac-y-6">
            {<p>{error}</p>}
            <div className="font-semibold text-sm">Full Name</div>
            <Input
              name="name"
              placeholder="john does"
              required
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div className="spac-y-6">
            <div className="font-semibold text-sm">Email</div>
            <Input
              name="email"
              placeholder="email@gmail.com"
              required
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="spac-y-6">
            <div className="font-semibold text-sm">Password</div>
            <Input
              name="password"
              placeholder="********"
              required
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="spac-y-6">
            <div className="font-semibold text-sm">confrim Password</div>
            <Input
              name="confirmPassword"
              type={"password"}
              placeholder="********"
              required
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="py-5 flex justify-center">
            <Button className={"w-full"}>Create Account</Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};
