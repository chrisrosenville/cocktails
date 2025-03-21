import type { Metadata } from "next";
import { Inter, Dancing_Script, Open_Sans } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DRINKLAB - 100+ drink recipes",
  description: "More than 100+ cocktail recipes for you to try at home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.className} ${inter.className} ${openSans.className}`}
      >
        <div id="app">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
