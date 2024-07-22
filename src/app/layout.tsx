import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BB-phone",
  description: "ร้านขาย iPhone มือสองที่มีคุณภาพ และรับซื้อ iPhone มือสอง ราคาสูง พร้อมบริการซ่อม iPhone และอุปกรณ์เสริม",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
