"use client";

import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import DeleteButton from "./DeleteButton";

export const WishItem = (props: WishItem) => {
  const { name, notes, _id } = props;

  return (
    <section className="border rounded-md border-slate-300 justify-between my-2 p-4 flex hover:bg-slate-100 cursor-pointer">
      <div>
        <h2 className="font-bold">{name}</h2>
        <div className="text-gray-600">{notes}</div>
      </div>
      <div className="justify-between flex gap-2">
        <DeleteButton id={_id} />
        <Link href={`edit-item/${_id}`}>
          <FaEdit />
        </Link>
      </div>
    </section>
  );
};
