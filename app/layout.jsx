import "./globals.css";
import { Providers } from "@/redux/provider";
import { FixedFooter, Header } from "@/components";
import { getLocalData } from "@/lib/localdata";
import { Suspense } from "react";
import Loading from "./loading";
import GlobalError from "./global-error";

export const metadata = {
  title: "تماشای آنلاین فیلم و سریال | فیلیمو",
  description:
    "تماشای آنلاین فیلم با فیلیمو | خارجی  به همراه دوبله فارسی و زیرنویس چسبیده",
};

export default async function RootLayout({ children }) {
  const data = await getLocalData();
  if (!data) return <GlobalError />;

  return (
    <html lang="en">
      <body>
        <Providers>
          <Suspense fallback={<Loading />}>
            <div className="relative">
              <Header data={data} />
              {children}
              <FixedFooter />
            </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
