import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BishList",
  description: "Welcome to BishList Bish",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-slate-100 h-screen">
      <NavBar />
      {children}
    </div>
  );
}