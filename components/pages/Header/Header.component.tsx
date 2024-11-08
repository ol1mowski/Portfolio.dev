import NavBar from "./NavBar/NavBar.component";
import HeaderLogo from "./Logo/HeaderLogo.component";
import ShowMobileMenu from "./ShowMobileMenu/ShowMobileMenu.component";
import HeaderWrapper from "./HeaderWrapper/HeaderWrapper.component";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo />
        <ShowMobileMenu />
        <NavBar />
      </HeaderWrapper>
    </>
  );
};

export default Header;
