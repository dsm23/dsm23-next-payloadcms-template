import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Textarea } from ".";

describe("component", () => {
  describe("Textarea", () => {
    it("should render correctly", () => {
      const { container } = render(<Textarea />);

      expect(container.querySelector("textarea")).toBeInTheDocument();
    });
  });
});
