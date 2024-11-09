import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroCta from '../../../components/pages/HomePage/HomePageInfo/HeroCta/HeroCta.component';

describe('HeroCta', () => {
  test('renders the correct text and button', () => {
    render(<HeroCta />); 

    const buttonElement = screen.getByRole('button', { name: /Zwiększ Swoją Sprzedaż/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
