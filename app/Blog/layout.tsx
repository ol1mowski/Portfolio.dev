import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Oliwier Markiewicz",
  description:
    "Oliwier Markiewicz - Twórca Stron Internetowych oferujący profesjonalne usługi projektowania i tworzenia stron WWW...",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

