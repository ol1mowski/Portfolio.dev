import { render, screen, waitFor } from '@testing-library/react';
import Projects from '../../../../components/pages/Projects/Projects.page';
import React from 'react';

jest.mock('../../../../components/pages/Projects/ProjectHeader/ProjectHeader.component', () => {
  return function MockProjectHeader() {
    return <div data-testid="project-header">Projects Header</div>;
  };
});

jest.mock('../../../../components/pages/Projects/ProjectContainer/ProjectContainer.component', () => {
  return function MockProjectContainer(props: any) {
    return (
      <div data-testid="project-container">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    );
  };
});

jest.mock('../../../../components/pages/Projects/ProjectsWrapper/ProjectsWrapper.component', () => {
  return function MockProjectsWrapper({ children }: { children: React.ReactNode }) {
    return <div data-testid="projects-wrapper">{children}</div>;
  };
});

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
    jest.clearAllMocks();
  });

  it('renders projects section correctly', async () => {
    render(<Projects projects={mockProjects} />);

    await waitFor(() => {
      expect(screen.getByTestId('project-header')).toBeInTheDocument();
      expect(screen.getByTestId('projects-wrapper')).toBeInTheDocument();
      
      const projectContainers = screen.getAllByTestId('project-container');
      expect(projectContainers).toHaveLength(2);
      
      expect(screen.getByText('Test Project 1')).toBeInTheDocument();
      expect(screen.getByText('Test Project 2')).toBeInTheDocument();
    });
  });

  it('shows error message when no projects are available', async () => {
    render(<Projects projects={[]} />);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('No projects available');
    });
  });

  it('handles undefined projects gracefully', async () => {
    // @ts-ignore - Testing invalid props
    render(<Projects projects={undefined} />);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('No projects available');
    });
  });

  it('renders with correct accessibility attributes', async () => {
    render(<Projects projects={mockProjects} />);

    await waitFor(() => {
      const section = screen.getByRole('region', { name: /portfolio projects section/i });
      expect(section).toBeInTheDocument();
      expect(section).toHaveAttribute('id', 'projects');
    });
  });
});
