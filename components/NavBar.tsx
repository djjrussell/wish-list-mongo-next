import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-indigo-500 px-8 py-3 flex w-full items-center justify-between drop-shadow-lg rounded ">
      <Link
        className="text-white font-bold cursor-pointer text-xl"
        href="/authenticated/experiences/"
      >
        Bish List
      </Link>
      <Link
        className="bg-white hover:bg-indigo-100 text-indigo-900 font-semibold py-2 px-4 border border-indigo-500 hover:border-indigo-700 rounded cursor-pointer"
        href="/experiences/authenticated/add-item"
      >
        Add To Bishlist
      </Link>
    </nav>
  );
};

export default NavBar;
