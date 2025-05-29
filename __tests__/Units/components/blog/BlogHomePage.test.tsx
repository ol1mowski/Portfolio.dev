import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import React from 'react';

import HomePageComponent from '../../../../components/pages/Blog/HomePage/HomePage.page';

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('HomePageComponent', () => {
  beforeAll(() => {
    global.IntersectionObserver = vi.fn(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
      root: null,
      rootMargin: '',
      thresholds: [],
      takeRecords: vi.fn(),
    }));
  });

  const mockPosts = [
    {
      category: 'React',
      title: 'First Post',
      description: 'This is the first post',
      slug: 'first-post',
    },
    {
      category: 'TypeScript',
      title: 'Latest Post',
      description: 'This is the latest post',
      slug: 'latest-post',
    },
  ];

  it('displays the last post correctly', () => {
    render(<HomePageComponent posts={mockPosts} />);

    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Latest Post')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Czytaj/i })).toHaveAttribute(
      'href',
      '/Blog/posty/first-post'
    );
  });
});
