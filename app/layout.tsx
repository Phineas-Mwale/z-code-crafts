import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZCC – Z Code Crafts",
    template: "%s | ZCC",
  },
  description:
    "Z Code Crafts is a Zambia-based digital studio creating websites, brands and thoughtful digital experiences.",
  verification: {
    google: "b28KQdlxsUZ1N1suzToCFFn37jX4JPPsa9B0h9N2eEM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}