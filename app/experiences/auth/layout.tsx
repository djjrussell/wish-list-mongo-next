import type { Metadata } from "next";
import "../../globals.css";
import NavBar from "@/components/presentations/NavBar";
import styles from "./auth.module.css";
import Footer from "@/components/presentations/Footer";

export const metadata: Metadata = {
  title: "BishList",
  description: "Welcome to BishList Bish",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.main}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
