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
        router.push("/");
        router.refresh();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return <FaRegTrashAlt onClick={handleDelete} />;
};

export default DeleteButton;
