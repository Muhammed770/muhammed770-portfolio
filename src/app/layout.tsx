import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProfileUI from "@/components/profile-ui";
import { ThemeProvider } from "@/components/theme-provvider";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammed Vengalath",
  description: "Muhammed Vengalath's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="sm:flex">

            <div className="sm:h-[100vh] justify-center flex items-center content-center mx-2">
              <ProfileUI />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
