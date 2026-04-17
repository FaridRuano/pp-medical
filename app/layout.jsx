import localFont from "next/font/local";
import SiteShell from "@app/_components/layout/shell/SiteShell";
import "@styles/globals.scss";

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/gilroy/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata = {
  title: {
    default: "P&P Medical",
    template: "%s",
  },
  description: "Equipos médicos veterinarios y humanos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={gilroy.variable}>
      <body className={gilroy.className}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
