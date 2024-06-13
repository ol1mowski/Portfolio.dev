import { PostContent } from "@/types/PostType";

import introduce from "@/assets/introduce.jpeg";
import htmlcss from "@/assets/html_css.jpeg";

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
    ],
  },
];
