"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddItemPage = () => {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !notes) {
      alert("enter some information you piece of shit");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/wants", {
        method: "POST",
        body: JSON.stringify({
          name,
          notes,
        }),
      });

      if (!res.ok) {
        alert("something went wrong");
      }

      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

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
        className="p-2 text-white bg-indigo-400 hover:bg-indigo-400/70"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default AddItemPage;
