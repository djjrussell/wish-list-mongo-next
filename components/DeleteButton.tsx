import { useRouter } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton = (props: { id: string }) => {
  const { id } = props;
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/wants/?id=${id}`, {
        method: "DELETE",
        cache: "no-store",
      });
      if (res.ok) {
        router.push("/experiences/authenticated/");
        router.refresh();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <FaRegTrashAlt
      onClick={handleDelete}
      className="fill-red-300 hover:fill-red-500 hover:scale-150"
    />
  );
};

export default DeleteButton;
