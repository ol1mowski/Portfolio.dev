import s from './DesktopNavMenu.component.module.scss';

import { BlogITEMS, ITEMS } from '../StaticData';
import Item from '../Item/Item.component';
import { useLocale } from 'next-intl';

const DesktopNavMenu = ({ type }: { type?: string }) => {
  const locale = useLocale();

  const getUpdatedHref = (href: string) => {
    if (href === '/Blog') return `/${locale}/Blog`;
    return href;
  };

  return (
    <section data-testid="desktop-nav-menu" className={s.menuList}>
      <section className={s.menuList__linksWrapper}>
        <ul className={s.menuList__linksWrapper__links}>
          {type === 'Blog'
            ? BlogITEMS.map(item => (
                <Item key={item.id} value={item.value} href={getUpdatedHref(item.href)} />
              ))
            : ITEMS.map(item => (
                <Item key={item.id} value={item.value} href={getUpdatedHref(item.href)} />
              ))}
        </ul>
      </section>
    </section>
  );
};

export default DesktopNavMenu;
