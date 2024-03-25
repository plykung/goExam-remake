import type { Metadata } from "next";
import "./globals.css";
import MobileNotFullAlert from "./components/special/MobileNotFullAlert";
import FooterWeb from "./components/common/Footer";
import NavbarWeb from "./components/common/Navbar";

export const metadata: Metadata = {
  title: "GoExam",
  // description: "12345",
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
        <NavbarWeb />
        {children}
        <FooterWeb />
      </body>
    </html>
  );
}
