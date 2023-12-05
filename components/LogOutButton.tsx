"use client";

import { signOut } from "next-auth/react";

export const LogOutButton = () => {
  return <button onClick={() => signOut()}>LOG OUT</button>;
};

export default LogOutButton;
