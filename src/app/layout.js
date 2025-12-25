import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arthur - Full Stack Developer",
  description: "Portfolio of Arthur Onyeanusi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Applying the font class directly to the body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
