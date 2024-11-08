import s from "./NavBar.component.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={s.navSectionBig}>
        <a className={s.navSectionBig__item} href="/#home">
          Home
        </a>
        <a className={s.navSectionBig__item} href="/#about">
          O Mnie
        </a>
        <a className={s.navSectionBig__item} href="/#projects">
          Projekty
        </a>
        <a className={s.navSectionBig__item} href="/Blog">
          Blog
        </a>
        <a className={s.navSectionBig__item} href="/#opinions">
          Opinie
        </a>
        <a className={s.navSectionBig__item} href="/#contact">
          Kontakt
        </a>
      </nav>
    </>
  );
};

export default NavBar;
