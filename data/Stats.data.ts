import type { StatItemType } from "@/types/Stats.types";

export const STATS_DATA: StatItemType[] = [
  {
    id: 'youtube-views',
    prefix: '+',
    count: 20000,
    description: 'Wyświetleń na YouTube',
    link: 'https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q',
    isExternal: true
  },
  {
    id: 'youtube-videos',
    prefix: '+',
    count: 35,
    description: 'Darmowych Filmów',
    link: 'https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q',
    isExternal: true
  },
  {
    id: 'blog-posts',
    prefix: '',
    count: 7,
    description: 'Darmowych Wpisów Na Blogu',
    link: '/',
    isExternal: false
  }
];