import s from './Stats.page.module.scss';

import { memo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import CounterAnimation from '@/components/UI/CounterAnimation/CounterAnimation.component';
import { SiteStats } from '@/actions/stats.actions';

interface StatItemProps {
  count: number;
  description: string;
  link: string;
  isExternal: boolean;
}

const StatItem = memo(({ count, description, link, isExternal }: StatItemProps) => {
  const LinkWrapper = isExternal ? 'a' : Link;
  const linkProps = isExternal
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
        href: link,
      }
    : { href: link };

  return (
    <article className={s.container__media} aria-label={`${description}: ${count}`}>
      <div>
        <CounterAnimation duration={3000} target={count} aria-label={`Licznik: ${count}`} />
      </div>
      <LinkWrapper {...linkProps} className={s.container__media__link}>
        <span className={s.container__media__description}>{description}</span>
      </LinkWrapper>
    </article>
  );
});

StatItem.displayName = 'StatItem';

interface StatsProps {
  stats: SiteStats;
}

const Stats = memo(({ stats }: StatsProps) => {
  const t = useTranslations('stats');

  const STATS_DATA = [
    {
      id: 'youtube-views',
      count: stats.youtubeViews,
      description: t('youtubeViews'),
      link: 'https://www.youtube.com/@oliwier.markiewicz',
      isExternal: true,
    },
    {
      id: 'youtube-videos',
      count: stats.youtubeVideos,
      description: t('youtubeVideos'),
      link: 'https://www.youtube.com/@oliwier.markiewicz',
      isExternal: true,
    },
    {
      id: 'blog-posts',
      count: stats.blogPosts,
      description: t('blogPosts'),
      link: '/Blog',
      isExternal: false,
    },
  ];

  return (
    <section id="stats" className={s.container} aria-label="Statystyki i osiągnięcia">
      {STATS_DATA.map(stat => (
        <StatItem key={stat.id} {...stat} />
      ))}
    </section>
  );
});

Stats.displayName = 'Stats';

export default Stats;
