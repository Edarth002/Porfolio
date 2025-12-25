import { DM_Serif_Text } from "next/font/google";
import "./globals.css";

// 1. Add 'variable' to the font configuration
const dmSerif = DM_Serif_Text({ 
  subsets: ["latin"], 
  weight: ['400'],
  variable: '--font-dm-serif' 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 2. Pass the variable to the body */}
      <body className={`${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
