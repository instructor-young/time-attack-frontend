import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Udemy 프론트엔드 타임어택",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
