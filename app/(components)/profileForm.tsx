"use client";

import { useEffect } from "react";
// import React, { useEffect, useState } from "react";
import { useUserStore } from "../stores/useUserStore";
// import { HeaderText } from "./UI";

export const ProfileForm = () => {
  const { checkBackend } = useUserStore();

  const isBackEnd = checkBackend();
  // const [isSignUp, setIsSignUp] = useState(false);
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const { user, checkAuth, checkingAuth, signup, login, logout } =
  //   useUserStore();

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  // if (checkingAuth) return <p>Loading...</p>;

  // const handleSubmit = async () => {
  //   if (isSignUp) {
  //     await signup(form);
  //   } else {
  //     await login(form.email, form.password);
  //   }
  // };

  return (
    <div className="flex flex-col gap-8 w-96 mt-12 mx-auto">
      <button onClick={() => checkBackend()}>console is backend</button>
      {/* {user !== null ? (
        <div className="flex flex-col gap-4 border-border border rounded-2xl p-8">
          <p className="text-xl">Name: {user.name}</p>
          <p className="text-xl">Email: {user.email}</p>
          <p className="text-xl">Role: {user.role}</p>
          <button
            className="w-full p-4 bg-text-primary rounded-md text-black"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <HeaderText>{isSignUp ? "Sign Up" : "Log In"}</HeaderText>
          <div className="flex flex-col gap-4">
            {isSignUp && (
              <input
                value={form.name}
                className="input-reservation"
                type="text"
                placeholder="Name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            )}
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-reservation"
              type="email"
              placeholder="Email"
            />
            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="input-reservation"
              type="password"
              placeholder="Password"
            />
            {isSignUp && (
              <input
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                className="input-reservation"
                type="password"
                placeholder="Password"
              />
            )}
            <button
              onClick={handleSubmit}
              className="w-full p-4 bg-text-primary rounded-md text-black text-base "
            >
              {isSignUp ? "Sign Up" : "Log In"}
            </button>
          </div>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-blue-500"
          >
            {isSignUp
              ? "Already have an account? Log In"
              : "Don't have an account? Sign Up"}
          </button>
        </>
      )} */}
    </div>
  );
};
