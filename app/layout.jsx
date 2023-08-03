import "./globals.css";
import { Providers } from "@/redux/provider";
import { FixedFooter, Header } from "@/components";

export const metadata = {
  title: "تماشای آنلاین فیلم و سریال | فیلیمو",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <FixedFooter />
        </Providers>
      </body>
    </html>
  );
}