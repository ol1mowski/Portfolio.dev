import type { Metadata } from "next";
import "./globals.scss";
import Root from "./root";

export const metadata: Metadata = {
  title: "Oliwier Markiewicz | Twórca Stron Internetowych",
  description:
    "Oliwier Markiewicz - Twórca Stron Internetowych oferujący profesjonalne usługi projektowania i tworzenia stron WWW. Specjalizuje się w nowoczesnych, responsywnych i przyjaznych użytkownikowi stronach internetowych, dostosowanych do indywidualnych potrzeb klientów. Skontaktuj się, aby zrealizować swoją wizję online!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Root>{children}</Root>;
}
