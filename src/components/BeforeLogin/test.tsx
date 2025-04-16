import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import BeforeLogin from ".";

describe("component", () => {
  describe("BeforeLogin", () => {
    it("should render correctly", () => {
      render(<BeforeLogin />);

      expect(
        screen.getByText("Welcome to your dashboard!"),
      ).toBeInTheDocument();
    });
  });
});
