import type { Metadata } from "next";

import { spoofTrial, inter, manrope } from "./fonts";

import { HtmlMeta } from "@data";
import { Footer, Header } from "@components";

import "./globals.scss";

export const metadata: Metadata = HtmlMeta["index"];

export type RootLayoutPropsType = {
  children: React.JSX.Element;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spoofTrial.variable} ${inter.variable} ${manrope.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/ico" sizes="32x32" href="./favicon.ico" />
        <meta name="theme-color" content="#0a192f" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
