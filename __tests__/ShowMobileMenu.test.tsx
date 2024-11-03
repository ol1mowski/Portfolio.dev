import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShowMobileMenu from "../components/pages/Header/ShowMobileMenu/ShowMobileMenu.component";
import HamburgerClickContext from "../store/HamburgerClickContext";


jest.mock("../components/pages/Header/MobileMenu/MobileMenuHeader.component", () => () => <div data-testid="mobile-menu-header">Mobile Menu Header</div>);

describe("ShowMobileMenu Component", () => {
  it("renders the hamburger icon", () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: false, setOpen: jest.fn() }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );


    const hamburgerIcon = screen.getByAltText("hamburger menu icon");
    expect(hamburgerIcon).toBeInTheDocument();
  });

  it("calls setOpen(true) when the hamburger icon is clicked", () => {
    const setOpenMock = jest.fn();
    render(
      <HamburgerClickContext.Provider value={{ isOpen: false, setOpen: setOpenMock }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );


    const hamburgerIcon = screen.getByAltText("hamburger menu icon");
    fireEvent.click(hamburgerIcon);


    expect(setOpenMock).toHaveBeenCalledWith(true);
  });

  it("renders MobileMenuHeader when isOpen is true", () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: true, setOpen: jest.fn() }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );


    const mobileMenuHeader = screen.getByTestId("mobile-menu-header");
    expect(mobileMenuHeader).toBeInTheDocument();
  });

  it("does not render MobileMenuHeader when isOpen is false", () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: false, setOpen: jest.fn() }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );


    expect(screen.queryByTestId("mobile-menu-header")).not.toBeInTheDocument();
  });
});
