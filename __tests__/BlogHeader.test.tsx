import React from "react";
import { render, screen } from "@testing-library/react";
import HamburgerClickContext from "../store/HamburgerClickContext";
import Header from "../components/pages/Blog/HeaderBlog/Header.component.page";

describe("Header component", () => {
  const renderWithProvider = (isOpen = false) => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen, setOpen: jest.fn() }}>
        <Header type="testType" />
      </HamburgerClickContext.Provider>
    );
  };

  it("renders HeaderLogo and DesktopNavMenu", () => {
    renderWithProvider();
    expect(screen.getByTestId("header-logo")).toBeInTheDocument();
    expect(screen.getByTestId("desktop-nav-menu")).toBeInTheDocument();
  });

  it("shows HamburgerMenuComponent when isOpen is true", () => {
    renderWithProvider(true);
    expect(screen.getByTestId("hamburger-menu-component")).toBeInTheDocument();
  });

  it("does not show HamburgerMenuComponent when isOpen is false", () => {
    renderWithProvider();
    expect(
      screen.queryByText(/HamburgerMenuComponent/i)
    ).not.toBeInTheDocument();
  });
});
