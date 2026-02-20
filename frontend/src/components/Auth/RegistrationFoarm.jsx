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
import { toast } from "sonner";
import api from "@/lib/api/apiCleints";
import { MessageErrorUttils } from "@/utils/errorUtils";
import { useNavigate } from "react-router-dom";


export const RegistrationFoarm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

        const Navigate = useNavigate()
  const [error, setError] = useState(null);

  const createUserAccount = useMutation({
    mutationFn: async (userData) => {
      const response = await api.post("/users/register", userData);
      console.log(response.data);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("successfully", data);
      toast.success("Creation accont successfully");
      Navigate('/login')
    },
    onError: (error) => {
      setError(MessageErrorUttils(error))
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
      toast.error(`Passwords don't mutch`);
      return;
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
            {error && (
              <p className="text-center text-sm text-primary bg-secondary p-2">
                {error}
              </p>
            )}
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
