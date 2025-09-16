import { ProjectType, SolutionType, Timeline, Budget } from '../types/ServiceConfigurator.types';

export const TOTAL_STEPS = 3;

export const projectTypes: ProjectType[] = [
  { id: 'website', title: 'Strona internetowa', desc: 'Wizytówka, portfolio, landing page' },
  { id: 'ecommerce', title: 'Sklep internetowy', desc: 'Sprzedaż online, e-commerce' },
  { id: 'webapp', title: 'Aplikacja webowa', desc: 'System, panel, platforma' },
  { id: 'blog', title: 'Blog/CMS', desc: 'Blog, portal, system treści' },
];

export const solutionTypes: SolutionType[] = [
  { id: 'template', title: 'Szablon (szybko)', desc: 'Gotowy szablon dostosowany do potrzeb' },
  {
    id: 'semi-custom',
    title: 'Częściowo na zamówienie',
    desc: 'Połączenie szablonu z custom features',
  },
  { id: 'custom', title: 'W pełni na zamówienie', desc: 'Unikalny projekt od podstaw' },
];

export const availableFeatures: string[] = [
  'Responsywny design',
  'Optymalizacja SEO',
  'Integracja płatności',
  'Panel administratora',
  'Blog/Aktualności',
  'Formularz kontaktowy',
  'Galeria zdjęć',
  'Kalendarz/Rezerwacje',
  'Newsletter',
  'Multilang',
  'Analytics',
  'Live Chat',
];

export const timelines: Timeline[] = [
  { id: 'urgent', title: 'Pilnie (1-2 tygodnie)', multiplier: 1.5 },
  { id: 'standard', title: 'Standardowo (3-4 tygodnie)', multiplier: 1 },
  { id: 'flexible', title: 'Elastycznie (5-8 tygodni)', multiplier: 0.9 },
];

export const budgets: Budget[] = [
  { id: 'low', title: 'Do 2 000 zł', range: [1000, 2000] },
  { id: 'medium', title: '2 000 - 10 000 zł', range: [2000, 10000] },
  { id: 'high', title: '10 000 - 30 000 zł', range: [10000, 30000] },
  { id: 'premium', title: 'Powyżej 30 000 zł', range: [30000, 100000] },
];
