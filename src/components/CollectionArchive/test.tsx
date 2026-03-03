import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { CollectionArchive } from ".";

describe("component", () => {
  describe("CollectionArchive", () => {
    it("should render correctly", () => {
      const { container } = render(<CollectionArchive posts={[]} />);

      expect(container.querySelector(".container")).toBeInTheDocument();
    });
  });
});
