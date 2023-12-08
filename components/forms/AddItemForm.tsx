"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import LoadingSpinner from "../presentations/LoadingSpinner";

const AddItemForm = () => {
  const [name, setName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { data: session } = useSession();
  const user: User = session?.user as any;

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!name || !notes || !rating) {
      alert("enter some information you piece of shit");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/wants", {
        method: "POST",
        cache: "no-store",
        body: JSON.stringify({
          name,
          notes,
          rating,
          userId: user.id,
        }),
      });

      if (res.ok) {
        router.push("/experiences/auth/");
        router.refresh();
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <form className="flex flex-col gap-4 my-4" onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <textarea
        placeholder="Links and descriptions"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
      />
      <Rating initialValue={rating} onClick={handleRating} />
      <button
        className="p-2 text-white bg-indigo-500 hover:bg-indigo-500/70 drop-shadow-lg rounded-2xl"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default AddItemForm;
