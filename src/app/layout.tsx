import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import StoreProvider from "@/lib/StoreProvider";
import { AuthProvider } from "@/lib/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plantify",
  description:
    "Identify plants with a single snap! Whether you're a gardening enthusiast, a nature explorer, or simply curious, our app helps you recognize plants in seconds.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <StoreProvider>
            <AuthProvider>{children}</AuthProvider>
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
