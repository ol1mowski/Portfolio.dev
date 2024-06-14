import { PostContent } from "@/types/PostType";

import introduce from "@/assets/introduce.jpeg";
import htmlcss from "@/assets/html_css.jpeg";
import js from "@/assets/js.png";
import rwd from "@/assets/RWD.png";
import tools from "@/assets/tools.png";
import seo from "@/assets/seo.png";
import mistake from "@/assets/mistakes.jpeg";
import ecommerce from "@/assets/online_shop.png";
import fast_page from "@/assets/fast_webpage.png";

export const POSTS_CONTENT: PostContent = [
  {
    id: 1,
    image: introduce,
    slug: "wprowadzenie-do-tworzenia-stron-internetowych-podstawowe-kroki",
    title: "Wprowadzenie do Tworzenia Stron Internetowych: Podstawowe Kroki",
    readTime: 5,
    date: "06 Czerwiec",
    author: "Oliwier Markiewicz",
    category: "React",
    content: [
      {
        id: 1,
        title: "Wstęp",
        slug: "wstep",
        description: `Tworzenie stron internetowych jest fascynującym i dynamicznym procesem, który pozwala na tworzenie interaktywnych, wizualnie atrakcyjnych oraz funkcjonalnych witryn. Niezależnie od tego, czy jesteś nowicjuszem w tej dziedzinie, czy masz już pewne doświadczenie, warto znać podstawowe kroki, które prowadzą do stworzenia profesjonalnej strony internetowej.`,
      },
      {
        id: 2,
        title: "Planowanie i Definiowanie Celu",
        slug: "planowanie-i-definiowanie-celu",
        description: `Pierwszym krokiem w tworzeniu strony internetowej jest dokładne zrozumienie jej celu. Zastanów się, dla kogo tworzysz stronę, jakie informacje chcesz przekazać oraz jakie działania chcesz, aby użytkownicy podjęli. Stworzenie szczegółowego planu pomoże Ci lepiej zorganizować proces tworzenia strony.`,
      },
      {
        id: 3,
        title: "Wybór Platformy i Narzędzi",
        slug: "wybor-platformy-i-narzedzi",
        description: `Następnym krokiem jest wybór odpowiedniej platformy do tworzenia strony internetowej. Popularne opcje to WordPress, Wix, czy Squarespace, które oferują intuicyjne interfejsy i wiele szablonów. Jeśli chcesz mieć większą kontrolę nad projektem, możesz zdecydować się na kodowanie strony od podstaw przy użyciu HTML, CSS i JavaScript.`,
      },
      {
        id: 4,
        title: "Projektowanie Strony",
        slug: "projektowanie-strony",
        description: `Projektowanie strony to kluczowy etap, który wpływa na pierwsze wrażenie użytkowników. Skup się na stworzeniu intuicyjnego interfejsu, który jest łatwy w nawigacji. Zadbaj o odpowiednie rozmieszczenie elementów, wybór kolorów, typografii oraz grafik. Możesz skorzystać z narzędzi do projektowania takich jak Adobe XD czy Figma, aby stworzyć prototypy swojej strony.`,
      },
      {
        id: 5,
        title: "Kodowanie",
        slug: "kodowanie",
        description: `Jeśli zdecydowałeś się na ręczne kodowanie strony, ten krok obejmuje tworzenie struktury strony za pomocą HTML, stylizowanie jej za pomocą CSS oraz dodawanie interaktywności za pomocą JavaScript. Warto także zrozumieć podstawy responsywnego projektowania, aby Twoja strona dobrze wyglądała na różnych urządzeniach.`,
      },
      {
        id: 6,
        title: "Testowanie i Optymalizacja",
        slug: "testowanie-i-optymalizacja",
        description: `Po stworzeniu strony nadszedł czas na dokładne jej przetestowanie. Upewnij się, że wszystkie linki działają poprawnie, strona ładuje się szybko i jest kompatybilna z różnymi przeglądarkami oraz urządzeniami. Przetestuj również formularze oraz inne interaktywne elementy. Optymalizacja pod kątem SEO (Search Engine Optimization) pomoże Twojej stronie lepiej się pozycjonować w wynikach wyszukiwania.`,
      },
      {
        id: 7,
        title: "Publikacja",
        slug: "publikacja",
        description: `Gdy jesteś zadowolony z wyglądu i funkcjonalności swojej strony, nadszedł czas na jej publikację. Wybierz odpowiednią usługę hostingową, zarejestruj domenę i prześlij pliki swojej strony na serwer. Upewnij się, że wszystkie ustawienia są poprawne i strona jest dostępna dla użytkowników.`,
      },
      {
        id: 8,
        title: "Utrzymanie i Aktualizacje",
        slug: "utrzymanie-i-aktualizacje",
        description: `Tworzenie strony internetowej to proces ciągły. Regularnie aktualizuj treści, naprawiaj ewentualne błędy i dodawaj nowe funkcje, aby Twoja strona była zawsze aktualna i atrakcyjna dla użytkowników. Monitorowanie statystyk strony pomoże Ci zrozumieć, jak użytkownicy z niej korzystają i co można poprawić.`,
      },
      {
        id: 9,
        title: "Podsumowanie",
        slug: "podsumowanie",
        description: `Tworzenie stron internetowych to proces, który wymaga planowania, kreatywności oraz technicznych umiejętności. Postępując krok po kroku, od planowania po publikację i utrzymanie, możesz stworzyć profesjonalną i funkcjonalną witrynę, która przyciągnie i zaangażuje odwiedzających. Pamiętaj, że praktyka czyni mistrza – im więcej projektów zrealizujesz, tym bardziej doskonalisz swoje umiejętności w tworzeniu stron internetowych.`,
      },
    ],
  },
  {
    id: 2,
    image: htmlcss,
    slug: "html-i-css-podstawy-ktore-musisz-znac",
    title: "HTML i CSS: Podstawy, Które Musisz Znać",
    readTime: 5,
    date: "06 Czerwiec",
    author: "Oliwier Markiewicz",
    category: "Programowanie",
    content: [
      {
        id: 1,
        title: "Wprowadzenie do HTML",
        slug: "wprowadzenie-do-html",
        description: `HTML (HyperText Markup Language) to podstawowy język znaczników używany do tworzenia struktury stron internetowych. Pozwala na definiowanie elementów takich jak nagłówki, paragrafy, linki, obrazy i wiele innych. Zrozumienie podstaw HTML jest kluczowe dla każdego, kto chce tworzyć strony internetowe.`,
      },
      {
        id: 2,
        title: "Podstawowe Elementy HTML",
        slug: "podstawowe-elementy-html",
        description: `W HTML istnieje wiele podstawowych elementów, które są używane do tworzenia struktury strony. Do najważniejszych należą <header>, <nav>, <main>, <section>, <article>, <footer>, a także elementy takie jak <h1> do <h6> (nagłówki), <p> (paragrafy), <a> (linki) i <img> (obrazy). Każdy z tych elementów ma swoje specyficzne zastosowanie i pomaga w organizacji treści na stronie.`,
      },
      {
        id: 3,
        title: "Wprowadzenie do CSS",
        slug: "wprowadzenie-do-css",
        description: `CSS (Cascading Style Sheets) to język stylizacji używany do kontrolowania wyglądu i układu elementów na stronie internetowej. CSS pozwala na zmianę kolorów, czcionek, marginesów, odstępów oraz wielu innych właściwości elementów HTML, dzięki czemu strona staje się bardziej atrakcyjna wizualnie.`,
      },
      {
        id: 4,
        title: "Podstawowe Selektory CSS",
        slug: "podstawowe-selektory-css",
        description: `Selektory CSS są używane do wybierania elementów HTML, które mają być stylizowane. Najważniejsze selektory to selektory tagów (np. p, h1), selektory klas (np. .nazwa-klasy) oraz selektory identyfikatorów (np. #nazwa-id). Każdy z tych selektorów ma swoje specyficzne zastosowanie i umożliwia precyzyjne stosowanie stylów do wybranych elementów.`,
      },
      {
        id: 5,
        title: "Box Model i Układ Strony",
        slug: "box-model-i-uklad-strony",
        description: `Box Model to fundamentalna koncepcja w CSS, która opisuje, jak elementy HTML są renderowane na stronie. Każdy element jest traktowany jako prostokąt, który składa się z marginesów (margin), obramowania (border), wypełnienia (padding) oraz samej zawartości (content). Zrozumienie Box Model jest kluczowe dla tworzenia precyzyjnych i responsywnych układów stron.`,
      },
      {
        id: 6,
        title: "Responsywne Projektowanie z CSS",
        slug: "responsywne-projektowanie-z-css",
        description: `Responsywne projektowanie to podejście do tworzenia stron internetowych, które zapewnia ich poprawne wyświetlanie na różnych urządzeniach i ekranach o różnych rozmiarach. CSS oferuje różne techniki, takie jak media queries, które pozwalają na dostosowanie stylów w zależności od rozmiaru ekranu.`,
      },
      {
        id: 7,
        title: "Zaawansowane Techniki CSS",
        slug: "zaawansowane-techniki-css",
        description: `CSS oferuje wiele zaawansowanych technik, które pozwalają na tworzenie bardziej skomplikowanych i atrakcyjnych wizualnie stron. Do tych technik należą animacje CSS, flexbox, grid layout oraz preprocesory CSS takie jak SASS czy LESS. Poznanie tych technik może znacznie zwiększyć Twoje umiejętności w zakresie projektowania stron.`,
      },
      {
        id: 8,
        title: "Podsumowanie",
        slug: "podsumowanie",
        description: `HTML (HyperText Markup Language) i CSS (Cascading Style Sheets) są podstawowymi technologiami tworzenia stron internetowych, które każdy web developer powinien znać. HTML tworzy strukturę strony, umożliwiając organizację treści za pomocą elementów takich jak nagłówki, paragrafy, linki, obrazy oraz sekcje stron. Każdy z tych elementów pełni określoną rolę w organizacji i hierarchii treści.

CSS z kolei kontroluje wygląd i układ tych elementów, umożliwiając stylizowanie strony w sposób, który zwiększa jej atrakcyjność wizualną. Poprzez selektory CSS możemy precyzyjnie określać, które elementy mają być stylizowane, a Box Model pozwala na dokładne zarządzanie przestrzenią wokół i wewnątrz elementów. Dzięki technikom responsywnego projektowania strony są dostosowane do wyświetlania na różnych urządzeniach, co jest kluczowe w dzisiejszym mobilnym świecie.

Dla bardziej zaawansowanych zastosowań CSS oferuje techniki takie jak animacje, flexbox, grid layout oraz preprocesory CSS jak SASS i LESS, które znacznie zwiększają możliwości tworzenia złożonych i interaktywnych stron internetowych.

Zrozumienie i umiejętne wykorzystanie HTML i CSS stanowi fundament efektywnego projektowania i tworzenia nowoczesnych, responsywnych oraz estetycznych stron internetowych.`,
      },
    ],
  },
  {
    id: 3,
    image: js,
    slug: "javascript-dla-poczatkujacych-dodaj-dynamike-do-swojej-strony",
    title: "JavaScript dla początkujących: dodaj dynamikę do swojej strony",
    readTime: 6,
    date: "10 Czerwiec",
    author: "Oliwier Markiewicz",
    category: "Programowanie",
    content: [
      {
        id: 1,
        title: "Wprowadzenie do JavaScript",
        slug: "wprowadzenie-do-javascript",
        description:
          "JavaScript to język programowania, który pozwala na tworzenie interaktywnych elementów na stronach internetowych. Pozwala na dynamiczne aktualizowanie treści, kontrolowanie multimediów, animowanie obrazów i wiele innych.",
      },
      {
        id: 2,
        title: "Podstawowe Elementy JavaScript",
        slug: "podstawowe-elementy-javascript",
        description:
          "JavaScript składa się z podstawowych elementów takich jak zmienne, funkcje, pętle, warunki i obiekty. Każdy z tych elementów pełni ważną rolę w procesie programowania i pozwala na tworzenie skomplikowanych funkcji.",
      },
      {
        id: 3,
        title: "Manipulowanie DOM",
        slug: "manipulowanie-dom",
        description:
          "Document Object Model (DOM) to struktura dokumentu HTML, którą można manipulować za pomocą JavaScriptu. Dzięki DOM można dynamicznie zmieniać zawartość strony, dodawać lub usuwać elementy oraz reagować na interakcje użytkownika.",
      },
      {
        id: 4,
        title: "Eventy i Obsługa Zdarzeń",
        slug: "eventy-i-obsluga-zdarzen",
        description:
          "Eventy w JavaScript to zdarzenia, które mogą wystąpić na stronie, takie jak kliknięcie, przewijanie czy najechanie kursorem. Obsługa zdarzeń pozwala na reagowanie na te eventy i wykonanie określonych akcji.",
      },
      {
        id: 5,
        title: "Ajax i Fetch API",
        slug: "ajax-i-fetch-api",
        description:
          "Ajax i Fetch API to technologie pozwalające na asynchroniczne pobieranie danych z serwera bez konieczności przeładowywania strony. Pozwalają na tworzenie dynamicznych i responsywnych aplikacji internetowych.",
      },
      {
        id: 6,
        title: "Podsumowanie",
        slug: "podsumowanie",
        description:
          "JavaScript to potężne narzędzie do tworzenia interaktywnych stron internetowych. Dzięki znajomości podstawowych elementów, manipulowania DOM, obsługi zdarzeń oraz technologii Ajax i Fetch API, możesz tworzyć dynamiczne i atrakcyjne wizualnie witryny. Nauka JavaScriptu otwiera drzwi do bardziej zaawansowanych technik i bibliotek, takich jak React, Angular czy Vue, które są szeroko stosowane w nowoczesnym web developmencie.",
      },
    ],
  },
  {
    id: 4,
    image: rwd,
    slug: "responsywne-strony-internetowe-jak-tworzyc-witryny-dostosowane-do-wszystkich-urzadzen",
    title:
      "Responsywne Strony Internetowe: Jak Tworzyć Witryny Dostosowane do Wszystkich Urządzeń",
    readTime: 7,
    date: "08 Czerwiec",
    author: "Oliwier Markiewicz",
    category: "Programowanie",
    content: [
      {
        id: 1,
        title: "Czym Jest Responsywne Projektowanie",
        slug: "czym-jest-responsywne-projektowanie",
        description:
          "Definicja i znaczenie responsywnego projektowania stron internetowych. Dlaczego jest to ważne w dzisiejszym świecie pełnym różnych urządzeń.",
      },
      {
        id: 2,
        title: "Podstawowe Techniki Responsywnego Projektowania",
        slug: "podstawowe-techniki-responsywnego-projektowania",
        description:
          "Wprowadzenie do media queries, elastycznych układów i obrazów, a także jednostek względnych takich jak em i rem.",
      },
      {
        id: 3,
        title: "Frameworki CSS",
        slug: "frameworki-css",
        description:
          "Przegląd popularnych frameworków takich jak Bootstrap i Foundation, które ułatwiają tworzenie responsywnych stron.",
      },
      {
        id: 4,
        title: "Testowanie Responsywności",
        slug: "testowanie-responsywnosci",
        description:
          "Narzędzia i metody do testowania, jak strona wygląda i działa na różnych urządzeniach i ekranach.",
      },
      {
        id: 5,
        title: "Podsumowanie",
        slug: "podsumowanie",
        description:
          "Tworzenie responsywnych stron jest niezbędne, aby zapewnić użytkownikom najlepsze doświadczenie bez względu na to, z jakiego urządzenia korzystają.",
      },
    ],
  },
  {
    id: 5,
    image: tools,
    slug: "najlepsze-narzedzia-do-projektowania-stron-internetowych-w-2024-roku",
    title:
      "Najlepsze Narzędzia do Projektowania Stron Internetowych w 2024 Roku",
    readTime: 8,
    date: "09 Czerwiec",
    author: "Oliwier Markiewicz",
    category: "Programowanie",
    content: [
      {
        id: 1,
        title: "Wprowadzenie do Narzędzi Projektowych",
        slug: "wprowadzenie-do-narzedzi-projektowych",
        description:
          "Krótkie wprowadzenie do najnowszych narzędzi używanych w projektowaniu stron internetowych, ich funkcji i korzyści z ich użycia.",
      },
      {
        id: 2,
        title: "Narzędzia do Prototypowania",
        slug: "narzedzia-do-prototypowania",
        description:
          "Omówienie narzędzi takich jak Figma, Sketch i Adobe XD, które są popularne w prototypowaniu i projektowaniu interfejsów użytkownika.",
      },
      {
        id: 3,
        title: "Edytory Kodowania",
        slug: "edytory-kodowania",
        description:
          "Przegląd najlepszych edytorów kodowania, takich jak Visual Studio Code, Sublime Text i Atom, oraz ich funkcji ułatwiających pracę programistom.",
      },
      {
        id: 4,
        title: "Frameworki CSS",
        slug: "frameworki-css",
        description:
          "Opis najpopularniejszych frameworków CSS, takich jak Bootstrap, Tailwind CSS i Bulma, oraz ich zastosowania w przyspieszeniu procesu projektowania stron.",
      },
      {
        id: 5,
        title: "Narzędzia do Testowania",
        slug: "narzedzia-do-testowania",
        description:
          "Przegląd narzędzi do testowania responsywności, wydajności i bezpieczeństwa stron internetowych, takich jak Lighthouse, BrowserStack i WebPageTest.",
      },
      {
        id: 6,
        title: "Podsumowanie",
        slug: "podsumowanie",
        description:
          "Wybór odpowiednich narzędzi do projektowania stron internetowych może znacząco wpłynąć na efektywność i jakość pracy. Znajomość najnowszych narzędzi i ich funkcji jest kluczowa dla każdego web developera.",
      },
    ],
  },
  {
    id: 6,
    image: seo,
    slug: "seo-dla-tworcow-stron-internetowych-jak-zwiekszyc-widocznosc-swojej-witryny",
    title:
      "SEO dla Twórców Stron Internetowych: Jak Zwiększyć Widoczność Swojej Witryny",
    readTime: 7,
    date: "10 Czerwiec",
    author: "Oliwier Markiewicz",
    category: "Marketing",
    content: [
      {
        id: 1,
        title: "Wprowadzenie do SEO",
        slug: "wprowadzenie-do-seo",
        description:
          "SEO (Search Engine Optimization) to zestaw technik, które pomagają poprawić widoczność strony internetowej w wynikach wyszukiwarek. Jest kluczowe dla przyciągnięcia większej liczby odwiedzających.",
      },
      {
        id: 2,
        title: "Podstawowe Techniki SEO",
        slug: "podstawowe-techniki-seo",
        description:
          "Omówienie podstawowych technik SEO, takich jak optymalizacja treści, użycie odpowiednich słów kluczowych, optymalizacja meta tagów i struktury URL.",
      },
      {
        id: 3,
        title: "Znaczenie Linkowania Wewnętrznego i Zewnętrznego",
        slug: "znaczenie-linkowania-wewnetrznego-i-zewnetrznego",
        description:
          "Jak linkowanie wewnętrzne i zewnętrzne wpływa na SEO oraz najlepsze praktyki w ich stosowaniu.",
      },
      {
        id: 4,
        title: "Optymalizacja Strony dla Mobilnych Użytkowników",
        slug: "optymalizacja-strony-dla-mobilnych-uzytkownikow",
        description:
          "Dlaczego optymalizacja strony dla urządzeń mobilnych jest kluczowa dla SEO i jak to zrobić.",
      },
      {
        id: 5,
        title: "Podsumowanie",
        slug: "podsumowanie",
        description:
          "Zrozumienie i wdrożenie technik SEO jest niezbędne dla każdego twórcy stron internetowych, aby zapewnić wysoką widoczność i przyciągnąć więcej użytkowników.",
      },
    ],
  },
  {
    id: 7,
    image: mistake,
    slug: "najczestsze-bledy-w-tworzeniu-stron-internetowych-i-jak-ich-unikac",
    title: "Najczęstsze Błędy w Tworzeniu Stron Internetowych i Jak Ich Unikać",
    readTime: 6,
    date: "11 Czerwiec",
    author: "Oliwier Markiewicz",
    category: "Web Design",
    content: [
      {
        id: 1,
        title: "Brak Responsywności",
        slug: "brak-responsywnosci",
        description:
          "Jednym z najczęstszych błędów jest tworzenie stron, które nie są responsywne. Wyjaśnienie, dlaczego jest to problem i jak go rozwiązać.",
      },
      {
        id: 2,
        title: "Zbyt Duże Obrazy",
        slug: "zbyt-duze-obrazy",
        description:
          "Używanie zbyt dużych obrazów może znacznie spowolnić stronę. Porady dotyczące optymalizacji obrazów.",
      },
      {
        id: 3,
        title: "Złe Nawigacje",
        slug: "zle-nawigacje",
        description:
          "Nawigacja, która jest nieintuicyjna lub zbyt skomplikowana, może odstraszyć użytkowników. Jak stworzyć przyjazne dla użytkownika menu nawigacyjne.",
      },
      {
        id: 4,
        title: "Brak Optymalizacji SEO",
        slug: "brak-optymalizacji-seo",
        description:
          "Niedostateczna optymalizacja strony pod kątem SEO może utrudnić jej znalezienie w wyszukiwarkach. Jakie są podstawowe techniki SEO, które warto zastosować.",
      },
      {
        id: 5,
        title: "Podsumowanie",
        slug: "podsumowanie",
        description:
          "Unikanie najczęstszych błędów w tworzeniu stron internetowych jest kluczowe dla zapewnienia użytkownikom dobrego doświadczenia i osiągnięcia sukcesu online.",
      },
    ],
  },
  {
    id: 8,
    image: ecommerce,
    slug: "tworzenie-stron-ecommerce-co-musisz-wiedziec-zanim-zaczniesz",
    title: "Tworzenie Stron eCommerce: Co Musisz Wiedzieć, Zanim Zaczniesz",
    readTime: 7,
    date: "12 Czerwiec",
    author: "Oliwier Markiewicz",
    category: "Biznes",
    content: [
      {
        id: 1,
        title: "Wprowadzenie do eCommerce",
        slug: "wprowadzenie-do-ecommerce",
        description:
          "Tworzenie strony eCommerce wymaga zrozumienia specyficznych wyzwań i potrzeb, które różnią się od tradycyjnych stron internetowych.",
      },
      {
        id: 2,
        title: "Niezbędne Funkcje eCommerce",
        slug: "niezbedne-funkcje-ecommerce",
        description:
          "Przegląd niezbędnych funkcji takich jak koszyk, proces płatności, zarządzanie zapasami i obsługa klienta, które muszą być zaimplementowane na stronie eCommerce.",
      },
      {
        id: 3,
        title: "Bezpieczeństwo i Ochrona Danych",
        slug: "bezpieczenstwo-i-ochrona-danych",
        description:
          "Jak zapewnić bezpieczeństwo transakcji online i ochronę danych klientów.",
      },
      {
        id: 4,
        title: "Integracje z Zewnętrznymi Narzędziami",
        slug: "integracje-z-zewnetrznymi-narzedziami",
        description:
          "Opis integracji z narzędziami do zarządzania płatnościami, wysyłką i marketingiem, które ułatwiają prowadzenie sklepu online.",
      },
      {
        id: 5,
        title: "Podsumowanie",
        slug: "podsumowanie",
        description:
          "Tworzenie strony eCommerce wymaga uwzględnienia wielu aspektów, które mają na celu zapewnienie wygodnego i bezpiecznego doświadczenia zakupowego dla klientów.",
      },
    ],
  },
  {
    id: 9,
    image: fast_page,
    slug: "jak-poprawic-wydajnosc-i-szybkosc-ladowania-strony-internetowej",
    title: "Jak Poprawić Wydajność i Szybkość Ładowania Strony Internetowej",
    readTime: 6,
    date: "13 Czerwiec",
    author: "Oliwier Markiewicz",
    category: "Web Performance",
    content: [
      {
        id: 1,
        title: "Wprowadzenie do Optymalizacji Wydajności",
        slug: "wprowadzenie-do-optymalizacji-wydajności",
        description:
          "Dlaczego wydajność strony internetowej jest kluczowa i jak wpływa na doświadczenia użytkowników oraz SEO.",
      },
      {
        id: 2,
        title: "Kompresja Obrazów",
        slug: "kompresja-obrazów",
        description:
          "Techniki kompresji obrazów bez utraty jakości, które mogą znacznie przyspieszyć ładowanie strony.",
      },
      {
        id: 3,
        title: "Optymalizacja Kodu",
        slug: "optymalizacja-kodu",
        description:
          "Najlepsze praktyki w optymalizacji kodu HTML, CSS i JavaScript, aby zmniejszyć czas ładowania strony.",
      },
      {
        id: 4,
        title: "Korzystanie z CDN",
        slug: "korzystanie-z-cdn",
        description:
          "Jak używanie sieci dostarczania treści (CDN) może poprawić szybkość ładowania strony, zwłaszcza dla użytkowników z różnych regionów geograficznych.",
      },
      {
        id: 5,
        title: "Podsumowanie",
        slug: "podsumowanie",
        description:
          "Optymalizacja wydajności strony internetowej jest niezbędna, aby zapewnić użytkownikom szybkie i płynne doświadczenia. Kilka prostych technik może znacznie poprawić szybkość ładowania strony.",
      },
    ],
  },
];
