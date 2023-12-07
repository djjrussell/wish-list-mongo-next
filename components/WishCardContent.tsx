import { Rating } from "react-simple-star-rating";
import DeleteButton from "./buttons/DeleteButton";

type WishCardContentProps = {
  _id: string;
  name: string;
  notes: string;
  rating: number;
};

const WishCardContent = ({
  _id,
  name,
  notes,
  rating,
}: WishCardContentProps) => {
  return (
    <>
      <div>
        <h2 className="font-bold">{name}</h2>
        <div className="text-gray-600">{notes}</div>
        <Rating initialValue={rating} readonly fillColor="#9FA8DA" />
      </div>
      <div className="justify-between flex gap-2">
        <DeleteButton id={_id} name={name} />
      </div>
    </>
  );
};

export default WishCardContent;
