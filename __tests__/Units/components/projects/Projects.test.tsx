import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import React from 'react';

import Projects from '../../../../components/pages/Projects/Projects.page';

vi.mock('../../../../components/pages/Projects/hooks/useDynamicImport.hook', () => ({
  createDynamicComponent: (importFunc: any) => {
    const Component = (props: any) => {
      const MockedComponent = importFunc().default;
      return <MockedComponent {...props} />;
    };
    return Component;
  }
}));

vi.mock('@/components/UI/AnimationWrapper/AnimationWrapper.component', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="animation-wrapper">{children}</div>
  )
}));

vi.mock('../../../../components/pages/Projects/ProjectHeader/ProjectHeader.component', () => ({
  default: () => <div data-testid="project-header">Projects Header</div>
}));

vi.mock('../../../../components/pages/Projects/ProjectContainer/ProjectContainer.component', () => ({
  default: (props: any) => (
    <div data-testid="project-container">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}));

vi.mock('../../../../components/pages/Projects/ProjectsWrapper/ProjectsWrapper.component', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="projects-wrapper">{children}</div>
  )
}));

vi.mock('../../../../components/pages/Projects/ProjectContainer/ProjectImage/ProjectImage.component', () => ({
  default: (props: any) => <div data-testid="project-image">Image: {props.image}</div>
}));

vi.mock('../../../../components/pages/Projects/ProjectContainer/ProjectTitle/ProjectTitle.component', () => ({
  default: (props: any) => <div data-testid="project-title">Title: {props.title} ({props.date})</div>
}));

vi.mock('../../../../components/pages/Projects/ProjectContainer/ProjectDescription/ProjectDescription.component', () => ({
  default: (props: any) => <div data-testid="project-description">Description: {props.description}</div>
}));

vi.mock('../../../../components/pages/Projects/ProjectContainer/ProjectTools/ProjectTools.component', () => ({
  default: (props: any) => (
    <div data-testid="project-tools">
      Technologies: {props.technologies.join(', ')}
    </div>
  )
}));

vi.mock('../../../../components/pages/Projects/ProjectContainer/ProjectCta/ProjectCta.component', () => ({
  default: (props: any) => (
    <div data-testid="project-cta">
      Links: {props.githubLink}, {props.liveLink}
    </div>
  )
}));

const mockProjects = [{
  projects: [
    {
      id: '1',
      title: 'Test Project 1',
      description: 'Test Description 1',
      image: 'test1.jpg',
      technologies: ['React', 'Next.js'],
      githubLink: 'https://github.com/test1',
      liveLink: 'https://test1.com',
      date: '2024'
    },
    {
      id: '2',
      title: 'Test Project 2',
      description: 'Test Description 2',
      image: 'test2.jpg',
      technologies: ['TypeScript', 'Node.js'],
      githubLink: 'https://github.com/test2',
      liveLink: 'https://test2.com',
      date: '2024'
    }
  ]
}];

describe('Projects Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders projects section correctly', async () => {
    render(<Projects projects={mockProjects} />);

    await waitFor(() => {
      expect(screen.getByTestId('project-header')).toBeDefined();
      expect(screen.getByTestId('projects-wrapper')).toBeDefined();
      
      const projectContainers = screen.getAllByTestId('project-container');
      expect(projectContainers).toHaveLength(2);
      
      expect(screen.getByText('Test Project 1')).toBeDefined();
      expect(screen.getByText('Test Project 2')).toBeDefined();
    });
  });

  it('shows error message when no projects are available', async () => {
    render(<Projects projects={[]} />);

    await waitFor(() => {
      const alert = screen.getByRole('alert');
      expect(alert.textContent).toBe('No projects available');
    });
  });

  it('handles undefined projects gracefully', async () => {
    render(<Projects projects={undefined as any} />);

    await waitFor(() => {
      const alert = screen.getByRole('alert');
      expect(alert.textContent).toBe('No projects available');
    });
  });

  it('renders with correct accessibility attributes', async () => {
    render(<Projects projects={mockProjects} />);

    await waitFor(() => {
      const section = screen.getByRole('region', { name: /portfolio projects section/i });
      expect(section).toBeDefined();
      expect(section.getAttribute('id')).toBe('projects');
    });
  });
});
