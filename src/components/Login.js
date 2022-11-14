import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

export const Login = () => {
  const disPatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          disPatch(login({ name: "perto", age: 12, email: "perto@gmail.com" }));
        }}
      >
        Login
      </button>
    </div>
  );
};
