import DeleteButton from "./buttons/DeleteButton";
import BishlistRating from "./presentations/BishlistRating";

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
        <div className="p-2">
          <BishlistRating defaultValue={rating} readOnly />
        </div>
      </div>
      <div className="justify-between flex gap-2">
        <DeleteButton id={_id} name={name} />
      </div>
    </>
  );
};

export default WishCardContent;
