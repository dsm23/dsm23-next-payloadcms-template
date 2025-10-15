import { describe, expect, it } from "vitest";
import canUseDOM from ".";

describe("utilities", () => {
  describe("canUseDOM", () => {
    it("can use DOM", () => {
      expect(canUseDOM).toBe(true);
    });
  });
});
