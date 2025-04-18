import { describe, expect, it } from "@jest/globals";
import { cn } from ".";

describe("utilities", () => {
  describe("cn", () => {
    it("works normally", () => {
      expect(cn("bg-red hover:bg-dark-red px-2 py-1", "bg-[#B91C1C] p-3")).toBe(
        "hover:bg-dark-red bg-[#B91C1C] p-3",
      );
    });

    it("removes undefined", () => {
      expect(cn("px-2", undefined)).toBe("px-2");
    });
  });
});
