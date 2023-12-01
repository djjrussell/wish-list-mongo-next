"use client";

import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import { Rating } from "react-simple-star-rating";

export const WishItem = (props: WishItem) => {
  const { name, notes, _id, rating } = props;

  return (
    <section
      className="border rounded-md drop-shadow-lg justify-between my-2 p-4 flex cursor-pointer bg-white hover:scale-105"
      key={_id}
    >
      <div>
        <h2 className="font-bold">{name}</h2>
        <div className="text-gray-600">{notes}</div>
        <Rating initialValue={rating} readonly fillColor="#9FA8DA" />
      </div>
      <div className="justify-between flex gap-2">
        <DeleteButton id={_id} />
        <Link href={`edit-item/${_id}`} className="hover:scale-150">
          <FaEdit />
        </Link>
      </div>
    </section>
  );
};
