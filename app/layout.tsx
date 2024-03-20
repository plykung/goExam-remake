import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar";

export const metadata: Metadata = {
  title: "GoExam",
  description: "12345",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
