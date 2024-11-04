import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "../components/pages/Projects/Projects.page";


jest.mock("../components/pages/Projects/ProjectHeader/ProjectHeader.component", () => () => <div>Project Header</div>);
jest.mock("../components/pages/Projects/ProjectsWrapper/ProjectsWrapper.component", () => ({ children }) => <div>{children}</div>);
jest.mock("../components/pages/Projects/ProjectContainer/ProjectContainer.component", () => ({ title }) => <div>{title}</div>);


describe("Projects Component", () => {
  it("renders the header and project components when projects are provided", () => {
    const mockProjects = [
      {
        _id: "1",
        projects: [
          {
            id: "project 1",
            image: "image1.png",
            title: "Project 1",
            date: "2024-01-01",
            description: "Description 1",
            technologies: ["React"],
            githubLink: "https://github.com/project1",
            liveLink: "https://project1.com",
          },
        ],
      },
    ];

    render(<Projects projects={mockProjects} />);

    expect(screen.getByText("Project Header")).toBeInTheDocument();
    expect(screen.getByText("Project 1")).toBeInTheDocument();
  });

  it("displays a message when no projects are available", () => {
    render(<Projects projects={[]} />);

    expect(screen.getByText("[-]No projects available.")).toBeInTheDocument();
  });
});
