"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

const EditItemPage = ({ params }: any) => {
  const [name, setName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/api/wants/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.want.name);
        setNotes(data.want.notes);
        setRating(data.want.rating);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/wants/${params.id}`, {
        method: "PUT",
        cache: "no-store",
        body: JSON.stringify({ name, notes, rating }),
      });
      if (res.ok) {
        router.push("/experiences/auth/");
        router.refresh();
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
      <input
        placeholder="Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Links and descriptions"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <Rating initialValue={rating} onClick={handleRating} />
      <button
        type="submit"
        className="p-2 text-white bg-indigo-400 hover:bg-indigo-400/70 drop-shadow-lg"
      >
        Save
      </button>
    </form>
  );
};

export default EditItemPage;
