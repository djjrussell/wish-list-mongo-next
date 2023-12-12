"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Logo from "../presentations/Logo";
import { Alert, Snackbar } from "@mui/material";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [snackOpen, setSnackOpen] = useState<boolean>(false);
  const router = useRouter();

  const showError = () => {
    setErrorMessage("there was a problem signing you in");
    setSnackOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (resp?.error) {
        showError();
      }

      router.push("/experiences/auth/");
      router.refresh();
    } catch (e) {
      console.log(e);
      showError();
    }
  };

  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <Logo />
      <section className="border-indigo-400 rounded-md p-8 bg-indigo-300 box-shadow-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            placeholder="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="p-2 text-white bg-indigo-400 hover:bg-indigo-400/70 drop-shadow-lg rounded-3xl"
            type="submit"
          >
            Log in
          </button>
        </form>
        <span className="text-slate-500"></span>
        <div className="text-slate-600 mt-2">
          Dont have an account?
          <Link
            href="/experiences/unauth/register"
            className="ml-1 hover:text-indigo-800"
          >
            Register
          </Link>
        </div>
      </section>
      <Snackbar
        sx={{ height: "50%" }}
        open={snackOpen}
        autoHideDuration={6000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </main>
  );
};

export default LoginForm;
