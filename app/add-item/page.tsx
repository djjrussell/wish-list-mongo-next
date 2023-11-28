import React from "react";

const AddItemPage = () => {
  return (
    <main className="flex flex-col gap-4 my-4">
      <input
        placeholder="Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
      />
      <textarea
        placeholder="Links and descriptions"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
      />
      <button className="p-2 text-white bg-indigo-400 hover:bg-indigo-400/70">
        Save
      </button>
    </main>
  );
};

export default AddItemPage;
