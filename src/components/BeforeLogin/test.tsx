import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
