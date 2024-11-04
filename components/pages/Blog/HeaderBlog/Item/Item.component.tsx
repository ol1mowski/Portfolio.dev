import Link from "next/link";
import s from "./Item.component.module.scss";

function Item({ href, value }: { href: string; value: string }) {
  return (
    <>
      <Link href={href}>
        <li className={s.item}>{value}</li>
      </Link>
    </>
  );
}

export default Item;
