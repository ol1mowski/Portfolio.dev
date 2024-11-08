import s from "./FooterCopyright,component.module.scss";

function FooterCopyright() {
  const date = new Date();

  return (
    <div className={s.header}>
      <h3 className={s.header__h3}>
        Copyright © {date.getFullYear()}. Wszelkie prawa zastrzeżone
      </h3>
    </div>
  );
}

export default FooterCopyright;
