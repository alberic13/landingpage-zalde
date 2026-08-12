import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Nexcent",
  description: "Lessons and insights from 8 years. Where to grow your business as a photographer: site or social media?",
  keywords: "membership management, community software, association software, Nexcent",
  icons: {
    icon: "/images/nexcent_figma_logo_icon_white.svg",
    shortcut: "/images/nexcent_figma_logo_icon_white.svg",
    apple: "/images/nexcent_figma_logo_icon_white.svg",
  },
  openGraph: {
    title: "Nexcent",
    description: "Manage your entire community in a single system",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
