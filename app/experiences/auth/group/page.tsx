import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import UserExpandableCard from "@/components/presentations/UserExpandableCard";
import { getServerSession } from "next-auth";

const GroupPage = async () => {
  const session: SessionUser | null = await getServerSession(
    authOptions as any
  );

  const res = await fetch(`http://localhost:3000/api/group`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <main>
      <section className="flex flex-col">
        {data
          .filter((x: any) => {
            return x?._id != session?.user.id;
          })
          .map((item: any) => {
            return (
              <UserExpandableCard
                key={item._id}
                username={item.username}
                wants={item.wants}
              />
            );
          })}
      </section>
    </main>
  );
};

export default GroupPage;
