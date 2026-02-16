import React, { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function createUser(newUser) {
  const response = await fetch("http://localhost:2000/api/users/register", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) throw new Error("failed create new user");
  return response.json()
}
export const Testpage = () => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const quertCleint = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      quertCleint.invalidateQueries({
        queryKey: ['User']
      });
    },
  });
  const handleAdd = () => {
    mutation.mutate({ name: user, email, password });
  };

  return (
    <div>
      <h2>register User</h2>
      <Input type={"name"} onChange={(e) => setUser(e.target.value)} required />
      <Input type={"email"} onChange={(e) => setEmail(e.target.value)} />
      <Input
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br /> <br />
      <Button onClick={handleAdd}>Register</Button> 
      {
      user?.length < 0 && user.map(u => (
          <p>{u.name}</p>
        ))
      }
    </div>
  );
};
