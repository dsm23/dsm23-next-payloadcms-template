import { describe, expect, it } from "@jest/globals";
import { cn } from ".";

describe("utilities", () => {
  describe("cn", () => {
    it("should correctly merge Tailwind CSS classes", () => {
      expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
      expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
      expect(cn("bg-red-500 hover:bg-blue-500", "bg-green-500")).toBe(
        "hover:bg-blue-500 bg-green-500",
      );
    });

    it("should handle conditional classes", () => {
      expect(cn("text-red-500", true && "font-bold")).toBe(
        "text-red-500 font-bold",
      );
      expect(cn("text-red-500", false && "font-bold")).toBe("text-red-500");
    });

    it("should handle arrays of classes", () => {
      expect(cn(["px-2", "py-1"], ["px-4"])).toBe("py-1 px-4");
      expect(cn(["text-red-500", "font-bold"], ["text-blue-500"])).toBe(
        "font-bold text-blue-500",
      );
    });

    it("should ignore null, undefined, and empty strings", () => {
      expect(cn("px-2", null, undefined, "", "py-1")).toBe("px-2 py-1");
    });

    it("should return an empty string if no valid inputs are provided", () => {
      expect(cn(null, undefined, "")).toBe("");
      expect(cn()).toBe("");
    });

    it("should combine different types of inputs", () => {
      expect(
        cn("text-lg", false && "font-semibold", ["p-4", "m-2"], {
          "bg-blue-200": true,
        }),
      ).toBe("text-lg p-4 m-2 bg-blue-200");
    });
  });
});
