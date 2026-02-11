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

export const metadata: Metadata = {
  title: "고윤정 | Ko Yun-jung Fan Page",
  description:
    "배우 고윤정을 위한 팬 페이지입니다. 프로필, 필모그래피, 갤러리 등 다양한 정보를 확인하세요.",
  keywords: ["고윤정", "Ko Yun-jung", "배우", "팬페이지", "Korean Actress"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
