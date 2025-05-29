import s from './HeaderLogo.component.module.scss';

const HeaderLogo = ({ type }: { type?: string }) => {
  return (
    <section data-testid="header-logo" className={s.logoSection}>
      <a href={'/Blog'}>
        {type === 'Blog' ? (
          <span className={s.logoSection__text}>IT Blog</span>
        ) : (
          <span className={s.logoSection__text}>Portfolio</span>
        )}
      </a>
    </section>
  );
};

export default HeaderLogo;
