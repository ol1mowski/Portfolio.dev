import s from "./HeaderLogo.component.module.scss";

export default function HeaderLogo() {
  return (
    <section className={s.logoSection}>
      <h3 className={s.logoSection__content}>
        <span className={s.logoSection__content__name}>
          Oliwier
        </span>
        .dev
      </h3>
    </section>
  );
}
