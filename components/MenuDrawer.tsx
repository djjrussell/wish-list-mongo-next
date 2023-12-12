"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { MdGroups } from "react-icons/md";

export const MenuDrawer = ({ menuOpen, setMenuOpen }: any) => {
  return (
    <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
      <List className="bg-slate-100">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoPerson />
            </ListItemIcon>
            <ListItemText>
              <Link href="/experiences/auth/">My List</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MdGroups />
            </ListItemIcon>
            <ListItemText>
              <Link href="/experiences/auth/group">My Group</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
