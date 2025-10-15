/**
 * @vitest-environment-options {"url": "http://localhost:3000/"}
 */

import { describe, expect, it } from "vitest";
import { getClientSideURL } from ".";

describe("utilities", () => {
  describe("getClientSideURL", () => {
    it("has port in the client browser", () => {
      expect(getClientSideURL()).toBe("http://localhost:3000");
    });
  });
});
