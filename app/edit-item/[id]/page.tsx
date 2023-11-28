const getWishListItem = async (id: string) => {
  const item = await fetch(`http://localhost:3000/api/wants/${id}`);
  return await item.json();
};

const EditItemPage = async ({ params }: any) => {
  const { want } = await getWishListItem(params.id);
  console.log(want);
  // need to add star interface
  return (
    <main className="flex flex-col gap-4 my-4">
      <input
        placeholder="Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
        value={want.name}
      />
      <textarea
        placeholder="Links and descriptions"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
        value={want.notes}
      />
      <button className="p-2 text-white bg-indigo-400 hover:bg-indigo-400/70">
        Save
      </button>
    </main>
  );
};

export default EditItemPage;
