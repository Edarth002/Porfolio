import { DM_Serif_Text } from "next/font/google";
import "./globals.css";

const font = DM_Serif_Text({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "Arthur-Web Developer",
  description: "Arthur_Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
