import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { WishItem } from "./WishItem";
import ZeroLengthListAlert from "./ZeroLengthListAlert";

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
        <WishItem {...data} key={data._id} />
      ))}
    </main>
  );
};

export default WishList;
