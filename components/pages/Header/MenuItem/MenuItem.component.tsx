import s from "./MenuItem.component.module.scss";

const MenuItem = ({
  to,
  label,
  hideMenu,
}: {
  to: string;
  label: string;
  hideMenu?: () => void;
}) => (
  <>
    <a className={s.item} onClick={hideMenu} href={to}>
      {label}
    </a>
  </>
);

export default MenuItem;
