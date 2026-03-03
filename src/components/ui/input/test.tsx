import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Input } from ".";

describe("component", () => {
  describe("Input", () => {
    it("should render correctly", () => {
      const { container } = render(<Input />);

      expect(container.querySelector("input")).toBeInTheDocument();
    });
  });
});
