import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import React from 'react';

import MobileMenuHeader from '../../../../components/pages/Header/MobileMenu/MobileMenuHeader.component';
import HamburgerClickContext from '../../../../store/HamburgerClickContext';

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

vi.mock('../../../../data/MenuItems.data.ts', () => ({
  menuItems: [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'O mnie' },
  ],
}));

describe('MobileMenuHeader', () => {
  it('renders the menu when isOpen is true', () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: true, setOpen: vi.fn() }}>
        <MobileMenuHeader />
      </HamburgerClickContext.Provider>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('O mnie')).toBeInTheDocument();
  });

  it('does not render the menu when isOpen is false', () => {
    render(
      <HamburgerClickContext.Provider value={{ isOpen: false, setOpen: vi.fn() }}>
        <MobileMenuHeader />
      </HamburgerClickContext.Provider>
    );

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('calls setOpen(false) when the close icon is clicked', () => {
    const setOpenMock = vi.fn();
    render(
      <HamburgerClickContext.Provider value={{ isOpen: true, setOpen: setOpenMock }}>
        <MobileMenuHeader />
      </HamburgerClickContext.Provider>
    );

    const closeIcon = screen.getByAltText('close Menu icon');
    fireEvent.click(closeIcon);

    expect(setOpenMock).toHaveBeenCalledWith(false);
  });
});
