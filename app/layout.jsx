import localFont from "next/font/local";
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
  title: "P&P Medical",
  description: "Equipos médicos veterinarios y humanos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={gilroy.variable}>
      <body>{children}</body>
    </html>
  );
}