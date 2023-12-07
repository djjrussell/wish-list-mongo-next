"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Logo from "../presentations/Logo";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (resp?.error) {
        alert("invalid credentials");
        return false;
      }

      router.push("/experiences/auth/");
      router.refresh();
    } catch (e) {
      console.log(e);
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
    </main>
  );
};

export default LoginForm;
