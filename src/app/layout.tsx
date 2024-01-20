import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StoreProvider from "@/redux/store-provider";
import { PersisterProvider } from "@/redux/persistor-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js App With Sync",
  description:
    "Learn how to persist your state in next.js and sync the data across tabs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <PersisterProvider>{children}</PersisterProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
