import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import Header from "@/components/mainPage/header/Header";
import Footer from "@/components/mainPage/footer/Footer";
import FixedFooter from "@/components/mainPage/fixedFooter/FixedFooter";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "تماشای آنلاین فیلم و سریال | فیلیمو",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // const data = await getLocalData();
  // const category = data.categories;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <FixedFooter />
        </Providers>
      </body>
    </html>
  );
}
