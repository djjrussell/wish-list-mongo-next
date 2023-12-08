"use client";
import { CgProfile } from "react-icons/cg";
import LogOutButton from "../buttons/LogOutButton";
import { useSession } from "next-auth/react";

const ProfileSection = () => {
  const { data: session, status } = useSession();
  const user: User = session?.user as any;

  if (status === "loading") {
    return <div />;
  }

  return (
    <div className="flex flex-col items-centered text-lg text-white algn-middle">
      <p className="text-xl">{user?.username}</p>
      <LogOutButton />
    </div>
  );
};

export default ProfileSection;
