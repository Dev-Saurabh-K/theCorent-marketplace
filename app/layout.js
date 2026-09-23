import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const loraSerif = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Terra & Weft — Handcrafted Artisan & Eco-Friendly Goods",
  description:
    "Discover sustainably handcrafted homeware, textiles, ceramics, and natural jute goods directly from master indigenous artisans.",
  keywords: [
    "artisan crafts",
    "eco-friendly homeware",
    "handloom cotton",
    "golden jute",
    "fair trade ceramics",
    "handmade decor",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${loraSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream-50 text-charcoal-900 selection:bg-terracotta-100 selection:text-terracotta-700">
        {children}
      </body>
    </html>
  );
}
