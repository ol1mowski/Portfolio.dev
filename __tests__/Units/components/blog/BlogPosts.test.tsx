import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import React from 'react';

import PostsComponent from '../../../../components/pages/Blog/Posts/Posts.page';

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('PostsComponent', () => {
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
      id: '1',
      title: 'First Post',
      slug: 'first-post',
      description: 'Description of the first post',
      author: 'Author One',
      image: '/images/first.jpg',
      authorImage: '/images/author1.jpg',
      date: '2024-01-01',
    },
    {
      id: '2',
      title: 'Second Post',
      slug: 'second-post',
      description: 'Description of the second post',
      author: 'Author Two',
      image: '/images/second.jpg',
      authorImage: '/images/author2.jpg',
      date: '2024-02-01',
    },
  ];

  it('renders the PostsHeader component', () => {
    render(<PostsComponent posts={mockPosts} />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('renders all PostCardComponent components', () => {
    render(<PostsComponent posts={mockPosts} />);
    
    mockPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.description)).toBeInTheDocument();
      expect(screen.getByText(post.author)).toBeInTheDocument();
    });
  });

  it('renders the PostsButton component', () => {
    render(<PostsComponent posts={mockPosts} />);
    expect(screen.getByRole('button', { name: /Więcej/i })).toBeInTheDocument();
  });
});