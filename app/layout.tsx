import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Change Request Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        <Image className="blob" src="/blob.svg"
      width={500}
      height={500}
      alt="Blob image" />
        {children}
        </>
        <Image className="blob1" src="/blob (1).svg"
      width={500}
      height={500}
      alt="Blob image" />
        </body>
    </html>
  );
}
