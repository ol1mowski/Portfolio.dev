import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Praktyczne Porady Na Co Zwrócić Uwagę Podczas Projektowania Strony Internetowej | Oliwier Markiewicz',
  description:
    'Oliwier Markiewicz - Twórca Stron Internetowych oferujący profesjonalne usługi projektowania i tworzenia stron WWW. Specjalizuje się w nowoczesnych, responsywnych i przyjaznych użytkownikowi stronach internetowych, dostosowanych do indywidualnych potrzeb klientów. Skontaktuj się, aby zrealizować swoją wizję online!',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export default RootLayout;
