import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import PostsComponent from '../../../../components/pages/Blog/Posts/Posts.page';

import type { PostsType } from '../../../../types/PostType.type';

vi.mock(
  '../../../../components/pages/Blog/Posts/PostCardComponent/PostCardComponent.component',
  () => ({
    default: ({ title, author }: { title: string; author: string }) => (
      <div data-testid="post-card" role="article">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    ),
  })
);

vi.mock('../../../../components/pages/Blog/Posts/PostsButton/PostsButton.component', () => ({
  default: () => <div data-testid="posts-button">View More</div>,
}));

describe('PostsComponent', () => {
  const mockPosts: PostsType[] = [
    {
      id: 1,
      title: 'Test Post 1',
      slug: 'test-post-1',
      description: 'Test Description 1',
      author: 'Test Author 1',
      image: '/test1.jpg',
      authorImage: '/author1.jpg',
      date: '2024-03-20',
      readTime: 5,
      category: 'Test',
      content: [],
    },
    {
      id: 2,
      title: 'Test Post 2',
      slug: 'test-post-2',
      description: 'Test Description 2',
      author: 'Test Author 2',
      image: '/test2.jpg',
      authorImage: '/author2.jpg',
      date: '2024-03-21',
      readTime: 3,
      category: 'Test',
      content: [],
    },
  ];

  it('renders all posts correctly', () => {
    render(<PostsComponent posts={mockPosts} />);

    expect(screen.getByText('Najnowsze artykuły')).toBeDefined();
    expect(screen.getAllByTestId('post-card')).toHaveLength(2);
    expect(screen.getByTestId('posts-button')).toBeDefined();

    // Sprawdzam posty w głównej sekcji (mocked post-card components)
    const postCards = screen.getAllByTestId('post-card');
    expect(postCards[0]).toContainHTML('Test Post 1');
    expect(postCards[0]).toContainHTML('Test Author 1');
    expect(postCards[1]).toContainHTML('Test Post 2');
    expect(postCards[1]).toContainHTML('Test Author 2');
  });

  it('renders posts in correct section', () => {
    render(<PostsComponent posts={mockPosts} />);

    const postsSection = screen.getByTestId('posts-section');
    expect(postsSection).toBeDefined();
    expect(postsSection.getAttribute('id')).toBe('posts');
  });

  it('handles empty posts array', () => {
    render(<PostsComponent posts={[]} />);

    expect(screen.queryByTestId('post-card')).toBeNull();
    expect(screen.getByText('Najnowsze artykuły')).toBeDefined();
    expect(screen.getByTestId('posts-button')).toBeDefined();
  });

  it('renders posts with correct structure', () => {
    render(<PostsComponent posts={mockPosts} />);

    const postsSection = screen.getByTestId('posts-section');
    expect(postsSection).toBeInTheDocument();
    expect(screen.getAllByTestId('post-card')).toHaveLength(2);
  });
});
