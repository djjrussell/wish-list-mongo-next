"use client";

import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaRightLong } from "react-icons/fa6";

const GiftExchange = () => {
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

  const shuffleArray = (array: string[]) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  const handleNewExchange = () => {
    if (users) {
      const taken: string[] = [];
      const output: { [key: string]: string } = {};

      const allUsers: string[] = users.map((d: User) => d.username);

      let shuffled = shuffleArray(allUsers);

      shuffled.forEach((name, index) => {
        output[name] = shuffled[index + 1] ?? shuffled[0];
      });

      setExchangeList(output);
    }
  };

  return (
    <Box
      sx={{ display: "flex", alignContent: "center", flexDirection: "column" }}
    >
      <button
        onClick={handleNewExchange}
        className=" flex p-2 bg-indigo-700 text-white rounded-md my-8 w-4/12 self-center justify-center hover:scale-105"
      >
        New Exchange
      </button>
      {exchangeList && (
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {Object.entries(exchangeList).map(([key, value]) => {
                return (
                  <TableRow key={`${key}-${value}`}>
                    <TableCell align="center">{key}</TableCell>
                    <TableCell align="center">
                      <FaRightLong />
                    </TableCell>
                    <TableCell align="center">{value}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default GiftExchange;
