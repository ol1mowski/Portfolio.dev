import { render, screen } from '@testing-library/react';
import HeroCta from '@/components/pages/HomePage/HomePageInfo/HeroCta/HeroCta.component';
import '@testing-library/jest-dom';

describe('HeroCta', () => {
  test('renders the correct text and button', () => {
    render(<HeroCta />);

    const textElement = screen.getByText(/Cześć! Nazywam się Oliwier Markiewicz/i);
    expect(textElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /Zwiększ Swoją Sprzedaż/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
