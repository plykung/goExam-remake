import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-white">{children}</body>
    </html>
  );
}
