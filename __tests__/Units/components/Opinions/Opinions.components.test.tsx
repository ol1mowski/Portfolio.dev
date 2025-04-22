import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import OpinionHeader from '../../../../components/pages/Opinions/OpinionHeader/OpinionHeader.component';
import SectionName from '../../../../components/pages/Opinions/SectionName/SectionName.component';
import OpinionsWrapper from '../../../../components/pages/Opinions/OpinionsWrapper/OpinionsWrapper.component';
import Opinion from '../../../../components/pages/Opinions/Opinion/Opinion.component';

vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />,
}));

vi.mock('@/components/UI/Word/Paragraph.component', () => ({
  default: ({ value }: { value: string }) => <span>{value}</span>,
}));

vi.mock('./Opinion.component.module.scss', () => ({
  default: {
    opinion: 'opinion',
    opinion__text: 'opinion__text',
    opinion__imgWrapper: 'opinion__imgWrapper',
  },
}));

describe('Opinion Components', () => {
  describe('OpinionHeader', () => {
    it('renders header with correct text', () => {
      render(<OpinionHeader />);
      expect(screen.getByText('Ostatnie Opinie Moich Klientów')).toBeDefined();
    });
  });

  describe('SectionName', () => {
    it('renders section name', () => {
      render(<SectionName />);
      expect(screen.getByText('Opinie')).toBeDefined();
    });
  });

  describe('OpinionsWrapper', () => {
    it('renders children correctly', () => {
      render(
        <OpinionsWrapper>
          <div data-testid="test-child">Test Content</div>
        </OpinionsWrapper>
      );
      expect(screen.getByTestId('test-child')).toBeDefined();
      expect(screen.getByText('Test Content')).toBeDefined();
    });
  });

  describe('Opinion', () => {
    const mockOpinion = {
      content: 'Świetna współpraca!',
      link: 'https://example.com',
      companyImage: '/company-logo.jpg',
      companyName: 'Test Company',
    };

    it('renders opinion content correctly', () => {
      render(<Opinion opinion={mockOpinion} />);

      expect(screen.getByText('Świetna współpraca!')).toBeDefined();
      expect(screen.getByText('Test Company')).toBeDefined();

      const link = screen.getByRole('link');
      expect(link).toBeDefined();
      expect(link.getAttribute('href')).toBe('https://example.com');

      const image = screen.getByRole('img');
      expect(image).toBeDefined();
      expect(image.getAttribute('alt')).toBe('Company Logo');
    });

    it('renders with correct structure', () => {
      const { container } = render(<Opinion opinion={mockOpinion} />);

      expect(container.querySelector('article')).toBeDefined();
      expect(container.querySelector('p')).toBeDefined();
      expect(container.querySelector('a')).toBeDefined();
      expect(container.querySelector('img')).toBeDefined();
    });
  });
});
