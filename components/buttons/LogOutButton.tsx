"use client";

import { signOut } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";

export const LogOutButton = () => {
  return (
    <button onClick={() => signOut()}>
      <IoLogOutOutline
        size={100}
        className="text-white font-bold h-9 hover:h-10"
      />
    </button>
  );
};

export default LogOutButton;
