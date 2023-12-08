import type { Metadata } from "next";
import "../../globals.css";
import NavBar from "@/components/presentations/NavBar";

export const metadata: Metadata = {
  title: "BishList",
  description: "Welcome to BishList Bish",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-indigo-200 h-screen">
      <NavBar />
      {children}
    </div>
  );
}
