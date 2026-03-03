import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Label } from ".";

describe("component", () => {
  describe("Label", () => {
    it("should render correctly", () => {
      const { container } = render(<Label>Hello, World!</Label>);

      expect(container.querySelector("label")).toBeInTheDocument();
    });
  });
});
