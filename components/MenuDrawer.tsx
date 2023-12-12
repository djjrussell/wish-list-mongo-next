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
import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdGroups } from "react-icons/md";

export const MenuDrawer = ({ menuOpen, setMenuOpen }: any) => {
  return (
    <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
      <List>
        <ListItem disablePadding>
          <Link href="/experiences/auth/">
            <ListItemButton>
              <ListItemIcon>
                <IoPerson />
              </ListItemIcon>
              <ListItemText>My List</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/experiences/auth/group">
            <ListItemButton>
              <ListItemIcon>
                <MdGroups />
              </ListItemIcon>
              <ListItemText>My Group</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
