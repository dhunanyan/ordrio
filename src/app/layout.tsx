import type { Metadata } from "next";
import localFont from "next/font/local";

import { HtmlMeta } from "@data";
// import { Footer, Header } from "@components";

import "./globals.scss";

export const metadata: Metadata = HtmlMeta["index"];

const spoofTrial = localFont({
  src: [
    {
      path: "./fonts/SpoofTrial-Black.otf",
      style: "normal",
      weight: "900",
    },
    {
      path: "./fonts/SpoofTrial-BlackSlanted.otf",
      style: "italic",
      weight: "900",
    },
    {
      path: "./fonts/SpoofTrial-Bold.otf",
      style: "normal",
      weight: "700 800",
    },
    {
      path: "./fonts/SpoofTrial-BoldSlanted.otf",
      style: "italic",
      weight: "700 800",
    },
    {
      path: "./fonts/SpoofTrial-Medium.otf",
      style: "normal",
      weight: "500 600",
    },
    {
      path: "./fonts/SpoofTrial-MediumSlanted.otf",
      style: "italic",
      weight: "500 600",
    },
    {
      path: "./fonts/SpoofTrial-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/SpoofTrial-RegularSlanted.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./fonts/SpoofTrial-Light.otf",
      style: "normal",
      weight: "200 300",
    },
    {
      path: "./fonts/SpoofTrial-LightSlanted.otf",
      style: "italic",
      weight: "200 300",
    },
    {
      path: "./fonts/SpoofTrial-Thin.otf",
      style: "normal",
      weight: "100",
    },
    {
      path: "./fonts/SpoofTrial-ThinSlanted.otf",
      style: "italic",
      weight: "100",
    },
  ],
  variable: "--font-spoof-trial",
});

export type RootLayoutPropsType = {
  children: React.JSX.Element;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spoofTrial.className}>
      <head>
        <meta charSet="utf-8" />
        {/* <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/svg/i_logo-bold-bg.svg"
        /> */}
        <meta name="theme-color" content="#0a192f" />
      </head>
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
