
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const siteUrl = "https://zcodecrafts.dev";

const siteDescription =
  "Z Code Crafts is a Zambia-based digital studio creating modern websites, web applications, graphic designs, brand identities and thoughtful digital experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Z Code Crafts | Web Development & Creative Design",
    template: "%s | Z Code Crafts",
  },

  description: siteDescription,
  applicationName: "Z Code Crafts",

  keywords: [
    "Z Code Crafts",
    "ZCC",
    "web development Zambia",
    "website design Zambia",
    "web developer Lusaka",
    "graphic design Zambia",
    "UI UX design",
    "web applications",
    "brand identity design",
  ],

  authors: [{ name: "Z Code Crafts", url: siteUrl }],
  creator: "Z Code Crafts",
  publisher: "Z Code Crafts",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Z Code Crafts",
    title: "Z Code Crafts | Web Development & Creative Design",
    description: siteDescription,
    locale: "en_ZM",
  },

  twitter: {
    card: "summary",
    title: "Z Code Crafts | Web Development & Creative Design",
    description: siteDescription,
  },

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
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
