/**
 * @vitest-environment-options {"url": "https://vitest.dev/"}
 */

import { describe, expect, it } from "vitest";
import { getClientSideURL } from ".";

describe("utilities", () => {
  describe("getClientSideURL", () => {
    it("in the client browser", () => {
      expect(getClientSideURL()).toBe("https://vitest.dev");
    });
  });
});
