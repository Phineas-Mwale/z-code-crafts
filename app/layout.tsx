
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const siteUrl = "https://zcodecrafts.dev";
const googleAnalyticsId = "G-7YBK0Y6GH7";

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

const themeScript = `
(function () {
  try {
    var savedTheme = localStorage.getItem("zcc-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", isDark);
  } catch (error) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body>
        <PageLoader />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
