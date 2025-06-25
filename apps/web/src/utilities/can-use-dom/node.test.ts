/**
 * @jest-environment node
 */

import { describe, expect, it } from "@jest/globals";
import canUseDOM from ".";

describe("utilities", () => {
  describe("canUseDOM", () => {
    it("can't use DOM", () => {
      expect(canUseDOM).toBe(false);
    });
  });
});
