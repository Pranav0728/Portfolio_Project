import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Narayan Jadhav - portfolio",
  description:
    "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Use this for your site */}
          {/* <ThemeSwitch />
          <Sidebar />
          {children} */}
          {/* Temporary for Banner */}
          <div className="temp-layout">
            <ThemeSwitch />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
