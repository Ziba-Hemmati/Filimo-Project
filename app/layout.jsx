import "./globals.css";
import { Providers } from "@/redux/provider";
import { FixedFooter, Header } from "@/components";
import { getLocalData } from "@/lib/localdata";
import { Suspense } from "react";
import Loading from "./loading";
import GlobalError from "./global-error";

export const metadata = {
  title: "تماشای آنلاین فیلم و سریال | فیلیمو",
  description: "تماشای آنلاین فیلم با فیلیمو | خارجی  به همراه دوبله فارسی و زیرنویس چسبیده",
};

export default async function RootLayout({ children }) {
  const data = await getLocalData();
  if (!data) return <GlobalError />;

  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="relative">
            <Suspense fallback={<Loading />}>
              <Header data={data} />
            </Suspense>
            {children}
            <FixedFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
