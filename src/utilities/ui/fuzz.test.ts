import { fc, it } from "@fast-check/jest";
import { describe, expect } from "@jest/globals";
import { cn } from ".";

describe("utils", () => {
  describe("cn", () => {
    it("should return an empty string if no valid fuzzed inputs are provided", () => {
      fc.assert(
        fc.property(fc.string(), (className) => {
          if (className.trim() === "") {
            return expect(cn(className)).toBe("");
          }

          expect(cn(className)).toBe(className.trim().replace(/\s{2,}/g, " "));
        }),
      );
    });

    it("should correctly merge Tailwind CSS classes and fuzzed input", () => {
      fc.assert(
        fc.property(fc.string(), (className) => {
          if (className.trim() === "") {
            return expect(cn("px-2 py-1", "px-4", className)).toBe("py-1 px-4");
          }

          expect(cn("px-2 py-1", "px-4", className)).toBe(
            `py-1 px-4 ${className.trim().replace(/\s{2,}/g, " ")}`,
          );
        }),
      );
    });
  });
});
