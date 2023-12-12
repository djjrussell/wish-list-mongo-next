const GroupPage = async () => {
  const res = await fetch(`http://localhost:3000/api/group`, {
    cache: "no-store",
  });
  const data = await res.json();

  return <main>{JSON.stringify(data)}</main>;
};

export default GroupPage;
