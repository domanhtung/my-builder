import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "../components/header";
import FooterComponent from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Archibuild",
  openGraph: {
    title: "Archibuild",
    description:
      "Archibuild provides global steel detailing services, including BIM, PEB, precast panel, and rebar detailing. Our expert team delivers precise 2D drawings and 3D models for efficient fabrication worldwide.",
    url: "https://my-builder.netlify.app",
    siteName: "Archibuild",
    images: [
      {
        url: "https://my-builder.netlify.app/images/thumbnail.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        <div>{children}</div>
        <FooterComponent />
      </body>
    </html>
  );
}
