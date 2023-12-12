import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdGroups } from "react-icons/md";

export const MenuDrawer = ({ menuOpen, setMenuOpen }: any) => {
  const pathname = usePathname();

  const routes = [
    { href: "/experiences/auth", name: "My List", icon: <IoPerson /> },
    { href: "/experiences/auth/group", name: "Group List", icon: <MdGroups /> },
  ];

  return (
    <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
      <List>
        {routes.map((route) => (
          <ListItem disablePadding>
            <Link
              href={route.href}
              className={
                route.href === pathname ? "bg-indigo-500 text-white" : ""
              }
            >
              <ListItemButton>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText>{route.name}</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
