import HamburgerClickContext from '@/store/HamburgerClickContext';
import { useContext } from 'react';
import s from './HamburgerMenuIcon.component.module.scss';

const HamburgerMenuIcon = () => {
  const { setOpen } = useContext(HamburgerClickContext);

  const openHamburgerMenuHandler = () => {
    setOpen(true);
  };

  return (
    <div className={s.hamburgerMenu} onClick={openHamburgerMenuHandler}>
      <div className={s.hamburgerMenu__line}></div>
      <div className={s.hamburgerMenu__line}></div>
      <div className={s.hamburgerMenu__line}></div>
    </div>
  );
};

export default HamburgerMenuIcon;
