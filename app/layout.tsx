import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";


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
      <body>
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
