import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "the hidden layer",
  description: "A personal space for code, thoughts, and projects.",
  keywords: ["developer", "portfolio", "blog", "software engineer"],
  icons: {
    icon: "/courage.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-900 text-slate-200 font-mono antialiased">
        <div className="grid-bg min-h-screen">
          <Navigation />
          <main>{children}</main>
          <footer className="border-t border-neon-green/10 py-8 mt-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex gap-6 text-sm text-slate-500">
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
