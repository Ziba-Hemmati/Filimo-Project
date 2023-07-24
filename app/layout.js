import Header from "@/components/mainPage/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/mainPage/footer/Footer";
import FixedFooter from "@/components/mainPage/fixedFooter/FixedFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
        <FixedFooter />
      </body>
    </html>
  );
}
