import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ndonyi Maurice | Ecommerce & Digital Marketing VA",
  description:
    "Ndonyi Maurice Djam — Ecommerce & Digital Marketing Virtual Assistant and Full-Stack Developer. Amazon & TikTok Shop management, social media marketing, content scheduling, automation, and web development.",
  keywords: [
    "Virtual Assistant",
    "Ecommerce VA",
    "Digital Marketing",
    "Amazon",
    "TikTok Shop",
    "Full-Stack Developer",
    "React",
    "Ruby on Rails",
  ],
  authors: [{ name: "Ndonyi Maurice Djam" }],
  openGraph: {
    title: "Ndonyi Maurice | Ecommerce & Digital Marketing VA",
    description:
      "Ecommerce & Digital Marketing Virtual Assistant and Full-Stack Developer. I take the day-to-day digital work off your plate so you can focus on growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
