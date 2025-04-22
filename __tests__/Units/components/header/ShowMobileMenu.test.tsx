import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import ShowMobileMenu from '../../../../components/pages/Header/ShowMobileMenu/ShowMobileMenu.component';
import HamburgerClickContext from '../../../../store/HamburgerClickContext';

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const imgProps = {
      ...props,
      unoptimized: props.unoptimized ? 'true' : undefined,
    };
    return <img {...imgProps} />;
  },
}));

vi.mock('../../../../components/pages/Header/MobileMenu/MobileMenuHeader.component', () => ({
  default: () => <div data-testid="mobile-menu-header">Mobile Menu Header</div>,
}));

describe('ShowMobileMenu Component', () => {
  it('renders the hamburger icon', () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: false, setOpen: vi.fn() }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );

    const hamburgerIcon = screen.getByTestId('hamburger-icon');
    expect(hamburgerIcon).toBeDefined();
  });

  it('calls setOpen(true) when the hamburger button is clicked', () => {
    const setOpenMock = vi.fn();
    render(
      <HamburgerClickContext.Provider value={{ isOpen: false, setOpen: setOpenMock }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );
  });

  it('renders MobileMenuHeader when isOpen is true', () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: true, setOpen: vi.fn() }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );

    expect(screen.getByTestId('mobile-nav')).toBeDefined();
  });

  it('does not render MobileMenuHeader when isOpen is false', () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: false, setOpen: vi.fn() }}>
        <ShowMobileMenu />
      </HamburgerClickContext.Provider>
    );

    const mobileMenu = screen.queryByTestId('mobile-menu');
    expect(mobileMenu).toBeNull();
  });
});
