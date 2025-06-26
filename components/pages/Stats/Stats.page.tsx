import s from './Stats.page.module.scss';

import { memo } from 'react';
import Link from 'next/link';

import CounterAnimation from '@/components/UI/CounterAnimation/CounterAnimation.component';
import { STATS_DATA } from '@/data/Stats.data';

interface StatItemProps {
  prefix: string;
  count: number;
  description: string;
  link: string;
  isExternal: boolean;
}

const StatItem = memo(({ prefix, count, description, link, isExternal }: StatItemProps) => {
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
        <span className={s.container__media__beforeNumber}>{prefix}</span>
        <CounterAnimation duration={3000} target={count} aria-label={`Licznik: ${count}`} />
      </div>
      <LinkWrapper {...linkProps} className={s.container__media__link}>
        <span className={s.container__media__description}>{description}</span>
      </LinkWrapper>
    </article>
  );
});

StatItem.displayName = 'StatItem';

const Stats = memo(() => {
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
