import { describe, expect, it } from "@jest/globals";
import { formatAuthors } from ".";

describe("utilities", () => {
  describe("formatAuthors", () => {
    it("empty array", () => {
      expect(formatAuthors([])).toBe("");
    });

    it("one item in array", () => {
      expect(
        formatAuthors([
          {
            name: "John Doe",
          },
        ]),
      ).toBe("John Doe");
    });

    it("two items in array", () => {
      expect(
        formatAuthors([
          {
            name: "John Doe",
          },
          {
            name: "Jane Doe",
          },
        ]),
      ).toBe("John Doe and Jane Doe");
    });

    it("three items in array", () => {
      expect(
        formatAuthors([
          {
            name: "John Doe",
          },
          {
            name: "Jane Doe",
          },
          {
            name: "Jack Doe",
          },
        ]),
      ).toBe("John Doe, Jane Doe and Jack Doe");
    });
  });
});
