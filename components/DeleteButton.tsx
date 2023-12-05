import { useRouter } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton = (props: { id: string; name: string }) => {
  const { id, name } = props;
  const router = useRouter();
  const handleDelete = async () => {
    if (!confirm(`are you sure you want to delete ${name}`)) {
      return false;
    }
    try {
      const res = await fetch(`http://localhost:3000/api/wants/?id=${id}`, {
        method: "DELETE",
        cache: "no-store",
      });
      if (res.ok) {
        router.push("/experiences/auth/");
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
