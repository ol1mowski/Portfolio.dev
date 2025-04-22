import HamburgerClickContext from '@/store/HamburgerClickContext';
import Image from 'next/image';
import { useContext } from 'react';
import s from './HamburgerMenuIcon.component.module.scss';

const HamburgerMenuIcon = ({ post }: { post?: boolean }) => {
  const { setOpen } = useContext(HamburgerClickContext);

  const openHamburgerMenuHandler = () => {
    setOpen(true);
  };

  return (
    <section className={s.hamburgerMenu}>
      <Image
        onClick={openHamburgerMenuHandler}
        src={
          post
            ? 'https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/hamburger_black_cyojcu.svg'
            : 'https://res.cloudinary.com/dbbuav0rj/image/upload/v1730720512/Portfolio/Icons/hamburger_m5krnb.svg'
        }
        alt="Hamburger menu icon"
        width={30}
        height={30}
      />
    </section>
  );
};

export default HamburgerMenuIcon;
