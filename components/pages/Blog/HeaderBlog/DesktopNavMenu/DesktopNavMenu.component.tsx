import s from './DesktopNavMenu.component.module.scss';

import { BlogITEMS, ITEMS } from "../StaticData";
import Item from "../Item/Item.component";
import Button from "@/components/UI/Button/Button.component";

const DesktopNavMenu = ({ type }: { type?: string }) => {
  return (
    <section className={s.menuList}>
      <section className={s.menuList__linksWrapper}>
        <ul className={s.menuList__linksWrapper__links}>
          {type === "Blog"
            ? BlogITEMS.map((item) => (
                <Item key={item.id} value={item.value} href={item.href} />
              ))
            : ITEMS.map((item) => (
                <Item key={item.id} value={item.value} href={item.href} />
              ))}
        </ul>
      </section>
      <section className={s.menuList__findJob}>
        <a
          href="https://justjoin.it/all-locations/javascript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="normal" value="Oferty Pracy" />
        </a>
      </section>
    </section>
  );
};

export default DesktopNavMenu;
