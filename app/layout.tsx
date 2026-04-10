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

// ชื่อแท็บ GHOSTGANG ตามที่คุณตั้งไว้
export const metadata: Metadata = {
  title: "GHOSTGANG",
  description: "13GHOSTGANG IN BYOU - Security Protocol v2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ส่วนของเพลง YouTube (ซ่อนไว้) */}
        <div style={{ position: "fixed", top: "-100px", left: "-100px", opacity: 0, pointerEvents: "none" }}>
          <iframe
            width="1"
            height="1"
            src="https://www.youtube.com/embed/WDuBvEoL_m4?autoplay=1&loop=1&playlist=WDuBvEoL_m4"
            allow="autoplay"
          ></iframe>
        </div>

        {children}
      </body>
    </html>
  );
}
