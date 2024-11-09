import { memo } from 'react';
import dynamic from 'next/dynamic';
import HeaderLogo from "./Logo/HeaderLogo.component";
import NavBar from "./NavBar/NavBar.component";
import HeaderWrapper from "./HeaderWrapper/HeaderWrapper.component";


const ShowMobileMenu = dynamic(() => 
  import("./ShowMobileMenu/ShowMobileMenu.component"), {
  ssr: false
});

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <ShowMobileMenu />
      <NavBar />
    </HeaderWrapper>
  );
});

Header.displayName = 'Header';

export default Header;
