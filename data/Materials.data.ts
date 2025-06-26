import { type MaterialType } from '@/types/Materials.types';

export const MATERIALS: MaterialType[] = [
  {
    id: '1',
    title: 'Notatki JavaScript - Od podstaw do zaawansowanych',
    image:
      'https://res.cloudinary.com/dbbuav0rj/image/upload/v1733310585/Portfolio/images/notatka_jyerzd.svg',
    slug: 'javascript-od-podstaw-do-zaawansowanych',
    type: 'note',
    category: 'Programowanie',
    categoryType: 'techniczne',
    tags: ['JavaScript', 'ES6', 'Frontend', 'Webdev'],
    description:
      'Kompletny przewodnik po JavaScript od podstaw aż do zaawansowanych technik. Zawiera przykłady kodu, ćwiczenia praktyczne i najlepsze praktyki.',
    downloadCount: 1247,
    size: '2.3 MB',
    format: 'PDF',
    publishDate: '2024-01-15',
    isPremium: false,
  },
  {
    id: '2',
    title: 'Projektowanie Stron Internetowych - Praktyczne Porady',
    image:
      'https://res.cloudinary.com/dbbuav0rj/image/upload/v1731069228/Portfolio/images/bezplatny_ebook_z6eetq.webp',
    slug: 'projektowanie-stron-praktyczne-porady',
    type: 'ebook',
    category: 'Design',
    categoryType: 'rozwojowe',
    tags: ['UX/UI', 'Design', 'Web Design', 'Frontend'],
    description:
      "Kompleksowy e-book o najlepszych praktykach w projektowaniu stron internetowych. Dowiedz się, na co zwrócić uwagę podczas tworzenia nowoczesnego interface'u.",
    downloadCount: 892,
    size: '5.1 MB',
    format: 'PDF',
    publishDate: '2024-02-01',
    isPremium: false,
  },
  {
    id: '3',
    title: 'React.js - Zaawansowane Wzorce',
    image:
      'https://res.cloudinary.com/dbbuav0rj/image/upload/v1733310585/Portfolio/images/notatka_jyerzd.svg',
    slug: 'react-zaawansowane-wzorce',
    type: 'note',
    category: 'Programowanie',
    categoryType: 'techniczne',
    tags: ['React', 'Hooks', 'Context', 'Performance'],
    description:
      'Zaawansowane wzorce i techniki w React.js. Custom hooks, optymalizacja wydajności, zarządzanie stanem i architektura komponentów.',
    downloadCount: 634,
    size: '3.7 MB',
    format: 'PDF',
    publishDate: '2024-01-28',
    isPremium: true,
  },
  {
    id: '5',
    title: 'Node.js i Express - Backend Development',
    image:
      'https://res.cloudinary.com/dbbuav0rj/image/upload/v1733310585/Portfolio/images/notatka_jyerzd.svg',
    slug: 'nodejs-express-backend',
    type: 'ebook',
    category: 'Backend',
    categoryType: 'techniczne',
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    description:
      'Kompleksowy przewodnik po tworzeniu aplikacji backendowych z Node.js i Express. REST API, bazy danych, autoryzacja i bezpieczeństwo.',
    downloadCount: 743,
    size: '6.8 MB',
    format: 'PDF',
    publishDate: '2024-01-20',
    isPremium: true,
  },
  {
    id: '6',
    title: 'TypeScript dla Początkujących',
    image:
      'https://res.cloudinary.com/dbbuav0rj/image/upload/v1731069228/Portfolio/images/bezplatny_ebook_z6eetq.webp',
    slug: 'typescript-dla-poczatkujacych',
    type: 'note',
    category: 'Programowanie',
    categoryType: 'techniczne',
    tags: ['TypeScript', 'JavaScript', 'Types', 'Programming'],
    description:
      'Wprowadzenie do TypeScript dla programistów JavaScript. Typy, interfejsy, generyki i najlepsze praktyki.',
    downloadCount: 967,
    size: '2.8 MB',
    format: 'PDF',
    publishDate: '2024-02-05',
    isPremium: false,
  },
  {
    id: '8',
    title: 'MongoDB i Mongoose - Bazy Danych NoSQL',
    image:
      'https://res.cloudinary.com/dbbuav0rj/image/upload/v1731069228/Portfolio/images/bezplatny_ebook_z6eetq.webp',
    slug: 'mongodb-mongoose-nosql',
    type: 'ebook',
    category: 'Backend',
    categoryType: 'techniczne',
    tags: ['MongoDB', 'Mongoose', 'NoSQL', 'Database'],
    description:
      'Zaawansowane techniki pracy z MongoDB i Mongoose. Modelowanie danych, optymalizacja zapytań i skalowanie.',
    downloadCount: 412,
    size: '5.9 MB',
    format: 'PDF',
    publishDate: '2024-01-25',
    isPremium: true,
  },
  {
    id: '9',
    title: 'Git i GitHub - Współpraca w Projektach',
    image:
      'https://res.cloudinary.com/dbbuav0rj/image/upload/v1733310585/Portfolio/images/notatka_jyerzd.svg',
    slug: 'git-github-wspolpraca',
    type: 'note',
    category: 'Narzędzia',
    categoryType: 'rozwojowe',
    tags: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    description:
      'Wszystko o Git i GitHub - od podstawowych komend po zaawansowane workflow. Idealne dla zespołów programistycznych.',
    downloadCount: 1389,
    size: '2.1 MB',
    format: 'PDF',
    publishDate: '2024-02-08',
    isPremium: false,
  },
];

export const CATEGORIES = [
  'Programowanie',
  'Design',
  'Frontend',
  'Backend',
  'Full-Stack',
  'Narzędzia',
];

export const CATEGORY_TYPES = ['techniczne', 'rozwojowe'];

export const MATERIAL_TYPES = ['note', 'ebook'];
