import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// แก้ไขจุดสำคัญตรงนี้เพื่อให้ชื่อแท็บเปลี่ยน
export const metadata: Metadata = {
  title: "GHOSTGANG", // ชื่อที่จะปรากฏบน Browser Tab
  description: "13GHOSTGANG IN BYOU - Security Protocol v2.0", // รายละเอียดเว็บ
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
