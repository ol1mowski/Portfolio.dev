import Image from 'next/image';
import s from './HeaderLogo.component.module.scss';

const HeaderLogo = ({ type }: { type?: string }) => {
  return (
    <section data-testid="header-logo" className={s.logoSection}>
      <a href={'/Blog'}>
        {type === 'Blog' ? (
          <Image
            className={s.logoSection__img}
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1730720445/Portfolio/Icons/logo_black_ev3ukd.svg"
            alt="Blog's logo"
            width={150}
            height={150}
          />
        ) : (
          <Image
            className={s.logoSection__img}
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1730720485/Portfolio/Icons/logo_zotefy.svg"
            alt="Blog's logo"
            width={150}
            height={150}
          />
        )}
      </a>
    </section>
  );
};

export default HeaderLogo;
