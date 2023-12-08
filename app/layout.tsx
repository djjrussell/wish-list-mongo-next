import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/presentations/NavBar";
import { AuthProvider } from "./Providers";
import Logo from "@/components/presentations/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BishList LOGIN",
  description: "Welcome to BishList Bish",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4 bg-indigo-200 h-screen">
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  );
}
