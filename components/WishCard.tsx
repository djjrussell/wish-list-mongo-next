"use client";

import { useRouter } from "next/navigation";
import WishCardContent from "./WishCardContent";

export const WishCard = (props: WishItem) => {
  const router = useRouter();

  const handleClick = () => {
    return router.push(`/experiences/auth/edit-item/${props._id}`);
  };

  return (
    <section
      className="border rounded-3xl drop-shadow-lg justify-between my-2 p-4 flex cursor-pointer bg-white hover:scale-105"
      key={props._id}
      onClick={() => handleClick()}
    >
      <WishCardContent {...props} />
    </section>
  );
};
