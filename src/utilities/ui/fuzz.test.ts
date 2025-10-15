import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { cn } from ".";

describe("utils", () => {
  describe("cn", () => {
    it("should return an empty string if no valid fuzzed inputs are provided", () => {
      fc.assert(
        fc.property(fc.string(), (className) => {
          if (className.trim() === "") {
            expect(cn(className)).toBe("");

            return;
          }

          expect(cn(className)).toBe(className.trim().replace(/\s{2,}/g, " "));
        }),
      );
    });

    it("should correctly merge Tailwind CSS classes and fuzzed input", () => {
      fc.assert(
        fc.property(fc.string(), (className) => {
          if (className.trim() === "") {
            expect(cn("px-2 py-1", "px-4", className)).toBe("py-1 px-4");

            return;
          }

          expect(cn("px-2 py-1", "px-4", className)).toBe(
            `py-1 px-4 ${className.trim().replace(/\s{2,}/g, " ")}`,
          );
        }),
      );
    });
  });
});
