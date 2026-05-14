import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import MusicPlayer from "@/components/MusicPlayer";
import { siteConfig } from "@/config/site";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `Happy Birthday ${siteConfig.friendName}! 🎉`,
  description: "A special birthday surprise made with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className={`${outfit.className} min-h-full flex flex-col relative`}>
        <Background />
        <MusicPlayer />
        <main className="flex-1 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
