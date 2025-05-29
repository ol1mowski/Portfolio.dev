import Link from 'next/link';
import s from './Item.component.module.scss';

function Item({ href, value, hamburger }: { href: string; value: string; hamburger?: boolean }) {
  return (
    <>
      <a href={href} aria-label={value}>
        <li className={`${hamburger ? s.hamburger : s.item}`}>{value}</li>
      </a>
    </>
  );
}

export default Item;
