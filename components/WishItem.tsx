"use client";

import DeleteButton from "./DeleteButton";
import { Rating } from "react-simple-star-rating";
import { useRouter } from "next/navigation";

export const WishItem = (props: WishItem) => {
  const { name, notes, _id, rating } = props;

  const router = useRouter();

  const handleClick = () => {
    return router.push(`/experiences/auth/edit-item/${_id}`);
  };

  return (
    <section
      className="border rounded-3xl drop-shadow-lg justify-between my-2 p-4 flex cursor-pointer bg-white hover:scale-105"
      key={_id}
      onClick={() => handleClick()}
    >
      <div>
        <h2 className="font-bold">{name}</h2>
        <div className="text-gray-600">{notes}</div>
        <Rating initialValue={rating} readonly fillColor="#9FA8DA" />
      </div>
      <div className="justify-between flex gap-2">
        <DeleteButton id={_id} name={name} />
      </div>
    </section>
  );
};
