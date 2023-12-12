"use client";

import { List, ListItem, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { FaRightLong } from "react-icons/fa6";

const ExchangePage = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [exchangeList, setExchangeList] = useState<{
    [key: string]: string;
  } | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleNewExchange = () => {
    if (users) {
      const taken: string[] = [];
      const output: { [key: string]: string } = {};
      const allUsers: string[] = users.map((d: User) => d.username);

      const gifters: string[] = allUsers;
      const giftees: string[] = allUsers;

      gifters.forEach((gifter: string) => {
        const available = giftees.filter(
          (e: string) => !taken.includes(e) && e !== gifter
        );

        const randomElement =
          available[Math.floor(Math.random() * available.length)];

        output[gifter] = randomElement;
        taken.push(randomElement);
      });

      setExchangeList(output);
    }
  };

  return (
    <main className="p-8 align-center">
      <button onClick={handleNewExchange}>+ New Exchange +</button>
      {exchangeList && (
        <>
          <hr />
          <section>
            <List>
              {Object.entries(exchangeList).map(([key, value]) => {
                return (
                  <ListItem>
                    <div className="flex flex-row font-bold">
                      {key}
                      <FaRightLong />
                      {value}
                    </div>
                  </ListItem>
                );
              })}
            </List>
          </section>
        </>
      )}
    </main>
  );
};

export default ExchangePage;
