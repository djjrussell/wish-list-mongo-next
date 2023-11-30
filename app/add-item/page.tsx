"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

const AddItemPage = () => {
  const [name, setName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!name || !notes) {
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
        }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      }
      setLoading(false);
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
      <button
        className="p-2 text-white bg-indigo-400 hover:bg-indigo-400/70 drop-shadow-lg"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default AddItemPage;
