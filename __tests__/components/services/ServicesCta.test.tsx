import React from 'react';
import { render, screen } from '@testing-library/react';
import ServicesCta from '../../../components/pages/Services/ServicesCta/ServicesCta.component';

describe('ServicesCta Component', () => {
  const mockDes = "Test description";
  
  it('renders the description correctly', () => {
    render(<ServicesCta des={mockDes} />);
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it('renders the contact button with correct text', () => {
    render(<ServicesCta des={mockDes} />);
    expect(screen.getByRole('button', { name: /Skontaktuj Się/i })).toBeInTheDocument();
  });

  it('has correct href for contact link', () => {
    render(<ServicesCta des={mockDes} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#contact');
  });

  it('renders with ReactNode description', () => {
    const complexDes = <span>Complex <strong>description</strong></span>;
    render(<ServicesCta des={complexDes} />);
    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
  });

  it('maintains correct structure with wrapper classes', () => {
    render(<ServicesCta des={mockDes} />);
    expect(screen.getByTestId('cta-wrapper')).toHaveClass('ctaWrapper');
    expect(screen.getByTestId('des-wrapper')).toHaveClass('ctaWrapper__desWrapper');
    expect(screen.getByTestId('button-wrapper')).toHaveClass('ctaWrapper__buttonWrapper');
  });
}); 