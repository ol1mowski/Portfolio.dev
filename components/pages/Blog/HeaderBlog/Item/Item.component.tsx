import Link from 'next/link';
import s from './Item.component.module.scss';

function Item({ href, value, hamburger }: { href: string; value: string; hamburger?: boolean }) {
  return (
    <>
      <Link href={href}>
        <li className={`${hamburger ? s.hamburger : s.item}`}>{value}</li>
      </Link>
    </>
  );
}

export default Item;
