import { render, screen } from "@testing-library/react";
import Opinion from "../../../components/pages/Opinions/Opinion/Opinion.component";
import React from "react";


jest.mock("next/image", () => {
  return (props: any) => <img {...props} />;
});

describe("Opinion Component", () => {
  const mockOpinion = {
    content: "This is a great product!",
    link: "https://example.com/full-opinion",
    companyImage: "https://example.com/logo.png",
    companyName: "Example Company",
  };

  it("renders the opinion correctly", () => {
    render(<Opinion opinion={mockOpinion} />);

    expect(screen.getByText("This is a great product!")).toBeInTheDocument();

    const linkElement = screen.getByText("Zobacz Pełną Opinię");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", "https://example.com/full-opinion");


    const imageElement = screen.getByAltText("Company Logo");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "https://example.com/logo.png");

    expect(screen.getByText("Example Company")).toBeInTheDocument();
  });
});
