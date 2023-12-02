import { WishItem } from "./WishItem";

export const getWishList = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/wants", {
      cache: "no-store",
    });

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
        <WishItem {...data} key={data._id} />
      ))}
    </main>
  );
};

export default WishList;
