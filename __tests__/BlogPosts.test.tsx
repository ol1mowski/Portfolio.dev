import { render, screen } from '@testing-library/react';
import PostsComponent from '../components/pages/Blog/Posts/Posts.page';
import React from 'react';


describe('PostsComponent', () => {
  beforeAll(() => {
    global.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
      root: null,
      rootMargin: '',
      thresholds: [],
      takeRecords: jest.fn(),
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
