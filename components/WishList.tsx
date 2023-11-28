import { WishItem } from "./WishItem";

export const getWishList = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/wants", {
      cache: "no-store",
    });

    if (!res) {
      throw new Error("failed to fetch");
    }
    return res.json();
  } catch (e) {
    console.log("error loading wish list", e);
  }
};

const WishList = async () => {
  const wishList: WishItem[] = await getWishList();
  return (
    <main>
      {wishList.map((data: WishItem) => (
        <WishItem {...data} />
      ))}
    </main>
  );
};

export default WishList;
