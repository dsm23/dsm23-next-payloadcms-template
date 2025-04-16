import { describe, expect, it } from "@jest/globals";
import { toKebabCase } from ".";

describe("utilities", () => {
  describe("toKebabCase", () => {
    it("normal sentence", () => {
      expect(toKebabCase("The quick brown fox jumps over the lazy dog")).toBe(
        "the-quick-brown-fox-jumps-over-the-lazy-dog",
      );
    });

    it("camelCase sentence", () => {
      expect(toKebabCase("theQuickBrownFoxJumpsOverTheLazyDog")).toBe(
        "the-quick-brown-fox-jumps-over-the-lazy-dog",
      );
    });

    it("PascalCase sentence", () => {
      expect(toKebabCase("TheQuickBrownFoxJumpsOverTheLazyDog")).toBe(
        "the-quick-brown-fox-jumps-over-the-lazy-dog",
      );
    });
  });
});
