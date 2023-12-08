import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className=" flex align-middle justify-center bg-slate-100 bottom-0 left-0 right-0 absolute p-4 text-slate-500 drop-shadow-lg">
      <article className="flex flex-col">
        <ul>email: djjrussell@gmail.com</ul>
        <ul>
          github: <Link href="https://github.com/djjrussell">djjrussell</Link>
        </ul>
      </article>
    </section>
  );
};

export default Footer;
