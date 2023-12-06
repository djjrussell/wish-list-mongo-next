import Link from "next/link";
import LogOutButton from "./LogOutButton";
import { BsFillPlusCircleFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="bg-indigo-500 px-8 py-3 flex w-full justify-between drop-shadow-lg rounded-3xl align-middle items-center">
      <Link href="/experiences/auth/">
        <h1 className="text-white font-bolder cursor-pointer text-3xl tracking-[-3px]">
          BishList
        </h1>
      </Link>
      <Link href="/experiences/auth/add-item" className="hover:scale-105">
        <BsFillPlusCircleFill fill="white" size="50" />
      </Link>
      <LogOutButton />
    </nav>
  );
};

export default NavBar;
