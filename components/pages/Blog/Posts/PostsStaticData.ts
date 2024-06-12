import fastWebsite from "@/assets/fast_webpage.png";
import onlineShop from "@/assets/online_shop.png";
import mistakes from "@/assets/mistakes.jpeg";
import seo from "@/assets/seo.png";
import tools from "@/assets/tools.png";
import rwd from "@/assets/RWD.png";
import js from "@/assets/js.png";
import htmlcss from "@/assets/html_css.jpeg";
import introduce from "@/assets/introduce.jpeg";
import authorImage from "@/assets/author_about.svg";
import { type PostCardType } from "@/types/PostType";

export const POSTS: PostCardType[] = [
  {
    id: 1,
    title: "Jak Poprawić Wydajność i Szybkość Ładowania Strony Internetowej",
    slug: "jak-poprawić-wydajność-i-szybkość-ładowania-strony-internetowej",
    description: `Praktyczne porady dotyczące optymalizacji strony internetowej pod kątem szybkości ładowania. Wskazówki dotyczące kompresji obrazów, optymalizacji kodu i korzystania z CDN.`,
    author: "Oliwier Markiewicz",
    authorImage: authorImage,
    postImage: fastWebsite,
    date: "20 Maj 2024",
  },
  {
    id: 2,
    title: "Tworzenie Stron eCommerce: Co Musisz Wiedzieć, Zanim Zaczniesz",
    slug: "tworzenie-stron-ecommerce-co-musisz-wiedzieć-zanim-zaczniesz",

    description: `Omówienie specyficznych wyzwań związanych z tworzeniem stron internetowych dla sklepów online. Przegląd niezbędnych funkcji i narzędzi eCommerce.`,
    author: "Oliwier Markiewicz",
    authorImage: authorImage,
    postImage: onlineShop,
    date: "20 Maj 2024",
  },
  {
    id: 3,
    title: "Najczęstsze Błędy w Tworzeniu Stron Internetowych i Jak Ich Unikać",
    slug: "najczestsze-bledy-w-tworzeniu-stron-internetowych-i-jak-ich-unikac",

    description: `Lista powszechnych błędów popełnianych przez początkujących twórców stron oraz porady, jak ich unikać. Przykłady złych praktyk i jak je naprawić.`,
    author: "Oliwier Markiewicz",
    authorImage: authorImage,
    postImage: mistakes,
    date: "20 Maj 2024",
  },
  {
    id: 4,
    title:
      "SEO dla Twórców Stron Internetowych: Jak Zwiększyć Widoczność Swojej Witryny",
    slug: "seo-dla-twórców-stron-internetowych-jak-zwiększyć-widoczność-swojej-witryny",

    description: `Wskazówki i najlepsze praktyki dotyczące optymalizacji stron internetowych pod kątem wyszukiwarek. Podstawowe techniki SEO, które każdy twórca powinien znać.`,
    author: "Oliwier Markiewicz",
    authorImage: authorImage,
    postImage: seo,
    date: "20 Maj 2024",
  },
  {
    id: 5,
    title:
      "Najlepsze Narzędzia do Projektowania Stron Internetowych w 2024 roku",
    slug: "najlepsze-narzędzia-do-projektowania-stron-internetowych-w-2024-roku",

    description: `Przegląd najnowszych narzędzi i technologii używanych w projektowaniu stron internetowych. Opis ich funkcji, zalet i wad.`,
    author: "Oliwier Markiewicz",
    authorImage: authorImage,
    postImage: tools,
    date: "20 Maj 2024",
  },
  {
    id: 6,
    title:
      "Responsywne Strony Internetowe: Jak Tworzyć Witryny Dostosowane do Wszystkich Urządzeń",
    slug: "responsywne-strony-internetowe:-jak-tworzyć-witryny-dostosowane-do-wszystkich-urządzeń",

    description: `Omówienie znaczenia responsywnego projektowania i jak zapewnić, aby strony internetowe wyglądały dobrze i działały poprawnie na różnych urządzeniach.`,
    author: "Oliwier Markiewicz",
    authorImage: authorImage,
    postImage: rwd,
    date: "20 Maj 2024",
  },
  {
    id: 7,
    title: "JavaScript dla Początkujących: Dodaj Dynamikę do Swojej Strony",
    slug: "javascript-dla-początkujących-dodaj-dynamikę-do-swojej-strony",

    description: `Wprowadzenie do JavaScriptu, który pozwala na dodanie interaktywnych elementów do strony. Proste przykłady pokazujące, jak zacząć korzystać z tego języka programowania.`,
    author: "Oliwier Markiewicz",
    authorImage: authorImage,
    postImage: js,
    date: "20 Maj 2024",
  },
  {
    id: 8,
    title: "HTML i CSS: Podstawy, Które Musisz Znać",
    slug: "html-i-css-podstawy-ktore-musisz-znac",

    description: `Wyjaśnienie, czym są HTML i CSS oraz dlaczego są one fundamentem każdej strony internetowej. Przykłady podstawowych znaczników HTML i stylów CSS.`,
    author: "Oliwier Markiewicz",
    authorImage: authorImage,
    postImage: htmlcss,
    date: "20 Maj 2024",
  },
  {
    id: 9,
    title: "Wprowadzenie do Tworzenia Stron Internetowych: Podstawowe Kroki",
    slug: "wprowadzenie-do-tworzenia-stron-internetowych-podstawowe-kroki",

    description: `Krótkie wprowadzenie do procesu tworzenia strony internetowej, od planowania po uruchomienie. Omówienie podstawowych narzędzi i technologii, które są potrzebne.`,
    author: "Oliwier Markiewicz",
    authorImage: authorImage,
    postImage: introduce,
    date: "20 Maj 2024",
  },
];
