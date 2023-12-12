import type { Metadata } from "next";
import "../../globals.css";
import Nav from "@/components/presentations/Nav";
import styles from "./auth.module.css";
import Footer from "@/components/presentations/Footer";
import MenuDrawer from "@/components/MenuDrawer";

export const metadata: Metadata = {
  title: "BishList",
  description: "Welcome to BishList Bish",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.main}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
