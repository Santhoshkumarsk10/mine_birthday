import type { Metadata } from "next";
import { Outfit, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import MusicPlayer from "@/components/MusicPlayer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: `A Birthday For My ${siteConfig.friendName} ❤️`,
  description: "A special romantic surprise made with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className={`${outfit.className} ${playfair.variable} ${dancingScript.variable} min-h-full flex flex-col relative overflow-x-hidden`}>
        <Background />
        <MusicPlayer />
        <main className="flex-1 relative z-10 flex flex-col">
          {children}
        </main>
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  );
}
