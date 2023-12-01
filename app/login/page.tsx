"use client";

import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    alert(`email: ${email} password: ${password}`);
  };

  return (
    <main className="h-screen flex items-center justify-center">
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
            className="p-2 text-white bg-indigo-400 hover:bg-indigo-400/70 drop-shadow-lg"
            type="submit"
          >
            Log in
          </button>
        </form>
        <p className="text-slate-400">
          Dont have an account? <Link href="/register">Register</Link>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
