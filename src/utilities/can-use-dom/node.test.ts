/**
 * @vitest-environment node
 */

import { describe, expect, it } from "vitest";
import canUseDOM from ".";

describe("utilities", () => {
  describe("canUseDOM", () => {
    it("can't use DOM", () => {
      expect(canUseDOM).toBe(false);
    });
  });
});
