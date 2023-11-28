"use client";

import Link from "next/link";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export const WishItem = async (props: WishItem) => {
  const { name, description, _id } = props;
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/wants/?id=${_id}`, {
        method: "DELETE",
        cache: "no-store",
      });

      if (!res.ok) {
        alert("something went wrong");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section className="border rounded-md border-slate-300 justify-between my-2 p-4 flex hover:bg-slate-100 cursor-pointer">
      <div>
        <h2 className="font-bold">{name}</h2>
        <div className="text-gray-600">{description}</div>
      </div>
      <div className="justify-between flex gap-2">
        <FaRegTrashAlt onClick={handleDelete} />
        <Link href={`edit-item/${_id}`}>
          <FaEdit />
        </Link>
      </div>
    </section>
  );
};
