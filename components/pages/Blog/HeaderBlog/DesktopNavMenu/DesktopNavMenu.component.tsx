import s from './DesktopNavMenu.component.module.scss';

import { BlogITEMS, ITEMS } from '../StaticData';
import Item from '../Item/Item.component';

const DesktopNavMenu = ({ type }: { type?: string }) => {
  return (
    <section data-testid="desktop-nav-menu" className={s.menuList}>
      <section className={s.menuList__linksWrapper}>
        <ul className={s.menuList__linksWrapper__links}>
          {type === 'Blog'
            ? BlogITEMS.map(item => <Item key={item.id} value={item.value} href={item.href} />)
            : ITEMS.map(item => <Item key={item.id} value={item.value} href={item.href} />)}
        </ul>
      </section>
    </section>
  );
};

export default DesktopNavMenu;
