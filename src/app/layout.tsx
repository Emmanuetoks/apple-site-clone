
import Footer from "@/components/Footer";
import "../assets/styles/index.css";
import NavBar from "@/components/Navbar";
import localFont from "next/font/local";
import { BaseSyntheticEvent } from "react";
const SFPro = localFont({
  src: [
    {
      path: "../assets/fonts/SF-Pro/SFProDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },

    {
      path: "../assets/fonts/SF-Pro/SFProDisplay-Ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/SF-Pro/SFProDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },

    {
      path: "../assets/fonts/SF-Pro/SFProDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "../assets/fonts/SF-Pro/SFProDisplay-Medium.woff2",
      style: "normal",
      weight: "500",
    },
  ],
});
export const metadata = {
  title: "Apple",
  description: "A clone of Apple website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={SFPro.className}>
        <NavBar bgColor="bg-black-200" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
