import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("component", () => {
  describe("Button", () => {
    it("should render correctly", () => {
      render(<Button>Hello, World!</Button>);

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render correctly, asChild", () => {
      render(
        <Button asChild>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Hello, World!</a>
        </Button>,
      );

      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });
});
