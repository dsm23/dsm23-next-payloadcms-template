import { describe, expect, it } from "@jest/globals";
import canUseDOM from ".";

describe("utilities", () => {
  describe("canUseDOM", () => {
    it("can use DOM", () => {
      expect(canUseDOM).toBe(true);
    });
  });
});
