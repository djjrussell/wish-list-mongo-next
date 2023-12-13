import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { WishCard } from "./WishCard";
import ZeroLengthListAlert from "./presentations/ZeroLengthListAlert";

export const getWishList = async () => {
  const session: SessionUser | null = await getServerSession(
    authOptions as any
  );
  try {
    const res = await fetch(
      `http://localhost:3000/api/wants?userId=${session?.user.id}`,
      {
        cache: "no-store",
      }
    );

    return res.json();
  } catch (e) {
    console.log("error loading wish list", e);
  }
};

const WishList = async () => {
  const wishList: WishItem[] = await getWishList();

  if (wishList.length === 0) {
    return <ZeroLengthListAlert />;
  }

  return (
    <main>
      {wishList.map((data: WishItem) => (
        <WishCard {...data} key={data._id} />
      ))}
    </main>
  );
};

export default WishList;
