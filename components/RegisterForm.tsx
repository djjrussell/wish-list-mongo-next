"use client";

import { userExistsByEmail } from "@/libs/helpers/userExistsByEmail";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    const userExists = await userExistsByEmail(email);

    if (userExists === true) {
      alert("user already exists");
      return false;
    }

    const resp = await fetch("/api/register", {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify({ email, username, password }),
    });

    if (resp.ok) {
      const form = e.target;
      form.reset();
      router.push("/experiences/auth/login");
    } else {
      console.log("registration failed");
    }
    alert(
      `email: ${email} password: ${password} confirmPassword: ${confirmPassword} username: ${username}`
    );
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <section className="border-indigo-400 rounded-md p-8 bg-indigo-300 box-shadow-lg ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            placeholder="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="p-2 text-white bg-indigo-400 hover:bg-indigo-400/70 drop-shadow-lg"
            type="submit"
            onSubmit={handleSubmit}
          >
            Log in
          </button>
        </form>
        <span className="text-slate-600">
          Have an account?
          <Link
            className="ml-1 hover:text-indigo-800"
            href="/experiences/unauth/login"
          >
            Log in
          </Link>
        </span>
      </section>
    </main>
  );
};

export default RegisterForm;
