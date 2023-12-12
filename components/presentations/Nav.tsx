"use client";

import Link from "next/link";
import { BsFillPlusCircleFill } from "react-icons/bs";
import ProfileSection from "./ProfileSection";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import MenuDrawer from "../MenuDrawer";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="bg-indigo-500 px-8 py-3 flex w-full justify-between drop-shadow-lg rounded-3xl align-middle items-center">
        <div className="gap-2 flex flex-row items-center">
          <RxHamburgerMenu
            size="25"
            onClick={() => setMenuOpen((x: boolean) => !x)}
            className="text-white cursor-pointer hover:scale-105"
          />
          <Link href="/experiences/auth/" className="hover:scale-105">
            <h1 className="text-white font-bolder cursor-pointer text-3xl tracking-[-3px]">
              BishList
            </h1>
          </Link>
        </div>
        <Link href="/experiences/auth/add-item" className="hover:scale-105">
          <BsFillPlusCircleFill fill="white" size="50" />
        </Link>
        <ProfileSection />
      </nav>
      <MenuDrawer {...{ menuOpen, setMenuOpen }} />
    </>
  );
};

export default Nav;
