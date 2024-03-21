import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import MobileNotFullAlert from "./components/special/MobileNotFullAlert";

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
        <div className="p-3 md:hidden">
          <MobileNotFullAlert />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
