import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';

import HamburgerClickContext from '../../../../store/HamburgerClickContext';
import Header from '../../../../components/pages/Blog/HeaderBlog/Header.component.page';

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('Header component', () => {
  const renderWithProvider = (isOpen = false) => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen, setOpen: vi.fn() }}>
        <Header type="testType" />
      </HamburgerClickContext.Provider>
    );
  };

  it('renders HeaderLogo and DesktopNavMenu', () => {
    renderWithProvider();
    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-nav-menu')).toBeInTheDocument();
  });

  it('shows HamburgerMenuComponent when isOpen is true', () => {
    renderWithProvider(true);
    expect(screen.getByTestId('hamburger-menu-component')).toBeInTheDocument();
  });

  it('does not show HamburgerMenuComponent when isOpen is false', () => {
    renderWithProvider();
    expect(screen.queryByTestId('hamburger-menu-component')).not.toBeInTheDocument();
  });
});
