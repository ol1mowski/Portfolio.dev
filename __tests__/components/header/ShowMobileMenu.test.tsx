import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShowMobileMenu from "../../../components/pages/Header/ShowMobileMenu/ShowMobileMenu.component";
import HamburgerClickContext from "../../../store/HamburgerClickContext";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const imgProps = {
      ...props,
      unoptimized: props.unoptimized ? "true" : undefined
    };
    return <img {...imgProps} />;
  },
}));

jest.mock("../../../components/pages/Header/MobileMenu/MobileMenuHeader.component", () => () => <div data-testid="mobile-menu-header">Mobile Menu Header</div>);

describe("ShowMobileMenu Component", () => {
  it("renders the hamburger icon", () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: false, setOpen: jest.fn() }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );

    const hamburgerButton = screen.getByTestId('hamburger-button');
    const hamburgerIcon = screen.getByTestId('hamburger-icon');
    
    expect(hamburgerButton).toBeInTheDocument();
    expect(hamburgerIcon).toBeInTheDocument();
  });

  it("calls setOpen(true) when the hamburger button is clicked", () => {
    const setOpenMock = jest.fn();
    render(
      <HamburgerClickContext.Provider value={{ isOpen: false, setOpen: setOpenMock }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );

    const hamburgerButton = screen.getByTestId('hamburger-button');
    fireEvent.click(hamburgerButton);
    expect(setOpenMock).toHaveBeenCalledWith(true);
  });

  it("renders MobileMenuHeader when isOpen is true", () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: true, setOpen: jest.fn() }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );

    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
  });

  it("does not render MobileMenuHeader when isOpen is false", () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: false, setOpen: jest.fn() }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );

    const mobileMenu = screen.queryByTestId('mobile-menu');
    expect(mobileMenu).not.toBeInTheDocument();
  });
});