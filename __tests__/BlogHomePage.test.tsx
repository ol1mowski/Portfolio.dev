import { render, screen } from "@testing-library/react";
import HomePageComponent from "../components/pages/Blog/HomePage/HomePage.page";
import React from "react";

describe("HomePageComponent", () => {
  beforeAll(() => {
    global.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
      root: null,
      rootMargin: "",
      thresholds: [],
      takeRecords: jest.fn(),
    }));
  });

  const mockPosts = [
    {
      category: "Tech",
      title: "First Post",
      description: "This is the first post",
      slug: "first-post",
    },
    {
      category: "Lifestyle",
      title: "Latest Post",
      description: "This is the latest post",
      slug: "latest-post",
    },
  ];

  it("displays the last post correctly", () => {
    render(<HomePageComponent posts={mockPosts} />);

    expect(screen.getByText("Lifestyle")).toBeInTheDocument();
    expect(screen.getByText("Latest Post")).toBeInTheDocument();
    expect(screen.getByText("This is the latest post")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Czytaj/i })).toHaveAttribute(
      "href",
      "/Blog/posty/latest-post"
    );
  });
});
