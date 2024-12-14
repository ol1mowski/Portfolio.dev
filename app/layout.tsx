import type { Metadata } from "next";
import RootLayoutClient from "./RootLayoutClient";

export const metadata: Metadata = {
  title: "Oliwier Markiewicz | Twórca Stron Internetowych",
  description:
    "Oliwier Markiewicz - Twórca Stron Internetowych oferujący profesjonalne usługi projektowania i tworzenia stron WWW...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl-PL">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
