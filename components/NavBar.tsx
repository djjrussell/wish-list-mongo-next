import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-indigo-500 px-8 py-3 flex w-full items-center justify-between">
      <Link className="text-white font-extrabold" href="/">
        Wish List
      </Link>
      <Link className="bg-white p-2 button" href="add-item">
        Add To Wishlist
      </Link>
    </nav>
  );
};

export default NavBar;
