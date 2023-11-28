import { revalidatePath } from "next/cache";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton = (props: { id: string }) => {
  const { id } = props;
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/wants/?id=${id}`, {
        method: "DELETE",
        cache: "no-store",
      });
      revalidatePath("/");
    } catch (e) {
      console.log(e);
    }
  };
  return <FaRegTrashAlt onClick={handleDelete} />;
};

export default DeleteButton;
