"use client";

import { signOut } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";

export const LogOutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="text-white text-sm	hover:scale-105"
    >
      Log out
    </button>
  );
};

export default LogOutButton;
