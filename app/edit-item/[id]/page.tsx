"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const EditItemPage = ({ params }: any) => {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/wants/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.want);
        setName(data.want.name);
        setNotes(data.want.notes);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  const router = useRouter();

  // need to add star interface

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/wants/${params.id}`, {
        method: "PUT",
        cache: "no-store",
        body: JSON.stringify({ name, notes }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (e) {
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
      <button
        type="submit"
        className="p-2 text-white bg-indigo-400 hover:bg-indigo-400/70"
      >
        Save
      </button>
    </form>
  );
};

export default EditItemPage;
