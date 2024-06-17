import Link from "next/link";
import s from "./Item.component.module.scss";
import ScrollLink from "@/components/Utils/ScrollLink.component";


function Item({
  href,
  value,
  type,
}: {
  href: string;
  value: string;
  type: "outpage" | "onpage";
}) {
  return (
    <>
      {type === "onpage" ? (
        <ScrollLink link={href} title={value}>
          <li className={s.item}>{value}</li>
        </ScrollLink>
      ) : (
        <Link href={href}>
          <li className={s.item}>{value}</li>
        </Link>
      )}
    </>
  );
}

export default Item;
